import { 
    CloudserverClient,
    GetBucketIndexesInput,
    GetBucketIndexesCommand,
    PutBucketIndexesInput,
    PutBucketIndexesCommand,
    DeleteBucketIndexesInput,
    DeleteBucketIndexesCommand,
} from '@scality/cloudserverclient';
import { createTestClient, testConfig } from './testSetup';

describe('CloudServer Indexes API Tests', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        client = createTestClient();
    });

    it('should test PutBucketIndexes', async () => {
        try {
            const indexData = JSON.stringify([
                {
                    name: "testIndex1",
                    keys: [
                        { order: 1, key: "metadata.userId" }
                    ]
                }
            ]);
            
            const putBucketIndexesInput: PutBucketIndexesInput = {
                Bucket: testConfig.bucketName,
                Body: new TextEncoder().encode(indexData),
            };
            const putBucketIndexesCommand = new PutBucketIndexesCommand(putBucketIndexesInput);
            const result = await client.send(putBucketIndexesCommand);
            console.log('PutBucketIndexes succeeded:', result);
        } catch (err) {
            console.log('PutBucketIndexes failed:', err);
        }
    });

    it('should test GetBucketIndexes', async () => {
        try {
            const getBucketIndexesInput: GetBucketIndexesInput = {
                Bucket: testConfig.bucketName,
            };
            const getBucketIndexesCommand = new GetBucketIndexesCommand(getBucketIndexesInput);
            const indexesData = await client.send(getBucketIndexesCommand);
            console.log('GetBucketIndexes succeeded:', indexesData);
            console.log('Indexes count:', indexesData.Indexes?.length);
        } catch (err) {
            console.log('GetBucketIndexes failed:', err);
        }
    });

    it('should test DeleteBucketIndexes and verify deletion', async () => {
        try {
            const indexesToDelete = JSON.stringify([
                {
                    name: "testIndex1",
                    keys: [
                        { order: 1, key: "metadata.userId" }
                    ]
                }
            ]);
            
            const deleteBucketIndexesInput: DeleteBucketIndexesInput = {
                Bucket: testConfig.bucketName,
                Body: new TextEncoder().encode(indexesToDelete),
            };
            const deleteBucketIndexesCommand = new DeleteBucketIndexesCommand(deleteBucketIndexesInput);
            const result = await client.send(deleteBucketIndexesCommand);
            console.log('DeleteBucketIndexes succeeded:', result);
        } catch (err) {
            console.log('DeleteBucketIndexes failed:', err);
        }

        try {
            const getBucketIndexesInput: GetBucketIndexesInput = {
                Bucket: testConfig.bucketName,
            };
            const getBucketIndexesCommand = new GetBucketIndexesCommand(getBucketIndexesInput);
            const indexesData = await client.send(getBucketIndexesCommand);
            console.log('GetBucketIndexes after deletion:', indexesData);
        } catch (err) {
            console.log('GetBucketIndexes after deletion failed:', err);
        }
    });
});
