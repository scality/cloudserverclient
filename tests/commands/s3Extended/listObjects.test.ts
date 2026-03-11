import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { createTestClient, testConfig } from '../../testSetup';
import { describeForMongoBackend } from '../../testHelpers';
import assert from 'assert';
import { ListObjectsExtendedCommand } from '../../../src/commands/s3Extended';

describeForMongoBackend('ListObjectsExtended', () => {
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

    it('should test ListObjectsExtended', async () => {
        const getCommand1= new ListObjectsExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: `content-length >= ${testConfig.objectData.length}`,
            MaxKeys: 5
        });
        const getData1 = await s3client.send(getCommand1);
        assert.strictEqual(getData1.Contents?.length, 2);

        const maxKey = 1;
        const getCommand2= new ListObjectsExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: `content-length >= ${testConfig.objectData.length}`,
            MaxKeys: maxKey
        });
        const getData2 = await s3client.send(getCommand2);
        assert.strictEqual(getData2.Contents?.length, maxKey);
        assert.strictEqual(getData2.IsTruncated, true);

        const getCommand3 = new ListObjectsExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: `content-length > ${testConfig.objectData.length}`,
            MaxKeys: 5
        });
        const getData3 = await s3client.send(getCommand3);
        assert.strictEqual(getData3.Contents?.length, 1);
        assert.strictEqual(getData3.Contents[0].Key, key2ndObject);

        const getCommand4 = new ListObjectsExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: `key = ${key2ndObject}`,
            MaxKeys: 5
        });
        const getData4 = await s3client.send(getCommand4);
        assert.strictEqual(getData4.Contents?.length, 1);
        assert.strictEqual(getData4.Contents[0].Key, key2ndObject);

        const getCommand5 = new ListObjectsExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: 'key = iDontExists',
            MaxKeys: 5
        });
        const getData5 = await s3client.send(getCommand5);
        assert.strictEqual(getData5.Contents, undefined);
    });
});
