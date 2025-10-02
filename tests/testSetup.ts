import https from 'https';
import { CloudserverClient, CloudserverClientConfig } from '@scality/cloudserverclient';
import { S3Client, PutObjectCommand, CreateBucketCommand, PutBucketVersioningCommand } from '@aws-sdk/client-s3';

jest.setTimeout(30000);

const config: CloudserverClientConfig = {
    endpoint: 'http://localhost:8000',
    credentials: {
        accessKeyId: 'accessKey1',
        secretAccessKey: 'verySecretKey1',
    },
    region: 'us-east-1',
    maxAttempts: 1,
    requestHandler: {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
            keepAlive: true,
            keepAliveMsecs: 5000,
            timeout: 30000,
        }),
        connectionTimeout: 10000,
        requestTimeout: 30000,
    }
};

const randomId = () => Math.random().toString(36).substring(2, 8);
export const testConfig = {
    bucketName: `test-cloudserverclient-bucket-${randomId()}`,
    objectKey: `test-cloudserverclient-object-${randomId()}`,
    canonicalID: '39383234313039353433383937313939393939395247303031202036353034352e30',
};

async function initBucketForTests() {
  const client = new S3Client({
        endpoint: config.endpoint,
        region: config.region,
        credentials: config.credentials,
        forcePathStyle: true,
        requestHandler: {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        } 
    });

    try {
        const createBucketCommand = new CreateBucketCommand({
            Bucket: testConfig.bucketName
        });
        await client.send(createBucketCommand);
        
        const versioningCommand = new PutBucketVersioningCommand({
            Bucket: testConfig.bucketName,
            VersioningConfiguration: {
                Status: 'Enabled'
            }
        });
        await client.send(versioningCommand);
        
        const putObjectCommand = new PutObjectCommand({
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            Body: 'Hey!!',
        });
        const result = await client.send(putObjectCommand);
        putObjectCommand.input.Key += "aaa"
        await client.send(putObjectCommand);
    } catch (error) {
        console.log('S3 operation failed:', error);
    }
}

export function createTestClient(): CloudserverClient {
    return new CloudserverClient(config);
}

beforeAll(async () => {
    await initBucketForTests();
});
