import { 
    BackbeatRoutesClient,
    GetMetadataInput,
    GetMetadataCommand,
    PutMetadataInput,
    PutMetadataCommand,
    GetBucketMetadataInput,
    GetBucketMetadataCommand,
} from '../src/index';
import assert from 'assert';
import { createTestClient, testConfig } from './testSetup';
import { describeForMetadataBackend } from './testHelpers';

describeForMetadataBackend('CloudServer Metadata API Tests', () => {
    let backbeatRoutesClient: BackbeatRoutesClient;

    beforeAll(() => {
        ({backbeatRoutesClient} = createTestClient());
    });

    it('should test GetMetadata API', async () => {
        const getMetadataInput: GetMetadataInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
        };
        const getMetadataCommand = new GetMetadataCommand(getMetadataInput);
        const metadataData = await backbeatRoutesClient.send(getMetadataCommand);
        assert.ok(metadataData.Body?.includes(testConfig.objectKey));
    });

    it('should test PutMetadata API', async () => {
        const metadataObj = {
            'content-length': 1000,
            'content-type': 'text/plain',
            'x-amz-meta-custom': 'test-valuee',
            'last-modified': new Date().toISOString(),
            'etag': '"d41d8cd98f00b204e9800998ecf8427e"',
            'x-amz-version-id': 'null',
            'replicationInfo': {}
        };
        
        const metadataString = JSON.stringify(metadataObj);
        const metadataBuffer = new TextEncoder().encode(metadataString);
        
        const putInput: PutMetadataInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            Body: metadataBuffer,
        };
        
        const command = new PutMetadataCommand(putInput);
        const result = await backbeatRoutesClient.send(command);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });


    it('should test GetBucketMetadata API', async () => {
        const getBucketMetadataInput: GetBucketMetadataInput = {
            Bucket: testConfig.bucketName,
        };
        const getBucketMetadataCommand = new GetBucketMetadataCommand(getBucketMetadataInput);
        const bucketMetadata = await backbeatRoutesClient.send(getBucketMetadataCommand);
        assert.strictEqual(bucketMetadata.name, testConfig.bucketName);
    });
});

