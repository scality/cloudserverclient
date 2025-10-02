import { 
    CloudserverClient,
    ListLifecycleCurrentsInput,
    ListLifecycleCurrentsCommand,
    ListLifecycleNonCurrentsInput,
    ListLifecycleNonCurrentsCommand,
    ListLifecycleOrphansInput,
    ListLifecycleOrphansCommand,
    DeleteObjectFromExpirationInput,
    DeleteObjectFromExpirationCommand,
} from '@scality/cloudserverclient';
import { createTestClient, testConfig } from './testSetup';

describe('CloudServer Lifecycle API Tests', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        client = createTestClient();
    });

    it('should test ListLifecycleCurrents', async () => {
        // Run Cloudserver with : S3VAULT=mem S3METADATA=mongodb S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        try {
            const listInput: ListLifecycleCurrentsInput = {
                Bucket: testConfig.bucketName,
                MaxKeys: 1,
            };
            const command = new ListLifecycleCurrentsCommand(listInput);
            const result = await client.send(command);
            console.log('ListLifecycleCurrents succeeded!', result);
        } catch (err: any) {
            console.log('ListLifecycleCurrents failed:', err);
        }
    });

    it('should test ListLifecycleNonCurrents', async () => {
        try {
            const listInput: ListLifecycleNonCurrentsInput = {
                Bucket: testConfig.bucketName,
                MaxKeys: 5,
            };
            const command = new ListLifecycleNonCurrentsCommand(listInput);
            const result = await client.send(command);
            console.log('ListLifecycleNonCurrents succeeded!', result);
        } catch (err: any) {
            console.log('ListLifecycleNonCurrents failed:', err);
        }
    });

    it('should test ListLifecycleOrphans', async () => {
        try {
            const listInput: ListLifecycleOrphansInput = {
                Bucket: testConfig.bucketName,
                MaxKeys: 5,
            };
            const command = new ListLifecycleOrphansCommand(listInput);
            const result = await client.send(command);
            console.log('ListLifecycleOrphans succeeded!', result);
        } catch (err: any) {
            console.log('ListLifecycleOrphans failed:', err);
        }
    });

    it('should test DeleteObjectFromExpiration', async () => {
        try {
            const deleteInput: DeleteObjectFromExpirationInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
            };
            const command = new DeleteObjectFromExpirationCommand(deleteInput);
            const result = await client.send(command);
            console.log('DeleteObjectFromExpiration succeeded!', result);
        } catch (err) {
            console.log('DeleteObjectFromExpiration failed:', err);
        }
    });
});
