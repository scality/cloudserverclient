import { 
    BucketQuotaClient,
    GetBucketQuotaCommand,
    UpdateBucketQuotaCommand,
    DeleteBucketQuotaCommand,
} from '../src/clients/bucketQuota';
import { createTestClient, testConfig } from './testSetup';
import assert from 'assert';

describe('Quota API Tests', () => {
    let bucketQuotaClient: BucketQuotaClient;
    const quotaValue = 12321;

    beforeAll(() => {
        ({bucketQuotaClient} = createTestClient());
    });

    it('should test Bucket quotas apis', async () => {
        try {
            await bucketQuotaClient.send(new GetBucketQuotaCommand({ Bucket: testConfig.bucketName }));
            assert.fail('Expected NoSuchQuota error but got success response');
        } catch (error: any) {
            assert.strictEqual(error.name, 'NoSuchQuota');
            assert.strictEqual(error.message, 'The specified resource does not have a quota.');
        }

        await bucketQuotaClient.send(new UpdateBucketQuotaCommand(
            { Bucket: testConfig.bucketName, Quota: quotaValue })
        );

        const getData = await bucketQuotaClient.send(new GetBucketQuotaCommand({ Bucket: testConfig.bucketName }));
        assert.strictEqual(getData.Quota, quotaValue);
        assert.strictEqual(getData.Name, testConfig.bucketName);

        await bucketQuotaClient.send(new DeleteBucketQuotaCommand({ Bucket: testConfig.bucketName }));
        try {
            await bucketQuotaClient.send(new GetBucketQuotaCommand({ Bucket: testConfig.bucketName }));
            assert.fail('Expected NoSuchQuota error but got success response');
        } catch (error: any) {
            assert.strictEqual(error.name, 'NoSuchQuota');
            assert.strictEqual(error.message, 'The specified resource does not have a quota.');
        }
    });

    it('should test Bucket quotas apis larger numbers', async () => {
        const quotas = [
            2_147_483_647,
            2_147_483_647 + 1,
            2**52,
        ];
        for (const quota of quotas) {
            await bucketQuotaClient.send(new UpdateBucketQuotaCommand(
                { Bucket: testConfig.bucketName, Quota: quota })
            );

            const getData = await bucketQuotaClient.send(new GetBucketQuotaCommand({ Bucket: testConfig.bucketName }));
            assert.strictEqual(getData.Quota, quota);
        }
    });
});
