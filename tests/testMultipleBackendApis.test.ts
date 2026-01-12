import { 
    BackbeatRoutesClient,
    MultipleBackendPutObjectInput,
    MultipleBackendPutObjectCommand,
    MultipleBackendDeleteObjectInput,
    MultipleBackendDeleteObjectCommand,
    MultipleBackendHeadObjectInput,
    MultipleBackendHeadObjectCommand,
    MultipleBackendInitiateMPUInput,
    MultipleBackendInitiateMPUCommand,
    MultipleBackendPutMPUPartInput,
    MultipleBackendPutMPUPartCommand,
    MultipleBackendCompleteMPUInput,
    MultipleBackendCompleteMPUCommand,
    MultipleBackendPutObjectTaggingInput,
    MultipleBackendPutObjectTaggingCommand,
    MultipleBackendDeleteObjectTaggingInput,
    MultipleBackendDeleteObjectTaggingCommand,
    GetObjectInput,
    GetObjectCommand,
    addContentLengthMiddleware,
} from '../src/index';
import { createTestClient, testConfig } from './testSetup';
import assert from 'assert';
import crypto from 'crypto';

describe('CloudServer Multiple Backend API Tests', () => {
    let backbeatRoutesClient: BackbeatRoutesClient;

    beforeAll(() => {
        ({backbeatRoutesClient} = createTestClient());
    });

    it('should test MultipleBackendPutObject and delete API', async () => {
        // Run Cloudserver with : S3VAULT=mem S3METADATA=mem S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        const getInput: GetObjectInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            RequestUids: '123',
        };
        const getCommand = new GetObjectCommand(getInput);
        const getData = await backbeatRoutesClient.send(getCommand);
        const etag = getData.ETag?.replace(/"/g, '') || '';
        
        const incomingMsg = getData.Body as any;
        const contentLength = incomingMsg.headers['content-length'];

        const putInput: MultipleBackendPutObjectInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            Body: getData.Body,
            ContentMD5: etag,
            ContentType: 'text/plain',
            UserMetaData: JSON.stringify({
                'custom-meta': 'test-value',
                'another-meta': 'another-value'
            }),
            Tags: JSON.stringify({
                tag1: 'value1',
                tag2: 'value2'
            }),
            StorageClass: 'us-east-1',
            StorageType: 'file',
            CanonicalID: '79a59df900b949e55d96a1e698fbacedfd6e09d98eacf8f8d5218e7cd47ef2be'
        };
        
        const command = new MultipleBackendPutObjectCommand(putInput);
        addContentLengthMiddleware(
            command,
            contentLength
        );
        const result = await backbeatRoutesClient.send(command);
        
        assert.ok(result.location && result.location.length > 0, 'Location should not be empty');
        const location = result.location[0];
        assert.ok(location.dataStoreETag, 'dataStoreETag should exist');
        assert.ok(
            location.dataStoreETag.includes(etag),
            `dataStoreETag should contain the original etag.
            Expected to include: ${etag}, got: ${location.dataStoreETag}`
        );

        const deleteInput: MultipleBackendDeleteObjectInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            StorageClass: 'us-east-1',
            StorageType: 'file'
        };
        const commandDelete = new MultipleBackendDeleteObjectCommand(deleteInput);
        const deleteResult = await backbeatRoutesClient.send(commandDelete);
        assert.strictEqual(deleteResult.$metadata.httpStatusCode, 200);
    });

    it('should test MultipleBackendHeadObject API', async () => {
        const getInput: GetObjectInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
        };
        const getCommand = new GetObjectCommand(getInput);
        const getData = await backbeatRoutesClient.send(getCommand);
        const dataBody = await getData.Body.transformToString();
        const bodyBuffer = Buffer.from(dataBody);
        const contentMD5 = crypto.createHash('md5').update(bodyBuffer).digest('hex');
        const putInput: MultipleBackendPutObjectInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            Body: bodyBuffer as any,
            ContentMD5: contentMD5,
            ContentType: 'text/plain',
            UserMetaData: JSON.stringify({
                'custom-meta': 'test-value',
                'another-meta': 'another-value'
            }),
            Tags: JSON.stringify({
                tag1: 'value1',
                tag2: 'value2'
            }),
            StorageClass: 'us-east-1',
            StorageType: 'file',
            CanonicalID: '79a59df900b949e55d96a1e698fbacedfd6e09d98eacf8f8d5218e7cd47ef2be'
        };
        
        const command = new MultipleBackendPutObjectCommand(putInput as any);
        const result = await backbeatRoutesClient.send(command);
        const locationKey = result.location?.[0]?.key || '';

        const headInput: MultipleBackendHeadObjectInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            Locations: JSON.stringify([{
                key: locationKey,
                dataStoreName: 'us-east-1'
            }])
        };
        const headCommand = new MultipleBackendHeadObjectCommand(headInput);
        const headResult = await backbeatRoutesClient.send(headCommand);
        assert.strictEqual(headResult.$metadata.httpStatusCode, 200);
    });

    it.skip('should test MultipleBackendPutTaggingObject API', async () => {
        // Skipped : it's not straightforward to make this test work, 
        // cloudserver crashes on requests (dataClient.objectTagging is not a function)
        // probably missing some extra setup
        const tagData = new TextEncoder().encode(JSON.stringify({
            TagSet: [
                { Key: 'Environment', Value: 'Test' },
                { Key: 'Project', Value: 'Cloudserver' }
            ]
        }));
        const putTaggingInput: MultipleBackendPutObjectTaggingInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            StorageClass: 'us-east-1',
            StorageType: 'file',
            Tags: JSON.stringify({
                Environment: 'Test',
                Project: 'Cloudserver'
            }),
            Body: tagData,
            DataStoreVersionId: 'v1',
            SourceBucket: 'aBucket',
            ReplicationEndpointSite: 'aVal'
        };
        const putTaggingCommand = new MultipleBackendPutObjectTaggingCommand(putTaggingInput);
        const putTaggingResult = await backbeatRoutesClient.send(putTaggingCommand);
        assert.strictEqual(putTaggingResult.$metadata.httpStatusCode, 200);
    });

    it.skip('should test MultipleBackendDeleteObjectTagging API', async () => {
        // Skipped : it's not straightforward to make this test work, 
        // cloudserver crashes on requests (dataClient.objectTagging is not a function)
        // probably missing some extra setup
        const deleteTaggingInput: MultipleBackendDeleteObjectTaggingInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            StorageClass: 'us-east-1',
            StorageType: 'file',
            // Body: new Uint8Array(0)
        };
        
        const deleteTaggingCommand = new MultipleBackendDeleteObjectTaggingCommand(deleteTaggingInput);
        const deleteTaggingResult = await backbeatRoutesClient.send(deleteTaggingCommand);
        assert.strictEqual(deleteTaggingResult.$metadata.httpStatusCode, 200);
    });

    it.skip('should test MultipleBackendMPU API', async () => {
        // Skipped : it's not straightforward to make this test work, 
        // cloudserver crashes on requests, probably missing some extra setup
        const initiateMPUInput: MultipleBackendInitiateMPUInput = {
            Bucket: testConfig.bucketName,
            Key: `${testConfig.objectKey}-mpu`,
            StorageClass: 'us-east-1',
            StorageType: 'file',
            ContentType: 'text/plain',
            Tags: JSON.stringify({
                'mpu-tag': 'test-mpu'
            }),
        };
        
        const initiateMPUCommand = new MultipleBackendInitiateMPUCommand(initiateMPUInput);
        const initiateMPUResult = await backbeatRoutesClient.send(initiateMPUCommand);
        const uploadId = initiateMPUResult.uploadId;
        assert.strictEqual(initiateMPUResult.$metadata.httpStatusCode, 200);


        const getInput: GetObjectInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
        };
        const getCommand = new GetObjectCommand(getInput);
        const getData = await backbeatRoutesClient.send(getCommand);
        const putPartInput: MultipleBackendPutMPUPartInput = {
            Bucket: testConfig.bucketName,
            Key: `${testConfig.objectKey}-mpu`,
            StorageClass: 'us-east-1',
            StorageType: 'file',
            PartNumber: 1,
            UploadId: uploadId,
            Body: getData.Body,
        };

        const putPartCommand = new MultipleBackendPutMPUPartCommand(putPartInput as any);
        const putPartResult = await backbeatRoutesClient.send(putPartCommand);
        assert.strictEqual(putPartResult.$metadata.httpStatusCode, 200);
        
        const completeMPUInput: MultipleBackendCompleteMPUInput = {
            Bucket: testConfig.bucketName,
            Key: `${testConfig.objectKey}-mpu`,
            StorageClass: 'us-east-1',
            StorageType: 'file',
            UploadId: uploadId,
            ContentType: 'text/plain',
            Body: new TextEncoder().encode(JSON.stringify({
                parts: [{
                    partNumber: 1,
                    etag: 'dummy-etag'
                }]
            }))
        };
        const completeMPUCommand = new MultipleBackendCompleteMPUCommand(completeMPUInput);
        const completeMPUResult = await backbeatRoutesClient.send(completeMPUCommand);
        assert.strictEqual(completeMPUResult.$metadata.httpStatusCode, 200);
    });
});
