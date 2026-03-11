
import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import { ListObjectsV2ExtendedCommand } from '@scality/cloudserverclient';

const config: S3ClientConfig = {
    endpoint: 'http://localhost:8000',
    credentials: {
        accessKeyId: 'accessKey1',
        secretAccessKey: 'verySecretKey1',
    },
    region: 'us-east-1',
};

const client = new S3Client(config);

const response = await client.send(
    new ListObjectsV2ExtendedCommand({
        Bucket: 'aBucketName',
        Query: 'content-length > 0',
    }),
);
