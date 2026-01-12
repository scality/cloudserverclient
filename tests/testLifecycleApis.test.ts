import { 
    BackbeatRoutesClient,
    ListLifecycleCurrentsInput,
    ListLifecycleCurrentsCommand,
    ListLifecycleNonCurrentsInput,
    ListLifecycleNonCurrentsCommand,
    ListLifecycleOrphansInput,
    ListLifecycleOrphansCommand,
    DeleteObjectFromExpirationInput,
    DeleteObjectFromExpirationCommand,
} from '../src/index';
import assert from 'assert';
import { createTestClient, testConfig } from './testSetup';

describe('CloudServer Lifecycle API Tests', () => {
    let backbeatRoutesClient: BackbeatRoutesClient;

    beforeAll(() => {
        ({backbeatRoutesClient} = createTestClient());
    });

    it('should test ListLifecycleCurrents', async () => {
        const listInput: ListLifecycleCurrentsInput = {
            Bucket: testConfig.bucketName,
            MaxKeys: 1,
        };
        const command = new ListLifecycleCurrentsCommand(listInput);
        const result = await backbeatRoutesClient.send(command);
        assert.strictEqual(result.Contents?.[0].Key, testConfig.objectKey);
    });

    it('should test ListLifecycleNonCurrents', async () => {
        const listInput: ListLifecycleNonCurrentsInput = {
            Bucket: testConfig.bucketName,
            MaxKeys: 5,
        };
        const command = new ListLifecycleNonCurrentsCommand(listInput);
        const result = await backbeatRoutesClient.send(command);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test ListLifecycleOrphans', async () => {
        const listInput: ListLifecycleOrphansInput = {
            Bucket: testConfig.bucketName,
            MaxKeys: 5,
        };
        const command = new ListLifecycleOrphansCommand(listInput);
        const result = await backbeatRoutesClient.send(command);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test DeleteObjectFromExpiration', async () => {
        const deleteInput: DeleteObjectFromExpirationInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
        };
        const command = new DeleteObjectFromExpirationCommand(deleteInput);
        const result = await backbeatRoutesClient.send(command);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });
});
