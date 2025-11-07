// const { GetObjectCommand } = require('@scality/cloudserverclient');
const { createTestClient, testConfig } = require('./testSetup');
const { S3Client, GetObjectCommand,  PutObjectCommand, CreateBucketCommand, PutBucketVersioningCommand } = require('@aws-sdk/client-s3');

describe('CloudServer JavaScript API Tests', () => {
    let client;

    beforeAll(() => {
        client = createTestClient();
    });

    it('should test GetObject API in JavaScript', () => {
        const getInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            RequestUids: '12435'
        };
        const getCommand = new GetObjectCommand(getInput);

        return client.send(getCommand)
        .then(async getData => {
            const bodyString = await getData.Body.transformToString();
            console.log('GetObject succeeded:', bodyString);
            return getData;
        })
        .catch(err => {
            console.log('GetObject failed:', err.message);
            console.log('GetObject Status code:', err.$metadata?.httpStatusCode);
        });
    });
});
