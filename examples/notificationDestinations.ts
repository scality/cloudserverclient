import {
    CloudserverNotificationDestinationsClientConfig,
    CreateNotificationDestinationCommand,
    GetNotificationDestinationCommand,
    ListNotificationDestinationsCommand,
    NoSuchDestination,
    NotificationDestinationsClient,
} from '@scality/cloudserverclient/clients/notificationDestinations';

const config: CloudserverNotificationDestinationsClientConfig = {
    endpoint: 'http://localhost:8000',
    credentials: {
        accessKeyId: 'accessKey1',
        secretAccessKey: 'verySecretKey1',
    },
    region: 'us-east-1',
    maxAttempts: 1,
};

const client = new NotificationDestinationsClient(config);

// Create sends the whole destination; Update takes the same input and
// replaces the stored destination with it.
await client.send(new CreateNotificationDestinationCommand({
    Name: 'orders-kafka',
    NotificationDestination: {
        Type: 'kafka',
        Connection: {
            Brokers: ['kafka-1.example.com:9093', 'kafka-2.example.com:9093'],
            Topic: 'bucket-events',
            RequiredAcks: -1,
            CompressionType: 'zstd',
        },
        Auth: {
            Type: 'sasl_ssl',
            Sasl: { Mechanism: 'SCRAM-SHA-512', Username: 'notifier', Password: 'aPassword' },
            Tls: { CaCertificate: '-----BEGIN CERTIFICATE-----\n...' },
        },
    },
}));

// Get returns the destination with the type of its authentication only,
// never its secrets.
const { NotificationDestination } = await client.send(new GetNotificationDestinationCommand({
    Name: 'orders-kafka',
}));
// {
//     Name: 'orders-kafka',
//     Arn: 'arn:scality:bucketnotif::123456789012:orders-kafka',
//     AccountId: '123456789012',
//     Type: 'kafka',
//     Connection: {
//         Brokers: ['kafka-1.example.com:9093', 'kafka-2.example.com:9093'],
//         Topic: 'bucket-events',
//         ...
//     },
//     Auth: { Type: 'sasl_ssl' },
//     CreatedAt: 2026-11-05T10:00:00.000Z,
//     UpdatedAt: 2026-11-05T10:00:00.000Z,
// }
console.log(NotificationDestination);

// List pages through the destinations: pass NextMarker as Marker until the
// list is no longer truncated.
let Marker: string | undefined;
do {
    const page = await client.send(new ListNotificationDestinationsCommand({ MaxItems: 100, Marker }));
    for (const destination of page.NotificationDestinations ?? []) {
        console.log(destination.Name, destination.Arn);
    }
    Marker = page.IsTruncated ? page.NextMarker : undefined;
} while (Marker);

try {
    await client.send(new GetNotificationDestinationCommand({ Name: 'missing' }));
} catch (error) {
    if (!(error instanceof NoSuchDestination)) {
        throw error;
    }
    console.error(error.name); // NoSuchDestination
    console.error(error.$metadata.httpStatusCode); // 404
}
