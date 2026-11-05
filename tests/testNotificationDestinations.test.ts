import http, { Server } from 'http';
import { AddressInfo } from 'net';
import { promisify } from 'util';
import { XMLParser } from 'fast-xml-parser';
import {
    AccessDenied,
    CloudserverClient,
    CloudserverNotificationDestinationsServiceException,
    CreateNotificationDestinationCommand,
    CredentialsUnavailable,
    DeleteNotificationDestinationCommand,
    DestinationAlreadyExists,
    DestinationApiUnavailable,
    GetNotificationDestinationCommand,
    InvalidArgument,
    InvalidDestination,
    ListNotificationDestinationsCommand,
    MalformedXML,
    MethodNotAllowed,
    NoSuchDestination,
    NotificationDestinationsClient,
    NotImplemented,
    TooManyBucketNotificationDestinations,
    UpdateNotificationDestinationCommand,
    isValidDestinationName,
} from '../src/index';
import type { NotificationDestinationConfiguration } from '../src/index';

type CannedResponse = {
    status: number;
    headers: http.OutgoingHttpHeaders;
    body: string;
};

type RecordedRequest = {
    method: string;
    url: string;
    headers: http.IncomingHttpHeaders;
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

const xmlHeaders = { 'Content-Type': 'application/xml', 'x-amz-request-id': 'req-1' };

function ok(body = ''): CannedResponse {
    return { status: 200, headers: xmlHeaders, body };
}

function destinationXml(name: string, brokers = ['kafka.example.com:9092']): string {
    return `<Name>${name}</Name>`
        + `<Arn>arn:scality:bucketnotif::123456789012:${name}</Arn>`
        + '<AccountId>123456789012</AccountId>'
        + '<Type>kafka</Type>'
        + `<Connection><Brokers>${brokers.map(b => `<Broker>${b}</Broker>`).join('')}</Brokers>`
        + '<Topic>events</Topic>'
        + '<RequiredAcks>-1</RequiredAcks><CompressionType>none</CompressionType></Connection>'
        + '<Auth><Type>sasl_ssl</Type></Auth>'
        + '<CreatedAt>2026-11-05T10:00:00.000Z</CreatedAt>'
        + '<UpdatedAt>2026-11-05T11:30:00.000Z</UpdatedAt>';
}

function parseBody(body: string) {
    return new XMLParser({ ignoreDeclaration: true, parseTagValue: false }).parse(body);
}

function queryOf(request: RecordedRequest): URLSearchParams {
    return new URL(request.url, 'http://localhost').searchParams;
}

const sigV4ForS3 = new RegExp('^AWS4-HMAC-SHA256 Credential=a/\\d{8}/us-east-1/s3/aws4_request, '
    + 'SignedHeaders=[^,]+, Signature=[0-9a-f]{64}$');

const saslDestination = {
    Type: 'kafka' as const,
    Connection: {
        Brokers: ['kafka.example.com:9092', '[2001:db8::1]:9092'],
        Topic: 'events',
        RequiredAcks: -1 as const,
        CompressionType: 'zstd' as const,
    },
    Auth: {
        Type: 'sasl_ssl' as const,
        Sasl: { Mechanism: 'SCRAM-SHA-512' as const, Username: 'user', Password: 'sasl-password' },
        Tls: { CaCertificate: 'ca-pem' },
    },
};

const mtlsDestination = {
    Type: 'kafka' as const,
    Connection: { Brokers: ['kafka.example.com:9093'], Topic: 'events', RequiredAcks: 1 as const },
    Auth: {
        Type: 'mtls' as const,
        Tls: {
            CaCertificate: 'ca-pem',
            ClientCertificate: 'cert-pem',
            ClientKey: 'key-pem',
            ClientKeyPassword: 'key-secret',
        },
    },
};

describe('Notification destination client', () => {
    let server: Server;
    let endpoint: string;
    let client: NotificationDestinationsClient;
    let requests: RecordedRequest[];
    let responses: CannedResponse[];

    beforeAll(async () => {
        server = http.createServer((req, res) => {
            const chunks: Buffer[] = [];
            req.on('data', chunk => chunks.push(chunk));
            req.on('end', () => {
                requests.push({
                    method: req.method,
                    url: req.url,
                    headers: req.headers,
                    body: Buffer.concat(chunks).toString(),
                });
                const response = responses.shift() || { status: 500, headers: {}, body: '' };
                res.writeHead(response.status, response.headers);
                res.end(response.body);
            });
        });
        await promisify<number, string>(server.listen).call(server, 0, '127.0.0.1');
        const { port } = server.address() as AddressInfo;
        endpoint = `http://127.0.0.1:${port}`;

        client = new NotificationDestinationsClient({
            endpoint,
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
        requests = [];
        responses = [];
    });

    describe('requests', () => {
        it('creates a destination with a PUT of its XML at the service root', async () => {
            responses.push(ok());
            const res = await client.send(new CreateNotificationDestinationCommand({
                Name: 'a+b c',
                NotificationDestination: saslDestination,
            }));

            expect(res.$metadata.httpStatusCode).toBe(200);
            const [request] = requests;
            expect(request.method).toBe('PUT');
            expect(new URL(request.url, 'http://localhost').pathname).toBe('/');
            expect(queryOf(request).has('notification-destination')).toBe(true);
            expect(request.url).toContain('name=a%2Bb%20c');
            expect(queryOf(request).get('name')).toBe('a+b c');
            expect(request.headers.authorization).toMatch(sigV4ForS3);
            expect(request.headers['content-type']).toBe('application/xml');
            expect(request.body).not.toContain('xmlns');
            expect(parseBody(request.body)).toEqual({
                NotificationDestination: {
                    Type: 'kafka',
                    Connection: {
                        Brokers: { Broker: ['kafka.example.com:9092', '[2001:db8::1]:9092'] },
                        Topic: 'events',
                        RequiredAcks: '-1',
                        CompressionType: 'zstd',
                    },
                    Auth: {
                        Type: 'sasl_ssl',
                        Sasl: { Mechanism: 'SCRAM-SHA-512', Username: 'user', Password: 'sasl-password' },
                        Tls: { CaCertificate: 'ca-pem' },
                    },
                },
            });
        });

        it('replaces a destination with a POST of its full XML', async () => {
            responses.push(ok());
            await client.send(new UpdateNotificationDestinationCommand({
                Name: 'dest-a',
                NotificationDestination: mtlsDestination,
            }));

            const [request] = requests;
            expect(request.method).toBe('POST');
            expect(new URL(request.url, 'http://localhost').pathname).toBe('/');
            expect(queryOf(request).has('notification-destination')).toBe(true);
            expect(queryOf(request).get('name')).toBe('dest-a');
            expect(request.headers.authorization).toMatch(sigV4ForS3);
            expect(parseBody(request.body)).toEqual({
                NotificationDestination: {
                    Type: 'kafka',
                    Connection: {
                        Brokers: { Broker: 'kafka.example.com:9093' },
                        Topic: 'events',
                        RequiredAcks: '1',
                    },
                    Auth: {
                        Type: 'mtls',
                        Tls: {
                            CaCertificate: 'ca-pem',
                            ClientCertificate: 'cert-pem',
                            ClientKey: 'key-pem',
                            ClientKeyPassword: 'key-secret',
                        },
                    },
                },
            });
        });

        it('gets a destination by name with a GET and no list marker', async () => {
            responses.push(ok(`<NotificationDestination>${destinationXml('a+b c')}</NotificationDestination>`));
            await client.send(new GetNotificationDestinationCommand({ Name: 'a+b c' }));

            const [request] = requests;
            expect(request.method).toBe('GET');
            expect(new URL(request.url, 'http://localhost').pathname).toBe('/');
            expect(queryOf(request).has('notification-destination')).toBe(true);
            expect(request.url).toContain('name=a%2Bb%20c');
            expect(queryOf(request).has('x-id')).toBe(false);
            expect(request.headers.authorization).toMatch(sigV4ForS3);
            expect(request.body).toBe('');
        });

        it('refuses a Get without a name before sending it, as the server would list instead', async () => {
            const err = await expectError(client.send(new GetNotificationDestinationCommand({ Name: undefined })));

            expect(err).not.toBeInstanceOf(CloudserverNotificationDestinationsServiceException);
            expect(err.message).toMatch(/needs a Name/);
            expect(requests).toHaveLength(0);
        });

        it('deletes a destination by name with a DELETE', async () => {
            responses.push({ status: 204, headers: { 'x-amz-request-id': 'req-1' }, body: '' });
            const res = await client.send(new DeleteNotificationDestinationCommand({ Name: 'dest-a' }));

            expect(res.$metadata.httpStatusCode).toBe(204);
            const [request] = requests;
            expect(request.method).toBe('DELETE');
            expect(new URL(request.url, 'http://localhost').pathname).toBe('/');
            expect(queryOf(request).has('notification-destination')).toBe(true);
            expect(queryOf(request).get('name')).toBe('dest-a');
            expect(request.headers.authorization).toMatch(sigV4ForS3);
        });

        it('lists destinations with a GET that carries no name', async () => {
            responses.push(ok('<ListNotificationDestinationsResult><IsTruncated>false</IsTruncated>'
                + '</ListNotificationDestinationsResult>'));
            await client.send(new ListNotificationDestinationsCommand({}));

            const [request] = requests;
            expect(request.method).toBe('GET');
            expect(new URL(request.url, 'http://localhost').pathname).toBe('/');
            const query = queryOf(request);
            expect(query.has('notification-destination')).toBe(true);
            expect(query.get('x-id')).toBe('ListNotificationDestinations');
            expect(query.has('name')).toBe(false);
            expect(query.has('max-items')).toBe(false);
            expect(query.has('marker')).toBe(false);
            expect(request.headers.authorization).toMatch(sigV4ForS3);
        });

        it('sends the list page size and marker when given', async () => {
            responses.push(ok('<ListNotificationDestinationsResult><IsTruncated>false</IsTruncated>'
                + '</ListNotificationDestinationsResult>'));
            await client.send(new ListNotificationDestinationsCommand({ MaxItems: 2, Marker: 'a+b c' }));

            const query = queryOf(requests[0]);
            expect(query.get('max-items')).toBe('2');
            expect(query.get('marker')).toBe('a+b c');
            expect(requests[0].url).toContain('marker=a%2Bb%20c');
        });

        it('sends through the notificationDestinations field of the aggregate client', async () => {
            responses.push(ok('<ListNotificationDestinationsResult><IsTruncated>false</IsTruncated>'
                + '</ListNotificationDestinationsResult>'));
            const aggregate = new CloudserverClient({
                endpoint,
                credentials: { accessKeyId: 'a', secretAccessKey: 'b' },
                region: 'us-east-1',
                maxAttempts: 1,
            });
            try {
                await aggregate.notificationDestinations.send(new ListNotificationDestinationsCommand({}));
            } finally {
                aggregate.notificationDestinations.destroy();
                aggregate.backbeatRoutes.destroy();
                aggregate.bucketQuota.destroy();
                aggregate.proxyBackbeatApis.destroy();
            }

            expect(aggregate.notificationDestinations).toBeInstanceOf(NotificationDestinationsClient);
            expect(queryOf(requests[0]).get('x-id')).toBe('ListNotificationDestinations');
        });
    });

    describe('logs', () => {
        async function logOfCreate(destination: NotificationDestinationConfiguration): Promise<string> {
            const logged: string[] = [];
            const record = (...args: unknown[]) => {
                logged.push(JSON.stringify(args));
            };
            const loggingClient = new NotificationDestinationsClient({
                endpoint,
                credentials: { accessKeyId: 'a', secretAccessKey: 'b' },
                region: 'us-east-1',
                maxAttempts: 1,
                logger: { trace: record, debug: record, info: record, warn: record, error: record },
            });
            responses.push(ok());
            try {
                await loggingClient.send(new CreateNotificationDestinationCommand({
                    Name: 'dest-a',
                    NotificationDestination: destination,
                }));
            } finally {
                loggingClient.destroy();
            }
            return logged.join('\n');
        }

        it('logs a Create without its SASL password', async () => {
            const log = await logOfCreate(saslDestination);

            expect(log).toContain('CreateNotificationDestinationCommand');
            expect(log).toContain('kafka.example.com');
            expect(log).not.toContain('sasl-password');
        });

        it('logs a Create without its client key or key password', async () => {
            const log = await logOfCreate(mtlsDestination);

            expect(log).toContain('CreateNotificationDestinationCommand');
            expect(log).toContain('kafka.example.com');
            expect(log).not.toContain('key-pem');
            expect(log).not.toContain('key-secret');
        });
    });

    describe('responses', () => {
        it.each([
            ['without a namespace', '<NotificationDestination>'],
            ['with a namespace', '<?xml version="1.0" encoding="UTF-8"?>'
                + '<NotificationDestination xmlns="http://s3.amazonaws.com/doc/2006-03-01/">'],
        ])('reads every field of a destination %s', async (_label, openingTag) => {
            responses.push(ok(`${openingTag}${destinationXml('dest-a')}</NotificationDestination>`));
            const res = await client.send(new GetNotificationDestinationCommand({ Name: 'dest-a' }));

            expect(res.NotificationDestination).toEqual({
                Name: 'dest-a',
                Arn: 'arn:scality:bucketnotif::123456789012:dest-a',
                AccountId: '123456789012',
                Type: 'kafka',
                Connection: {
                    Brokers: ['kafka.example.com:9092'],
                    Topic: 'events',
                    RequiredAcks: -1,
                    CompressionType: 'none',
                },
                Auth: { Type: 'sasl_ssl' },
                CreatedAt: new Date('2026-11-05T10:00:00.000Z'),
                UpdatedAt: new Date('2026-11-05T11:30:00.000Z'),
            });
            expect(res.NotificationDestination.CreatedAt).toBeInstanceOf(Date);
        });

        it('pages through a list with NextMarker then marker', async () => {
            const twoBrokers = ['kafka-1.example.com:9092', '[2001:db8::1]:9092'];
            responses.push(ok('<ListNotificationDestinationsResult>'
                + '<IsTruncated>true</IsTruncated><NextMarker>dest-b</NextMarker>'
                + `<NotificationDestination>${destinationXml('dest-a')}</NotificationDestination>`
                + `<NotificationDestination>${destinationXml('dest-b', twoBrokers)}</NotificationDestination>`
                + '</ListNotificationDestinationsResult>'));
            responses.push(ok('<ListNotificationDestinationsResult>'
                + '<IsTruncated>false</IsTruncated>'
                + `<NotificationDestination>${destinationXml('dest-c')}</NotificationDestination>`
                + '</ListNotificationDestinationsResult>'));

            const first = await client.send(new ListNotificationDestinationsCommand({ MaxItems: 2 }));
            expect(first.IsTruncated).toBe(true);
            expect(first.NextMarker).toBe('dest-b');
            expect(first.NotificationDestinations.map(d => d.Name)).toEqual(['dest-a', 'dest-b']);
            expect(first.NotificationDestinations[0]).toEqual({
                Name: 'dest-a',
                Arn: 'arn:scality:bucketnotif::123456789012:dest-a',
                AccountId: '123456789012',
                Type: 'kafka',
                Connection: {
                    Brokers: ['kafka.example.com:9092'],
                    Topic: 'events',
                    RequiredAcks: -1,
                    CompressionType: 'none',
                },
                Auth: { Type: 'sasl_ssl' },
                CreatedAt: new Date('2026-11-05T10:00:00.000Z'),
                UpdatedAt: new Date('2026-11-05T11:30:00.000Z'),
            });
            expect(first.NotificationDestinations[1].Connection.Brokers)
                .toEqual(['kafka-1.example.com:9092', '[2001:db8::1]:9092']);

            const second = await client.send(new ListNotificationDestinationsCommand({
                MaxItems: 2,
                Marker: first.NextMarker,
            }));
            expect(queryOf(requests[1]).get('marker')).toBe('dest-b');
            expect(second.IsTruncated).toBe(false);
            expect(second.NextMarker).toBeUndefined();
            expect(second.NotificationDestinations.map(d => d.Name)).toEqual(['dest-c']);
        });

        it('reads an empty list', async () => {
            responses.push(ok('<ListNotificationDestinationsResult><IsTruncated>false</IsTruncated>'
                + '</ListNotificationDestinationsResult>'));
            const res = await client.send(new ListNotificationDestinationsCommand({}));

            expect(res.IsTruncated).toBe(false);
            expect(res.NextMarker).toBeUndefined();
            expect(res.NotificationDestinations ?? []).toEqual([]);
        });
    });

    describe('a server without the destination routes', () => {
        // Such a server answers a GET at the service root with ListBuckets
        const listBucketsXml = '<?xml version="1.0" encoding="UTF-8"?>'
            + '<ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">'
            + '<Owner><ID>79a59df900b949e55d96a1e698fbaced</ID><DisplayName>account</DisplayName></Owner>'
            + '<Buckets><Bucket><Name>bucket-1</Name><CreationDate>2026-11-05T10:00:00.000Z</CreationDate>'
            + '</Bucket></Buckets></ListAllMyBucketsResult>';

        const getDestination = (): Promise<unknown> => client.send(
            new GetNotificationDestinationCommand({ Name: 'dest-a' }));
        const listDestinations = (): Promise<unknown> => client.send(new ListNotificationDestinationsCommand({}));

        it.each([
            ['Get', getDestination],
            ['List', listDestinations],
        ])('fails a %s answered with the bucket list', async (_label, send) => {
            responses.push(ok(listBucketsXml));
            const err = await expectError(send());

            expect(err).toBeInstanceOf(DestinationApiUnavailable);
            expect(err).not.toBeInstanceOf(CloudserverNotificationDestinationsServiceException);
            expect(err.name).toBe('DestinationApiUnavailable');
            expect(err.message).toMatch(/destination API/);
            expect(requests).toHaveLength(1);
        });
    });

    describe('errors', () => {
        const createDestination = (): Promise<unknown> => client.send(new CreateNotificationDestinationCommand({
            Name: 'dest-a',
            NotificationDestination: saslDestination,
        }));
        const updateDestination = (): Promise<unknown> => client.send(new UpdateNotificationDestinationCommand({
            Name: 'dest-a',
            NotificationDestination: saslDestination,
        }));
        const getDestination = (): Promise<unknown> => client.send(
            new GetNotificationDestinationCommand({ Name: 'dest-a' }));
        const deleteDestination = (): Promise<unknown> => client.send(
            new DeleteNotificationDestinationCommand({ Name: 'dest-a' }));
        const listDestinations = (): Promise<unknown> => client.send(new ListNotificationDestinationsCommand({}));

        it.each([
            ['Create', 'DestinationAlreadyExists', 409, DestinationAlreadyExists, 'client', createDestination],
            ['Create', 'TooManyBucketNotificationDestinations', 400, TooManyBucketNotificationDestinations, 'client',
                createDestination],
            ['Update', 'InvalidDestination', 400, InvalidDestination, 'client', updateDestination],
            ['Get', 'InvalidDestination', 400, InvalidDestination, 'client', getDestination],
            ['Delete', 'InvalidDestination', 400, InvalidDestination, 'client', deleteDestination],
            ['Get', 'NoSuchDestination', 404, NoSuchDestination, 'client', getDestination],
            ['Delete', 'NoSuchDestination', 404, NoSuchDestination, 'client', deleteDestination],
            ['List', 'AccessDenied', 403, AccessDenied, 'client', listDestinations],
            ['List', 'InvalidArgument', 400, InvalidArgument, 'client', listDestinations],
            ['Create', 'MalformedXML', 400, MalformedXML, 'client', createDestination],
            ['Get', 'MethodNotAllowed', 405, MethodNotAllowed, 'client', getDestination],
            ['Get', 'NotImplemented', 501, NotImplemented, 'server', getDestination],
            ['Get', 'CredentialsUnavailable', 500, CredentialsUnavailable, 'server', getDestination],
        ])('%s maps %s (%i) to its error class', async (_operation, code, status, errorClass, fault, send) => {
            responses.push({
                status,
                headers: xmlHeaders,
                body: '<?xml version="1.0" encoding="UTF-8"?><Error>'
                    + `<Code>${code}</Code><Message>message of ${code}</Message>`
                    + '<Resource></Resource><RequestId>req-1</RequestId></Error>',
            });
            const err = await expectError(send());

            expect(err.constructor).toBe(errorClass);
            expect(err).toBeInstanceOf(CloudserverNotificationDestinationsServiceException);
            expect(err.name).toBe(code);
            expect(err.message).toBe(`message of ${code}`);
            expect(err.$fault).toBe(fault);
            expect(err.$metadata).toMatchObject({ httpStatusCode: status, requestId: 'req-1' });
        });

        it('maps an unknown code to the service exception named after the code', async () => {
            responses.push({
                status: 503,
                headers: xmlHeaders,
                body: '<?xml version="1.0" encoding="UTF-8"?><Error><Code>ServiceUnavailable</Code>'
                    + '<Message>Please reduce your request rate.</Message><RequestId>req-1</RequestId></Error>',
            });
            const err = await expectError(getDestination());

            expect(err).toBeInstanceOf(CloudserverNotificationDestinationsServiceException);
            expect(err.name).toBe('ServiceUnavailable');
            expect(err.message).toBe('Please reduce your request rate.');
            expect(err.$fault).toBe('server');
            expect(err.$metadata.httpStatusCode).toBe(503);
        });
    });
});

describe('isValidDestinationName', () => {
    it.each([
        ['a single character', 'a'],
        ['every allowed punctuation', 'dest_1+=,.@ -'],
        ['128 characters', 'x'.repeat(128)],
    ])('accepts %s', (_label, name) => {
        expect(isValidDestinationName(name)).toBe(true);
    });

    it.each([
        ['an empty name', ''],
        ['129 characters', 'x'.repeat(129)],
        ['a pipe', 'a|b'],
        ['a star', '*'],
        ['a slash', 'a/b'],
        ['a colon', 'a:b'],
        ['a non-ASCII letter', 'café'],
        ['a non-string', 42],
        ['undefined', undefined],
    ])('rejects %s', (_label, name) => {
        expect(isValidDestinationName(name)).toBe(false);
    });
});
