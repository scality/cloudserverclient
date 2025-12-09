import { 
    CloudserverClient,
    GetBucketIndexesInput,
    GetBucketIndexesCommand,
    PutBucketIndexesInput,
    PutBucketIndexesCommand,
    DeleteBucketIndexesInput,
    DeleteBucketIndexesCommand,
} from '../src/index';
import assert from 'assert';
import { createTestClient, testConfig } from './testSetup';

describe('CloudServer Indexes API Tests', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        ({client} = createTestClient());
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
        const result = await client.send(putBucketIndexesCommand);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test GetBucketIndexes', async () => {
        const getBucketIndexesInput: GetBucketIndexesInput = {
            Bucket: testConfig.bucketName,
        };
        const getBucketIndexesCommand = new GetBucketIndexesCommand(getBucketIndexesInput);
        const indexesData = await client.send(getBucketIndexesCommand);
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
        const result = await client.send(deleteBucketIndexesCommand);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });
});
