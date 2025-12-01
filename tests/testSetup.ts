import https from 'https';
import assert from 'assert';
import { CloudserverClient, CloudserverClientConfig } from '../src/index';
import { S3Client, PutObjectCommand, CreateBucketCommand, PutBucketVersioningCommand } from '@aws-sdk/client-s3';
import { AwsCredentialIdentity, AwsCredentialIdentityProvider } from '@aws-sdk/types';

jest.setTimeout(30000);

const credentialsProvider: AwsCredentialIdentityProvider = async (): Promise<AwsCredentialIdentity> => ({
    accessKeyId: 'accessKey1',
    secretAccessKey: 'verySecretKey1',
    sessionToken: '',
});

const config: CloudserverClientConfig = {
    endpoint: 'http://localhost:8000',
    credentials: credentialsProvider,
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

const s3client = new S3Client({
    endpoint: config.endpoint,
    region: config.region,
    credentials: config.credentials,
    forcePathStyle: true,
    requestHandler: {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    },
    maxAttempts: 1
});

const randomId = () => Math.random().toString(36).substring(2, 8);
export const testConfig = {
    bucketName: `test-cloudserverclient-bucket-${randomId()}`,
    objectKey: `test-cloudserverclient-object-sla/sh${randomId()}`,
    objectData: 'iAmSomeData',
    canonicalID: '39383234313039353433383937313939393939395247303031202036353034352e30',
};

async function initBucketForTests() {
    try {
        const createBucketCommand = new CreateBucketCommand({
            Bucket: testConfig.bucketName
        });
        await s3client.send(createBucketCommand);

        const versioningCommand = new PutBucketVersioningCommand({
            Bucket: testConfig.bucketName,
            VersioningConfiguration: {
                Status: 'Enabled'
            }
        });
        await s3client.send(versioningCommand);
        
        const putObjectCommand = new PutObjectCommand({
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            Body: testConfig.objectData,
        });
        await s3client.send(putObjectCommand);
    } catch (error: any) {
        assert.fail(`Failed to initialize bucket for tests: ${error}`);
    }
}

export function createTestClient(): {client: CloudserverClient, s3client: S3Client} {
    return {
        client: new CloudserverClient(config),
        s3client,
    };
}

beforeAll(async () => {
    await initBucketForTests();
});
