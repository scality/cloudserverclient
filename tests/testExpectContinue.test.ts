import http, { Server } from 'http';
import { AddressInfo } from 'net';
import { promisify } from 'util';
import {
    BackbeatRoutesClient,
    PutDataCommand,
    GetObjectCommand,
    attachExpectContinueMiddleware,
} from '../src/index';

jest.setTimeout(20000);

let server: Server;
let client: BackbeatRoutesClient;
let sendContinue: boolean;
let earlyReject: boolean;
let unsolicitedContinue: boolean;
let continueSent: boolean;
let captured: {
    method?: string;
    headers: http.IncomingHttpHeaders;
    body: Buffer;
    bodyArrivedBeforeContinueSent: boolean;
    headersReceivedAt?: number;
    firstBodyChunkAt?: number;
};

describe('Expect: 100-continue middleware on PutDataCommand', () => {
    beforeAll(async () => {
        server = http.createServer();

        const handle = (req: http.IncomingMessage, res: http.ServerResponse) => {
            captured.method = req.method;
            captured.headers = req.headers;
            if (captured.headersReceivedAt === undefined) {
                captured.headersReceivedAt = Date.now();
            }
            if (unsolicitedContinue && !continueSent) {
                res.writeContinue();
                continueSent = true;
            }
            const chunks: Buffer[] = [];

            req.on('data', chunk => {
                if (captured.firstBodyChunkAt === undefined) {
                    captured.firstBodyChunkAt = Date.now();
                }
                if (!continueSent) {
                    captured.bodyArrivedBeforeContinueSent = true;
                }
                chunks.push(chunk);
            });

            req.on('end', () => {
                captured.body = Buffer.concat(chunks);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify([{ key: 'k', dataStoreName: 'd' }]));
            });
        };

        // Once a 'checkContinue' listener exists, Node stops auto-sending 100 Continue.
        server.on('checkContinue', (req, res) => {
            if (captured.headersReceivedAt === undefined) {
                captured.headersReceivedAt = Date.now();
            }
            if (earlyReject) {
                captured.method = req.method;
                captured.headers = req.headers;
                req.on('data', chunk => {
                    captured.bodyArrivedBeforeContinueSent = true;
                    captured.body = Buffer.concat([captured.body, chunk]);
                });
                res.writeHead(409);
                res.end();
                return;
            }

            if (sendContinue) {
                res.writeContinue();
                continueSent = true;
            }

            handle(req, res);
        });
        server.on('request', handle);

        await promisify<number, string>(server.listen).call(server, 0, '127.0.0.1');
        const { port } = server.address() as AddressInfo;

        client = new BackbeatRoutesClient({
            endpoint: `http://127.0.0.1:${port}`,
            credentials: { accessKeyId: 'a', secretAccessKey: 'b' },
            region: 'us-east-1',
            maxAttempts: 1,
        });
    });

    afterAll(async () => {
        client.destroy();
        await promisify(server.close).call(server);
    });

    beforeEach(() => {
        sendContinue = true;
        earlyReject = false;
        unsolicitedContinue = false;
        continueSent = false;
        captured = { headers: {}, body: Buffer.alloc(0), bodyArrivedBeforeContinueSent: false };
    });

    const putData = (Body: Buffer) => client.send(attachExpectContinueMiddleware(
        new PutDataCommand({
            Bucket: 'bucket',
            Key: 'obj',
            ContentMD5: 'x',
            CanonicalID: 'c',
            Body,
        }),
        client.config.requestHandler,
    ));

    it('sets Expect and waits for 100 before streaming the body', async () => {
        const body = Buffer.from('hello-world');
        await putData(body);

        expect(captured.method).toBe('PUT');
        expect(captured.headers.expect).toBe('100-continue');
        expect(captured.bodyArrivedBeforeContinueSent).toBe(false);
        expect(captured.body.length).toBe(body.length);
    });

    it('does NOT set Expect on body-less commands (GetObject)', async () => {
        await client
            .send(new GetObjectCommand({ Bucket: 'bucket', Key: 'obj' }))
            .catch(() => undefined);
        expect(captured.headers.expect).toBeUndefined();
    });

    it('does NOT set Expect on PutData without attachExpectContinueMiddleware', async () => {
        await client.send(new PutDataCommand({
            Bucket: 'bucket',
            Key: 'obj',
            ContentMD5: 'x',
            CanonicalID: 'c',
            Body: Buffer.from('hello-world'),
        }));
        expect(captured.method).toBe('PUT');
        expect(captured.headers.expect).toBeUndefined();
    });

    it('honors a numeric expectContinueHeader threshold (below threshold => no header)', async () => {
        const body = Buffer.from('tiny');
        await client.send(attachExpectContinueMiddleware(
            new PutDataCommand({
                Bucket: 'bucket',
                Key: 'obj',
                ContentMD5: 'x',
                CanonicalID: 'c',
                Body: body,
            }),
            client.config.requestHandler,
            1024,
        ));
        expect(captured.method).toBe('PUT');
        expect(captured.headers.expect).toBeUndefined();
        expect(captured.body.length).toBe(body.length);
    });

    it('honors a numeric expectContinueHeader threshold (at/above threshold => header set)', async () => {
        const body = Buffer.alloc(1024, 'a');
        await client.send(attachExpectContinueMiddleware(
            new PutDataCommand({
                Bucket: 'bucket',
                Key: 'obj',
                ContentMD5: 'x',
                CanonicalID: 'c',
                Body: body,
            }),
            client.config.requestHandler,
            1024,
        ));
        expect(captured.headers.expect).toBe('100-continue');
        expect(captured.body.length).toBe(body.length);
    });

    it('still uploads when the server sends an unsolicited 100-continue', async () => {
        unsolicitedContinue = true;
        const body = Buffer.from('hello-world');
        await client.send(new PutDataCommand({
            Bucket: 'bucket',
            Key: 'obj',
            ContentMD5: 'x',
            CanonicalID: 'c',
            Body: body,
        }));
        expect(captured.method).toBe('PUT');
        expect(captured.headers.expect).toBeUndefined();
        expect(captured.body.length).toBe(body.length);
    });

    it('still uploads if the server never sends 100-continue (falls back after timeout)', async () => {
        sendContinue = false;
        const body = Buffer.from('hello-world');
        await putData(body);

        expect(captured.headers.expect).toBe('100-continue');
        expect(captured.body.length).toBe(body.length);
    });

    it('waits ~6s before streaming the body when no 100-continue is received', async () => {
        sendContinue = false;
        const body = Buffer.from('hello-world');
        await putData(body);

        expect(captured.headersReceivedAt).toBeDefined();
        expect(captured.firstBodyChunkAt).toBeDefined();
        const waited = captured.firstBodyChunkAt! - captured.headersReceivedAt!;
        expect(waited).toBeGreaterThanOrEqual(5500);
        expect(waited).toBeLessThan(8000);
        expect(captured.body.length).toBe(body.length);
    });


    it('surfaces an early 4xx response without streaming the body', async () => {
        earlyReject = true;
        const body = Buffer.from('hello-world');

        const err = await putData(body).then(
            () => { throw new Error('expected request to fail'); },
            (e: Error & { $metadata?: { httpStatusCode?: number } }) => e,
        );

        expect(err.$metadata?.httpStatusCode).toBe(409);
        expect(captured.method).toBe('PUT');
        expect(captured.headers.expect).toBe('100-continue');
        expect(captured.bodyArrivedBeforeContinueSent).toBe(false);
        expect(captured.body.length).toBe(0);
    });

});
