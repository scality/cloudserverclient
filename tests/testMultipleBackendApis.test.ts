import { 
    CloudserverClient,
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
} from '../src/index';
import { createTestClient, testConfig } from './testSetup';
const crypto = require('crypto');

describe('CloudServer Multiple Backend API Tests', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        client = createTestClient();
    });

    it('should test MultipleBackendPutObject and delete API', async () => {
        // Run Cloudserver with : S3VAULT=mem S3METADATA=mem S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        try {
            const getInput: GetObjectInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
                RequestUids: '123',
            };
            const getCommand = new GetObjectCommand(getInput);
            const getData = await client.send(getCommand);
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
                    'tag1': 'value1',
                    'tag2': 'value2'
                }),
                StorageClass: 'us-east-1',
                StorageType: 'file',
                CanonicalID: '79a59df900b949e55d96a1e698fbacedfd6e09d98eacf8f8d5218e7cd47ef2be'
            };
            
            const command = new MultipleBackendPutObjectCommand(putInput as any);
            command.middlewareStack.add(
                    next => async args => {
                        const request = args.request as any;
                        console.log("content-length:", request?.headers?.['content-length'])
                        console.log("len", Buffer.byteLength(request.body as any))
                        return next(args);
                    },
                    { step: 'finalizeRequest' }
            );
            const result = await client.send(command);
            console.log('MultipleBackendPutObject succeeded!', result);

            const deleteInput: MultipleBackendDeleteObjectInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
                StorageClass: 'us-east-1',
                StorageType: 'file'
            };
            const commandDelete = new MultipleBackendDeleteObjectCommand(deleteInput);
            const deleteResult = await client.send(commandDelete);
            console.log('MultipleBackendDeleteObject succeeded!', deleteResult);
        } catch (err: any) {
            console.log('MultipleBackendPutObject and delete failed err:', err);
            console.log('MultipleBackendPutObject and delete failed status code:', err.$metadata?.httpStatusCode);
            console.log('MultipleBackendPutObject and delete failed raw:', err.$response);
        }
    });

    it('should test MultipleBackendHeadObject API', async () => {
        try {
            const getInput: GetObjectInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
            };
            const getCommand = new GetObjectCommand(getInput);
            const getData = await client.send(getCommand);
            const dataBody = await getData.Body.transformToString()
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
                    'tag1': 'value1',
                    'tag2': 'value2'
                }),
                StorageClass: 'us-east-1',
                StorageType: 'file',
                CanonicalID: '79a59df900b949e55d96a1e698fbacedfd6e09d98eacf8f8d5218e7cd47ef2be'
            };
            
            const command = new MultipleBackendPutObjectCommand(putInput as any);
            const result = await client.send(command);
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
            const headResult = await client.send(headCommand);
            console.log('MultipleBackendHeadObject succeeded!', headResult);
        } catch (err: any) {
            console.log('MultipleBackendHeadObject failed:', err);
            console.log('MultipleBackendHeadObject failed:', err.name);
            console.log('MultipleBackendHeadObject failed:', err.$metadata.httpStatusCode);
        }
    });

    it('should test MultipleBackendPutObjectTagging API', async () => {
        try {
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
                    'Environment': 'Test',
                    'Project': 'Cloudserver'
                }),
                Body: tagData,
                DataStoreVersionId: 'v1',
                SourceBucket: "aBucket",
                ReplicationEndpointSite: "aVal"
            };
            const putTaggingCommand = new MultipleBackendPutObjectTaggingCommand(putTaggingInput);
            const putTaggingResult = await client.send(putTaggingCommand);
            console.log('MultipleBackendPutObjectTagging succeeded!', putTaggingResult);
        } catch (err: any) {
            console.log('MultipleBackendPutObjectTagging failed:', err);
        }
    });

    it('should test MultipleBackendDeleteObjectTagging API', async () => {
        try {
            const deleteTaggingInput: MultipleBackendDeleteObjectTaggingInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
                StorageClass: 'us-east-1',
                StorageType: 'file',
                // Body: new Uint8Array(0)
            };
            
            const deleteTaggingCommand = new MultipleBackendDeleteObjectTaggingCommand(deleteTaggingInput);
            const deleteTaggingResult = await client.send(deleteTaggingCommand);
            console.log('MultipleBackendDeleteObjectTagging succeeded!', deleteTaggingResult);
        } catch (err: any) {
            console.log('MultipleBackendDeleteObjectTagging failed:', err);
        }
    });

    it('should test MultipleBackendMPU API', async () => {
        try {
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
            const initiateMPUResult = await client.send(initiateMPUCommand);
            const uploadId = initiateMPUResult.uploadId;
            console.log('MultipleBackendInitiateMPU succeeded!', initiateMPUResult);
            console.log('UploadId:', uploadId);


            const getInput: GetObjectInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
            };
            const getCommand = new GetObjectCommand(getInput);
            const getData = await client.send(getCommand);
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
            const putPartResult = await client.send(putPartCommand);
            console.log('MultipleBackendPutMPUPart succeeded!', putPartResult);

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
            const completeMPUResult = await client.send(completeMPUCommand);
            console.log('MultipleBackendCompleteMPU succeeded!', completeMPUResult);
        } catch (err: any) {
            console.log('MultipleBackendInitiateMPU failed:', err);
        }
    });
});
