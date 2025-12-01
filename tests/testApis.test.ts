import {
    CloudserverClient,
    PutDataCommandInput,
    PutDataCommand,
    GetObjectInput,
    GetObjectCommand,
    GetObjectListInput,
    GetObjectListCommand,
    BatchDeleteLocation,
    BatchDeleteInput,
    BatchDeleteCommand,
    addContentLengthMiddleware
} from '../src/index';
import { S3Client, GetObjectCommand as s3getCommand } from '@aws-sdk/client-s3';
import { createTestClient, testConfig } from './testSetup';
import assert from 'assert';

describe('CloudServer API Tests', () => {
    let client: CloudserverClient;
    let s3client: S3Client;

    beforeAll(() => {
        ({client, s3client} = createTestClient());
    });

    it('should test PutData', async () => {
        const command = new s3getCommand({
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
        });
        const getData = await s3client.send(command);
        const etag = getData.ETag?.replace(/"/g, '') || '';
        const putInput: PutDataCommandInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            CanonicalID: testConfig.canonicalID,
            ContentMD5: etag,
            Body: getData.Body,
            VersioningRequired: true
        };

        const command2 = new PutDataCommand(putInput);
        addContentLengthMiddleware(
            command2,
            getData.ContentLength
        );
        const data = await client.send(command2);
        const locationAny: any = data.Location as any;
        assert.ok(locationAny[0].key !== undefined);
    });

    it('should test GetSingleObject', async () => {
        const getInput: GetObjectInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            RequestUids: '123',
        };
        const getCommand = new GetObjectCommand(getInput);
        const getData = await client.send(getCommand);
        const bodyStr = await getData.Body.transformToString();
        assert.strictEqual(bodyStr, testConfig.objectData);
    });

    it('should test GetObjectList', async () => {
        // S3VAULT=mem S3METADATA=scality S3DATA=mem
        const getInput: GetObjectListInput = {
            Bucket: testConfig.bucketName,
        };
        const getCommand = new GetObjectListCommand(getInput);
        const getData = await client.send(getCommand);
        const contents = getData.Contents || [];
        assert.strictEqual(Array.isArray(contents), true);
        const found = contents.some(c => c?.key === testConfig.objectKey);
        assert.ok(found, `Expected Contents to include Key ${testConfig.objectKey}`);
    });

    it('should test BatchDelete', async () => {
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
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });
});
