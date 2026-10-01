import http, { Server } from 'http';
import { AddressInfo } from 'net';
import { promisify } from 'util';
import {
    BackbeatRoutesClient,
    CloudserverBackbeatRoutesServiceException,
    GetObjectCommand,
    GetRaftIdCommand,
    PutDataCommand,
    PutMetadataCommand,
    StaleMicroVersionIdException,
    VersionIdCollisionException,
} from '../src/index';

type CannedResponse = {
    status: number;
    headers: http.OutgoingHttpHeaders;
    body: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function expectError(request: Promise<unknown>): Promise<any> {
    try {
        await request;
    } catch (err) {
        return err;
    }
    throw new Error('Expected the request to fail');
}

describe('Cloudserver error responses', () => {
    let server: Server;
    let client: BackbeatRoutesClient;
    let cannedResponse: CannedResponse;

    beforeAll(async () => {
        server = http.createServer((req, res) => {
            req.resume();
            req.on('end', () => {
                res.writeHead(cannedResponse.status, cannedResponse.headers);
                res.end(cannedResponse.body);
            });
        });
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
        cannedResponse = undefined;
    });

    it('maps an XML error to a service exception', async () => {
        cannedResponse = {
            status: 404,
            headers: { 'Content-Type': 'application/xml', 'x-amz-request-id': 'req-1' },
            body: '<?xml version="1.0" encoding="UTF-8"?><Error><Code>NoSuchKey</Code>'
                + '<Message>The specified key does not exist.</Message><RequestId>req-1</RequestId></Error>',
        };
        const err = await expectError(client.send(new GetObjectCommand({ Bucket: 'bucket', Key: 'key' })));

        expect(err).toBeInstanceOf(CloudserverBackbeatRoutesServiceException);
        expect(err.name).toBe('NoSuchKey');
        expect(err.code).toBe('NoSuchKey');
        expect(err.message).toBe('The specified key does not exist.');
        expect(err.$fault).toBe('client');
        expect(err.$metadata).toMatchObject({ httpStatusCode: 404, requestId: 'req-1' });
        expect(err.$response.body).toBe(cannedResponse.body);
    });

    it('maps an XML error to its modeled error class', async () => {
        cannedResponse = {
            status: 409,
            headers: { 'Content-Type': 'application/xml', 'x-scal-micro-version-id': 'mv-1' },
            body: '<?xml version="1.0" encoding="UTF-8"?><Error><Code>StaleMicroVersionIdException</Code>'
                + '<Message>incoming revision is older than destination</Message></Error>',
        };
        const err = await expectError(client.send(new PutMetadataCommand({
            Bucket: 'bucket',
            Key: 'key',
            Body: Buffer.from('{}'),
        })));

        expect(err.constructor).toBe(StaleMicroVersionIdException);
        expect(err.message).toBe('incoming revision is older than destination');
        expect(err.microVersionId).toBe('mv-1');
        expect(err.$metadata.httpStatusCode).toBe(409);
    });

    it('maps a malformed XML error to a generic service exception', async () => {
        cannedResponse = {
            status: 500,
            headers: { 'Content-Type': 'application/xml' },
            body: '<Error><Code>',
        };
        const err = await expectError(client.send(new GetObjectCommand({ Bucket: 'bucket', Key: 'key' })));

        expect(err).toBeInstanceOf(CloudserverBackbeatRoutesServiceException);
        expect(err.name).toBe('UnknownError');
        expect(err.$fault).toBe('server');
        expect(err.$metadata.httpStatusCode).toBe(500);
    });

    it('maps an HTML proxy error to a service exception', async () => {
        cannedResponse = {
            status: 400,
            headers: { 'Content-Type': 'text/html' },
            body: '<html><head><title>400 Request Header Or Cookie Too Large</title></head>'
                + '<body><center>Request Header Or Cookie Too Large</center></body></html>',
        };
        const err = await expectError(client.send(new GetObjectCommand({ Bucket: 'bucket', Key: 'key' })));

        expect(err).toBeInstanceOf(CloudserverBackbeatRoutesServiceException);
        expect(err.name).toBe('HTML Bad Request');
        expect(err.message).toBe('400 Request Header Or Cookie Too Large');
        expect(err.$fault).toBe('client');
        expect(err.$metadata.httpStatusCode).toBe(400);
        expect(err.rawBody).toBe(cannedResponse.body);
    });

    it('still handles JSON errors', async () => {
        cannedResponse = {
            status: 409,
            headers: { 'Content-Type': 'application/json', 'x-scal-micro-version-id': 'mv-2' },
            body: JSON.stringify({
                code: 'VersionIdCollisionException',
                message: 'version id already at destination',
            }),
        };
        const err = await expectError(client.send(new PutDataCommand({
            Bucket: 'bucket',
            Key: 'key',
            ContentMD5: 'x',
            CanonicalID: 'c',
            Body: Buffer.from('data'),
        })));

        expect(err.constructor).toBe(VersionIdCollisionException);
        expect(err.message).toBe('version id already at destination');
        expect(err.microVersionId).toBe('mv-2');
    });

    it('still deserializes successful responses', async () => {
        cannedResponse = {
            status: 200,
            headers: { 'Content-Type': 'text/plain' },
            body: '42',
        };
        const res = await client.send(new GetRaftIdCommand({ Bucket: 'bucket' }));

        expect(res.RaftId).toBe('42');
    });
});
