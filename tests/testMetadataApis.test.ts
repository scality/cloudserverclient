import { 
    CloudserverClient,
    GetMetadataInput,
    GetMetadataCommand,
    PutMetadataInput,
    PutMetadataCommand,
    GetBucketMetadataInput,
    GetBucketMetadataCommand,
} from '../src/index';
import assert from 'assert';
import { createTestClient, testConfig } from './testSetup';

describe('CloudServer Metadata API Tests', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        ({client} = createTestClient());
    });

    it('should test GetMetadata API', async () => {
        // Run Cloudserver with : S3VAULT=mem S3METADATA=mongodb S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        const getMetadataInput: GetMetadataInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
        };
        const getMetadataCommand = new GetMetadataCommand(getMetadataInput);
        const metadataData = await client.send(getMetadataCommand);
        assert.ok(metadataData.Body?.includes(testConfig.objectKey));
    });

    it('should test PutMetadata API', async () => {
        // S3VAULT=mem S3METADATA=scality S3DATA=mem
        const metadataObj = {
            "content-length": 1000,
            "content-type": "text/plain",
            "x-amz-meta-custom": "test-valuee",
            "last-modified": new Date().toISOString(),
            "etag": "\"d41d8cd98f00b204e9800998ecf8427e\"",
            "x-amz-version-id": "null"
        };
        
        const metadataString = JSON.stringify(metadataObj);
        const metadataBuffer = new TextEncoder().encode(metadataString);
        
        const putInput: PutMetadataInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            Body: metadataBuffer,
        };
        
        const command = new PutMetadataCommand(putInput);
        const result = await client.send(command);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });


    it('should test GetBucketMetadata API', async () => {
        // S3VAULT=mem S3METADATA=scality S3DATA=mem
        const getBucketMetadataInput: GetBucketMetadataInput = {
            Bucket: testConfig.bucketName,
        };
        const getBucketMetadataCommand = new GetBucketMetadataCommand(getBucketMetadataInput);
        const bucketMetadata = await client.send(getBucketMetadataCommand);
        assert.strictEqual(bucketMetadata.name, testConfig.bucketName);
    });
});

