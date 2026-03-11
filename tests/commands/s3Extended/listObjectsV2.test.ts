import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { createTestClient, testConfig } from '../../testSetup';
import { describeForMongoBackend } from '../../testHelpers';
import assert from 'assert';
import {
    ListObjectsV2ExtendedCommand,
    ListObjectsV2ExtendedOutput,
} from '../../../src/commands/s3Extended';

describeForMongoBackend('ListObjectsV2Extended', () => {
    let s3client: S3Client;
    const key2ndObject = `${testConfig.objectKey}2nd`;
    const body2ndObject = `${testConfig.objectData}2nd`;

    beforeAll(async () => {
        const testClients = createTestClient();
        s3client = testClients.s3client;
    });

    beforeAll(async () => {
        const putObjectCommand = new PutObjectCommand({
            Bucket: testConfig.bucketName,
            Key: key2ndObject,
            Body: body2ndObject,
        });
        await s3client.send(putObjectCommand);
    });

    it('should test ListObjectsV2Extended', async () => {
        const getCommand1= new ListObjectsV2ExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: `content-length >= ${testConfig.objectData.length}`,
            MaxKeys: 5,
            FetchOwner: true,
        });
        const getData1 = await s3client.send(getCommand1);
        assert.strictEqual(getData1.Contents?.length, 2);
        assert.strictEqual(getData1.KeyCount, 2);
        assert.strictEqual(getData1.Contents[0].Owner?.DisplayName, 'Bart');

        const getCommand2 = new ListObjectsV2ExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: 'content-length >= 0',
            MaxKeys: 5,
            StartAfter: testConfig.objectKey, // Skip first object
        });
        const getData2 = await s3client.send(getCommand2);
        assert.strictEqual(getData2.Contents?.length, 1);
        assert.strictEqual(getData2.Contents[0].Key, key2ndObject);
    });

    describe.skip('ListObjectsV2 with ObjectAttributes', () => {
        const metaKey1 = `${testConfig.objectKey}-listv2-meta1`;
        const metaKey2 = `${testConfig.objectKey}-listv2-meta2`;

        beforeAll(async () => {
            await s3client.send(new PutObjectCommand({
                Bucket: testConfig.bucketName,
                Key: metaKey1,
                Body: 'data1',
                Metadata: { foo: 'bar', baz: 'qux' },
            }));
            await s3client.send(new PutObjectCommand({
                Bucket: testConfig.bucketName,
                Key: metaKey2,
                Body: 'data2',
                Metadata: { foo: 'hello' },
            }));
        });

        it('should list objects with a single user metadata key', async () => {
            const result = await s3client.send(new ListObjectsV2ExtendedCommand({
                Bucket: testConfig.bucketName,
                ObjectAttributes: ['x-amz-meta-foo'],
            })) as ListObjectsV2ExtendedOutput;

            const obj1 = result.Contents!.find(content => content.Key === metaKey1)!;
            const obj2 = result.Contents!.find(ccontent => ccontent.Key === metaKey2)!;

            assert.strictEqual(result.$metadata.httpStatusCode, 200);
            assert.strictEqual(result.Contents?.length, 2);
            assert.strictEqual(obj1['x-amz-meta-foo'], 'bar');
            assert.strictEqual(obj2['x-amz-meta-foo'], 'hello');
        });

        it('should list objects with multiple user metadata keys', async () => {
            const result = await s3client.send(new ListObjectsV2ExtendedCommand({
                Bucket: testConfig.bucketName,
                ObjectAttributes: ['x-amz-meta-foo', 'x-amz-meta-baz'],
            })) as ListObjectsV2ExtendedOutput;

            const obj1 = result.Contents!.find(content => content.Key === metaKey1)!;
            const obj2 = result.Contents!.find(ccontent => ccontent.Key === metaKey2)!;

            assert.strictEqual(result.$metadata.httpStatusCode, 200);
            assert.strictEqual(obj1['x-amz-meta-foo'], 'bar');
            assert.strictEqual(obj1['x-amz-meta-baz'], 'qux');
            assert.strictEqual(obj2['x-amz-meta-foo'], 'hello');
            assert.strictEqual(obj2['x-amz-meta-baz'], undefined);
        });

        it('should list objects with wildcard user metadata', async () => {
            const result = await s3client.send(new ListObjectsV2ExtendedCommand({
                Bucket: testConfig.bucketName,
                ObjectAttributes: ['x-amz-meta-*'],
            })) as ListObjectsV2ExtendedOutput;

            const obj1 = result.Contents!.find(content => content.Key === metaKey1)!;
            const obj2 = result.Contents!.find(ccontent => ccontent.Key === metaKey2)!;

            assert.strictEqual(result.$metadata.httpStatusCode, 200);
            assert.strictEqual(obj1['x-amz-meta-foo'], 'bar');
            assert.strictEqual(obj1['x-amz-meta-baz'], 'qux');
            assert.strictEqual(obj2['x-amz-meta-foo'], 'hello');
        });

        it('should list objects with non-existing user metadata key', async () => {
            const result = await s3client.send(new ListObjectsV2ExtendedCommand({
                Bucket: testConfig.bucketName,
                ObjectAttributes: ['x-amz-meta-nonexistent'],
            })) as ListObjectsV2ExtendedOutput;

            const obj1 = result.Contents!.find(content => content.Key === metaKey1)!;

            assert.strictEqual(result.$metadata.httpStatusCode, 200);
            assert.strictEqual(result.Contents?.length, 2);
            assert.strictEqual(obj1['x-amz-meta-nonexistent'], undefined);
        });

        it('should list objects with RestoreStatus combined with user metadata', async () => {
            const result = await s3client.send(new ListObjectsV2ExtendedCommand({
                Bucket: testConfig.bucketName,
                ObjectAttributes: ['RestoreStatus', 'x-amz-meta-foo'],
            })) as ListObjectsV2ExtendedOutput;

            const obj1 = result.Contents!.find(content => content.Key === metaKey1)!;

            assert.strictEqual(result.$metadata.httpStatusCode, 200);
            assert.strictEqual(obj1['x-amz-meta-foo'], 'bar');
            assert.deepStrictEqual(obj1.RestoreStatus, { IsRestoreInProgress: false });
        });

        it('should list objects with RestoreStatus combined with non-existing user metadata', async () => {
            const result = await s3client.send(new ListObjectsV2ExtendedCommand({
                Bucket: testConfig.bucketName,
                ObjectAttributes: ['RestoreStatus', 'x-amz-meta-nonexistent'],
            })) as ListObjectsV2ExtendedOutput;

            const obj1 = result.Contents!.find(content => content.Key === metaKey1)!;

            assert.strictEqual(result.$metadata.httpStatusCode, 200);
            assert.strictEqual(result.Contents?.length, 2);
            assert.strictEqual(obj1['x-amz-meta-nonexistent'], undefined);
            assert.deepStrictEqual(obj1.RestoreStatus, { IsRestoreInProgress: false });
        });
    });
});
