import { 
    BackbeatRoutesClient,
    GetObjectInput,
    GetObjectCommand,
} from '../src/index';
import assert from 'assert';
import { createTestClient, testConfig } from './testSetup';
import { describeForMongoBackend } from './testHelpers';

describeForMongoBackend('CloudServer test error handling', () => {
    let backbeatRoutesClient: BackbeatRoutesClient;

    beforeAll(() => {
        ({backbeatRoutesClient} = createTestClient());
    });

    it('should test xml parsing', async () => {
        try {
            const getInput: GetObjectInput = {
                Bucket: testConfig.bucketName,
                Key: 'notAKey',
            };
            const getCommand = new GetObjectCommand(getInput);
            await backbeatRoutesClient.send(getCommand);
            assert.fail('Expected an error but none was thrown');
        } catch (err: any) {
            assert.strictEqual(err.name, 'NoSuchKey');            
            assert.strictEqual(err.message, 'The specified key does not exist.');            
            assert.strictEqual(err.$metadata?.httpStatusCode, 404);
        }
    });
});
