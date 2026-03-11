import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { createTestClient, testConfig } from '../../testSetup';
import { describeForMongoBackend } from '../../testHelpers';
import assert from 'assert';
import { ListObjectVersionsExtendedCommand } from '../../../src/commands/s3Extended';

describeForMongoBackend('ListObjectVersionsExtended', () => {
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

    it('should test ListObjectVersionsExtended', async () => {
        const getCommand1 = new ListObjectVersionsExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: 'content-length >= 0',
            MaxKeys: 100,
        });
        const getData1 = await s3client.send(getCommand1);
        assert.strictEqual(getData1.Versions?.length, 2);
        assert.strictEqual(getData1.Versions[0].IsLatest, true);

        // Delete one object to create a DeleteMarker
        const deleteCommand = new DeleteObjectCommand({
            Bucket: testConfig.bucketName,
            Key: key2ndObject,
        });
        await s3client.send(deleteCommand);

        const getCommand2 = new ListObjectVersionsExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: 'content-length >= 0',
            MaxKeys: 100,
        });
        const getData2 = await s3client.send(getCommand2);
        assert.strictEqual(getData2.DeleteMarkers?.[0].Key, key2ndObject);
        assert.ok(getData2.DeleteMarkers?.[0].VersionId);

        assert.ok(getData2.Versions);
        const firstVersion = getData2.Versions[0];
        const getCommand3 = new ListObjectVersionsExtendedCommand({
            Bucket: testConfig.bucketName,
            Query: 'content-length >= 0',
            KeyMarker: firstVersion.Key,
            VersionIdMarker: firstVersion.VersionId,
            MaxKeys: 100,
        });
        const getData3 = await s3client.send(getCommand3);
        assert.notStrictEqual(getData3.Versions?.[0]?.Key, firstVersion.Key);
    });
});
