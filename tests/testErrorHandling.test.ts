import { 
    CloudserverClient,
    MultipleBackendDeleteObjectInput,
    MultipleBackendDeleteObjectCommand,
    GetObjectInput,
    GetObjectCommand,
} from '@scality/cloudserverclient';
import { createTestClient, testConfig } from './testSetup';

describe('CloudServer test error handling', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        client = createTestClient();
    });

    it('should test xml parsing', async () => {
        // Run CloudServer with : S3VAULT=mem S3METADATA=mem S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        // Needs to tamper with Cloudserver response manually to return an html error..
        try {
            const getInput: GetObjectInput = {
                Bucket: testConfig.bucketName,
                Key: 'notAKey',
            };
            const getCommand = new GetObjectCommand(getInput);
            const getData = await client.send(getCommand);
        } catch (err: any) {
            console.log('Error:', err);
            console.log('Error name:', err.name);
            console.log('Error message:', err.message);
            console.log('Error code:', err.$metadata?.httpStatusCode);
            console.log('Error parsedXml:', err.parsedXml);
        }
    });

    it.skip('should test html parsing', async () => {
        // Run CloudServer with : S3VAULT=mem S3METADATA=mem S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        try {
            const deleteInput: MultipleBackendDeleteObjectInput = {
                Bucket: 'testConfig.bucketName',
                Key: 'notAKey',
                StorageClass: 'us-east-1',
                StorageType: 'file'
            };
            const commandDelete = new MultipleBackendDeleteObjectCommand(deleteInput);
            const deleteResult = await client.send(commandDelete);
        } catch (err: any) {
            console.log('Error:', err);
            console.log('Error name:', err.name);
            console.log('Error message:', err.message);
            console.log('Error code:', err.$metadata?.httpStatusCode);
            console.log('Error rawBody:', err.rawBody);
        }
    });
});
