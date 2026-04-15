import { PutObjectCommand } from '@aws-sdk/client-s3';
import { GetMetadataCommand } from '../src/clients/backbeatRoutes';
import { GetFailedObjectCommand } from '../src/clients/proxyBackbeatApis';
import { createTestClient, testConfig } from './testSetup';
import { describeForBackbeatSetup } from './testHelpers';

const specialCharKeys = [
    { name: 'spaces', key: 'file with spaces.txt' },
    { name: 'parentheses', key: 'file(1).txt' },
    { name: 'exclamation', key: 'important!.txt' },
    { name: 'single quote', key: "it's a file.txt" },
    { name: 'asterisk', key: 'wild*card.txt' },
    { name: 'plus sign', key: 'a+b.txt' },
    { name: 'multiple spaces', key: 'Screenshot from 2026-04-14 17-59-19.png' },
    { name: 'unicode', key: 'données café.txt' },
    { name: 'equals sign', key: 'key=value.txt' },
    { name: 'at sign', key: 'user@domain.txt' },
    { name: 'hash', key: 'section#1.txt' },
    { name: 'percent literal', key: 'file%20already-encoded.txt' },
    { name: 'mixed special chars', key: 'file (1) copy!.txt' },
];

describe('SigV4 signing with special character keys', () => {
    const { backbeatRoutesClient, proxyBackbeatApisClient, s3client } = createTestClient();

    beforeAll(async () => {
        await Promise.all(specialCharKeys.map(({ key }) =>
            s3client.send(new PutObjectCommand({
                Bucket: testConfig.bucketName,
                Key: key,
                Body: 'test',
            })),
        ));
    });

    describe('BackbeatRoutesClient', () => {
        it.each(specialCharKeys)(
            'should not double-encode $name in path',
            async ({ key }) => {
                const result = await backbeatRoutesClient.send(
                    new GetMetadataCommand({
                        Bucket: testConfig.bucketName,
                        Key: key,
                    }),
                );
                expect(result.Body).toBeDefined();
            },
        );
    });

    describeForBackbeatSetup('ProxyBackbeatApisClient', () => {
        it.each(specialCharKeys)(
            'should not double-encode $name in path',
            async ({ key }) => {
                const result = await proxyBackbeatApisClient.send(
                    new GetFailedObjectCommand({
                        Bucket: testConfig.bucketName,
                        Key: key,
                        VersionId: testConfig.versionID,
                    }),
                );
                expect(result.$metadata.httpStatusCode).toBe(200);
            },
        );
    });
});
