import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { createTestClient, testConfig } from '../../testSetup';
import { describeForMongoBackend } from '../../testHelpers';
import assert from 'assert';
import {
    GetObjectAttributesExtendedCommand,
    GetObjectAttributesExtendedOutput,
} from '../../../src/commands/s3Extended';

describeForMongoBackend('GetObjectAttributesExtended', () => {
    let s3client: S3Client;
    const metadataKey = `${testConfig.objectKey}-with-meta`;
    const metadataBody = 'data-with-metadata';
    const metadataETag = '0235b027419caf7c0e4b0840f7ec21a6';

    beforeAll(async () => {
        const testClients = createTestClient();
        s3client = testClients.s3client;
    });

    beforeAll(async () => {
        await s3client.send(new PutObjectCommand({
            Bucket: testConfig.bucketName,
            Key: metadataKey,
            Body: metadataBody,
            Metadata: {
                foo: 'bar',
                bar: 'baz',
                baz: 'qux',
            },
        }));
    });

    it('should get ETag only', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            ObjectAttributes: ['ETag'],
        }));

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result.ETag, '8c68b1ec59642e3994c995eccfee553b');
    });

    it('should get ObjectSize only', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            ObjectAttributes: ['ObjectSize'],
        }));

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result.ObjectSize, 11);
    });

    it('should get StorageClass only', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            ObjectAttributes: ['StorageClass'],
        }));

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result.StorageClass, 'STANDARD');
    });

    it('should get all standard attributes at once', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            ObjectAttributes: ['ETag', 'ObjectParts', 'StorageClass', 'ObjectSize'],
        }));

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result.ETag, '8c68b1ec59642e3994c995eccfee553b');
        assert.strictEqual(result.ObjectSize, 11);
        assert.strictEqual(result.StorageClass, 'STANDARD');
    });

    it('should get a single user metadata key', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: metadataKey,
            ObjectAttributes: ['x-amz-meta-foo'],
        })) as GetObjectAttributesExtendedOutput;

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result['x-amz-meta-foo'], 'bar');
    });

    it('should get multiple user metadata keys', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: metadataKey,
            ObjectAttributes: ['x-amz-meta-foo', 'x-amz-meta-bar', 'x-amz-meta-baz'],
        })) as GetObjectAttributesExtendedOutput;

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result['x-amz-meta-foo'], 'bar');
        assert.strictEqual(result['x-amz-meta-bar'], 'baz');
        assert.strictEqual(result['x-amz-meta-baz'], 'qux');
    });

    it('should get all user metadata with wildcard', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: metadataKey,
            ObjectAttributes: ['x-amz-meta-*'],
        })) as GetObjectAttributesExtendedOutput;

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result['x-amz-meta-foo'], 'bar');
        assert.strictEqual(result['x-amz-meta-bar'], 'baz');
        assert.strictEqual(result['x-amz-meta-baz'], 'qux');
    });

    it('should get wildcard combined with a specific user metadata key', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: metadataKey,
            ObjectAttributes: ['x-amz-meta-*', 'x-amz-meta-foo'],
        })) as GetObjectAttributesExtendedOutput;

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result['x-amz-meta-foo'], 'bar');
        assert.strictEqual(result['x-amz-meta-bar'], 'baz');
        assert.strictEqual(result['x-amz-meta-baz'], 'qux');
    });

    it('should handle non-existing user metadata key', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            ObjectAttributes: ['x-amz-meta-nonexistent'],
        })) as GetObjectAttributesExtendedOutput;

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result['x-amz-meta-nonexistent'], undefined);
    });

    it('should get standard attribute combined with non-existing user metadata', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            ObjectAttributes: ['ETag', 'x-amz-meta-nonexistent'],
        })) as GetObjectAttributesExtendedOutput;

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result.ETag, '8c68b1ec59642e3994c995eccfee553b');
        assert.strictEqual(result['x-amz-meta-nonexistent'], undefined);
    });

    it('should get ETag combined with a single user metadata key', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: metadataKey,
            ObjectAttributes: ['ETag', 'x-amz-meta-foo'],
        })) as GetObjectAttributesExtendedOutput;

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result.ETag, metadataETag);
        assert.strictEqual(result['x-amz-meta-foo'], 'bar');
    });

    it('should get all standard attributes combined with all user metadata', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: metadataKey,
            ObjectAttributes: [
                'ETag',
                'ObjectParts',
                'StorageClass',
                'ObjectSize',
                'x-amz-meta-foo',
                'x-amz-meta-bar',
                'x-amz-meta-baz',
            ],
        })) as GetObjectAttributesExtendedOutput;

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result.ETag, metadataETag);
        assert.strictEqual(result.ObjectSize, 18);
        assert.strictEqual(result.StorageClass, 'STANDARD');
        assert.strictEqual(result['x-amz-meta-foo'], 'bar');
        assert.strictEqual(result['x-amz-meta-bar'], 'baz');
        assert.strictEqual(result['x-amz-meta-baz'], 'qux');
    });

    it('should get standard attributes combined with user metadata wildcard', async () => {
        const result = await s3client.send(new GetObjectAttributesExtendedCommand({
            Bucket: testConfig.bucketName,
            Key: metadataKey,
            ObjectAttributes: ['ETag', 'ObjectSize', 'x-amz-meta-*'],
        })) as GetObjectAttributesExtendedOutput;

        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual(result.ETag, metadataETag);
        assert.strictEqual(result.ObjectSize, 18);
        assert.strictEqual(result['x-amz-meta-foo'], 'bar');
        assert.strictEqual(result['x-amz-meta-bar'], 'baz');
        assert.strictEqual(result['x-amz-meta-baz'], 'qux');
    });
});
