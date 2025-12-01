import { 
    CloudserverClient,
    MultipleBackendDeleteObjectInput,
    MultipleBackendDeleteObjectCommand,
    GetObjectInput,
    GetObjectCommand,
} from '../src/index';
import assert from 'assert';
import { createTestClient, testConfig } from './testSetup';

describe('CloudServer test error handling', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        ({client} = createTestClient());
    });

    it('should test xml parsing', async () => {
        try {
            const getInput: GetObjectInput = {
                Bucket: testConfig.bucketName,
                Key: 'notAKey',
            };
            const getCommand = new GetObjectCommand(getInput);
            await client.send(getCommand);
            assert.fail('Expected an error but none was thrown');
        } catch (err: any) {
            assert.strictEqual(err.name, 'NoSuchKey');            
            assert.strictEqual(err.message, 'The specified key does not exist.');            
            assert.strictEqual(err.$metadata?.httpStatusCode, 404);
        }
    });

    it.skip('should test html parsing', async () => {
        // Run CloudServer with : S3VAULT=mem S3METADATA=mem S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        // Needs to tamper with Cloudserver response manually to return an html error
        try {
            const deleteInput: MultipleBackendDeleteObjectInput = {
                Bucket: 'testConfig.bucketName',
                Key: 'notAKey',
                StorageClass: 'us-east-1',
                StorageType: 'file'
            };
            const commandDelete = new MultipleBackendDeleteObjectCommand(deleteInput);
            await client.send(commandDelete);
        } catch (err: any) {
            console.log('Error:', err);
            console.log('Error name:', err.name);
            console.log('Error message:', err.message);
            console.log('Error code:', err.$metadata?.httpStatusCode);
            console.log('Error rawBody:', err.rawBody);
        }
    });
});
