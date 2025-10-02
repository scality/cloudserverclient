import {
    CloudserverClient,
    PutDataInput,
    PutDataCommand,
    GetObjectInput,
    GetObjectCommand,
    GetObjectListInput,
    GetObjectListCommand,
    BatchDeleteLocation,
    BatchDeleteInput,
    BatchDeleteCommand
} from '@scality/cloudserverclient';
import { Readable } from 'stream';
import { createTestClient, testConfig } from './testSetup';
const crypto = require('crypto');

describe('CloudServer API Tests', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        client = createTestClient();
    });

    it('should test PutData', async () => {
        try {
            const content = "heyhey"
            const body = new TextEncoder().encode(content);
            const contentMD5 = crypto.createHash('md5').update(body).digest('hex');
            const streamBody: Readable = Readable.from([body]);
            const putInput: PutDataInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
                CanonicalID: testConfig.canonicalID,
                ContentMD5: contentMD5,
                Body: streamBody,
                VersioningRequired: true
            };

            const command = new PutDataCommand(putInput as any);
            const data = await client.send(command);
            console.log('PutData succeeded:', data.Location);
        } catch (err: any) {
            console.log('PutData failed:', err);
        }
    });

    it('should test GetObject', async () => {
        try {
            const getInput: GetObjectInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
                RequestUids: '123',
            };
            const getCommand = new GetObjectCommand(getInput);
            const getData = await client.send(getCommand);
            console.log('GetObject succeeded:', getData);
        } catch (err) {
            console.log('GetObject failed:', err);
        }
    });

    it('should test GetObjectList', async () => {
        // Needs S3METADATA=scality
        try {
            const getInput: GetObjectListInput = {
                Bucket: testConfig.bucketName,
            };
            const getCommand = new GetObjectListCommand(getInput);
            const getData = await client.send(getCommand);
            console.log('GetObjectList succeeded:', getData);
            console.log('Contents count:', getData.Contents?.length);
            console.log('IsTruncated:', getData.IsTruncated);
        } catch (err) {
            console.log('GetObjectList failed:', err);
        }
    });

    it('should test BatchDelete', async () => {
        try {
            const locations: BatchDeleteLocation[] = [
                {
                    dataStoreName: "mem", 
                    key: "aaaa1",
                    size: 8,
                    dataStoreVersionId: "v1"
                }
            ];
            const batchDeleteInput: BatchDeleteInput = {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
                IfUnmodifiedSince: new Date().toISOString(),
                StorageClass: "STANDARD",
                Tags: JSON.stringify({ "somekey": "test" }),
                ContentType: "application/octet-stream",
                Locations: locations
            };
            
            const batchDeleteCommand = new BatchDeleteCommand(batchDeleteInput);
            const result = await client.send(batchDeleteCommand);
            console.log('BatchDelete succeeded:', result.$metadata);
        } catch (err: any) {
            console.log('BatchDelete failed:', err);
        }
    });
});
