import { 
    CloudserverClient,
    GetMetadataInput,
    GetMetadataCommand,
    PutMetadataInput,
    PutMetadataCommand,
    GetBucketMetadataInput,
    GetBucketMetadataCommand,
} from '@scality/cloudserverclient';
import { createTestClient, testConfig } from './testSetup';

describe('CloudServer Metadata API Tests', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        client = createTestClient();
    });

    it('should test GetMetadata API', async () => {
        // Run Cloudserver with : S3VAULT=mem S3METADATA=mongodb S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        try {
            const getMetadataInput: GetMetadataInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
            };
            const getMetadataCommand = new GetMetadataCommand(getMetadataInput);
            const metadataData = await client.send(getMetadataCommand);
            console.log('GetMetadata succeeded - Metadata:', metadataData.Body);
        } catch (err) {
            console.log('GetMetadata failed:', err);
        }
    });

    it('should test PutMetadata API', async () => {
        try {
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
            
            const crypto = require('crypto');
            const contentMD5 = crypto.createHash('md5').update(metadataBuffer).digest('hex');
            const putInput: PutMetadataInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
                Body: metadataBuffer,
            };
            
            const command = new PutMetadataCommand(putInput);
            const result = await client.send(command);
            console.log('PutMetadata succeeded!', result);
        } catch (err: any) {
            console.log('PutMetadata failed:', err);
        }
    });


    it('should test GetBucketMetadata API', async () => {
        try {
            const getBucketMetadataInput: GetBucketMetadataInput = {
                Bucket: testConfig.bucketName,
            };
            const getBucketMetadataCommand = new GetBucketMetadataCommand(getBucketMetadataInput);
            const bucketMetadata = await client.send(getBucketMetadataCommand);
            console.log('GetBucketMetadata succeeded:', bucketMetadata);
        } catch (err: any) {
            console.log('GetBucketMetadata error details:', err);
        }
    });
});

