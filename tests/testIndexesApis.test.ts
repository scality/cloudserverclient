import { 
    BackbeatRoutesClient,
    GetBucketIndexesInput,
    GetBucketIndexesCommand,
    PutBucketIndexesInput,
    PutBucketIndexesCommand,
    DeleteBucketIndexesInput,
    DeleteBucketIndexesCommand,
} from '../src/index';
import assert from 'assert';
import { createTestClient, testConfig } from './testSetup';
import { describeForMongoBackend } from './testHelpers';

describeForMongoBackend('CloudServer Indexes API Tests', () => {
    let backbeatRoutesClient: BackbeatRoutesClient;

    beforeAll(() => {
        ({backbeatRoutesClient} = createTestClient());
    });

    it('should test PutBucketIndexes', async () => {
        const indexData = JSON.stringify([
            {
                name: 'testIndex1',
                keys: [
                    { order: 1, key: 'metadata.userId' }
                ]
            }
        ]);
        
        const putBucketIndexesInput: PutBucketIndexesInput = {
            Bucket: testConfig.bucketName,
            Body: new TextEncoder().encode(indexData),
        };
        const putBucketIndexesCommand = new PutBucketIndexesCommand(putBucketIndexesInput);
        const result = await backbeatRoutesClient.send(putBucketIndexesCommand);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test GetBucketIndexes', async () => {
        const getBucketIndexesInput: GetBucketIndexesInput = {
            Bucket: testConfig.bucketName,
        };
        const getBucketIndexesCommand = new GetBucketIndexesCommand(getBucketIndexesInput);
        const indexesData = await backbeatRoutesClient.send(getBucketIndexesCommand);
        assert.ok(indexesData.Indexes && indexesData.Indexes.length >= 1);
    });

    it('should test DeleteBucketIndexes and verify deletion', async () => {
        const indexesToDelete = JSON.stringify([
            {
                name: 'testIndex1',
                keys: [
                    { order: 1, key: 'metadata.userId' }
                ]
            }
        ]);
        
        const deleteBucketIndexesInput: DeleteBucketIndexesInput = {
            Bucket: testConfig.bucketName,
            Body: new TextEncoder().encode(indexesToDelete),
        };
        const deleteBucketIndexesCommand = new DeleteBucketIndexesCommand(deleteBucketIndexesInput);
        const result = await backbeatRoutesClient.send(deleteBucketIndexesCommand);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });
});
