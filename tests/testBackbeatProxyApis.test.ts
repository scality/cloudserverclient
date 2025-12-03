import {
    ProxyBackbeatApisClient,
    CheckConnectionCommandInput,
    CheckConnectionCommand,
    GetLocationsStatusCommandInput,
    GetLocationsStatusCommand,
    GetLocationsIngestionStatusCommandInput,
    GetLocationsIngestionStatusCommand,
    ListFailedCommandInput,
    ListFailedCommand,
    GetFailedObjectCommandInput,
    GetFailedObjectCommand,
    RetryFailedObjectsCommand,
    PauseAllSitesCommandInput,
    PauseAllSitesCommand,
    PauseAllIngestionSitesCommandInput,
    PauseAllIngestionSitesCommand,
    PauseSiteCommandInput,
    PauseSiteCommand,
    PauseIngestionSiteCommandInput,
    PauseIngestionSiteCommand,
    ResumeAllSitesCommandInput,
    ResumeAllSitesCommand,
    ResumeAllIngestionSitesCommandInput,
    ResumeAllIngestionSitesCommand,
    ResumeSiteCommandInput,
    ResumeSiteCommand,
    ResumeIngestionSiteCommandInput,
    ResumeIngestionSiteCommand,
    ScheduleSiteResumeCommandInput,
    ScheduleSiteResumeCommand,
    ScheduleIngestionSiteResumeCommandInput,
    ScheduleIngestionSiteResumeCommand,
} from '../src/clients/proxyBackbeatApis';
import { createTestClient, testConfig } from './testSetup';
import { describeForBackbeatSetup } from './testHelpers';
import assert from 'assert';

// Note : these tests are relatively simple, as it's not straightforward to setup 
// backbeat with locations, and real pause/resume tests scenarios.
// The tests in Zenko are also using these apis, and will represent an opportunity to 
// test this client better : https://scality.atlassian.net/browse/ZENKO-5102
describeForBackbeatSetup('CloudServer Check Status API Tests', () => {
    let proxyBackbeatApisClient: ProxyBackbeatApisClient;

    beforeAll(() => {
        ({proxyBackbeatApisClient} = createTestClient());
    });

    it('should test checkConnection', async () => {
        const input: CheckConnectionCommandInput = {};
        const cmd = new CheckConnectionCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test GetLocationsStatus', async () => {
        const input: GetLocationsStatusCommandInput = {};
        const cmd = new GetLocationsStatusCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
        assert.strictEqual((result.status as Record<string, string>)?.['wontwork-location'], 'enabled');
    });

    it('should test GetLocationsIngestionStatus', async () => {
        const input: GetLocationsIngestionStatusCommandInput = {};
        const cmd = new GetLocationsIngestionStatusCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test listFailed', async () => {
        const input: ListFailedCommandInput = {};
        const cmd = new ListFailedCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test getFailedObject', async () => {
        const input: GetFailedObjectCommandInput = {
            Bucket: testConfig.bucketName,
            Key: testConfig.objectKey,
            VersionId: testConfig.versionID,
        };
        const cmd = new GetFailedObjectCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test retryFailedObjects', async () => {
        const bodyData = JSON.stringify([
            {
                Bucket: testConfig.bucketName,
                Key: testConfig.objectKey,
                VersionId: testConfig.versionID,
                StorageClass: 'STANDARD',
            }
        ]);
        const cmd = new RetryFailedObjectsCommand({
            Body: new TextEncoder().encode(bodyData)
        });
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test pauseAllSites', async () => {
        const input: PauseAllSitesCommandInput = {};
        const cmd = new PauseAllSitesCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test pauseAllIngestionSites', async () => {
        const input: PauseAllIngestionSitesCommandInput = {};
        const cmd = new PauseAllIngestionSitesCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test pauseSite', async () => {
        const input: PauseSiteCommandInput = {
            Site: 'zenko', // Value from backbeat default config.json, destination.bootstrapList
        };
        const cmd = new PauseSiteCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    // No site available for ingestion on our test setup
    it.skip('should test pauseIngestionSite', async () => {
        const input: PauseIngestionSiteCommandInput = {
            Site: 'a-zenko-location', // Value from backbeat default config.json, extensions.ingestion.sources
        };
        const cmd = new PauseIngestionSiteCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test resumeAllSites', async () => {
        const input: ResumeAllSitesCommandInput = {};
        const cmd = new ResumeAllSitesCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test resumeAllIngestionSites', async () => {
        const input: ResumeAllIngestionSitesCommandInput = {};
        const cmd = new ResumeAllIngestionSitesCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test resumeSite', async () => {
        const input: ResumeSiteCommandInput = {
            Site: 'zenko',
        };
        const cmd = new ResumeSiteCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    // No site available for ingestion on our test setup
    it.skip('should test resumeIngestionSite', async () => {
        const input: ResumeIngestionSiteCommandInput = {
            Site: 'a-zenko-location',
        };
        const cmd = new ResumeIngestionSiteCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    it('should test scheduleSiteResume', async () => {
        const bodyData = JSON.stringify({ hours: 24 });
        const input: ScheduleSiteResumeCommandInput = {
            Site: 'zenko',
            Body: new TextEncoder().encode(bodyData)
        };
        const cmd = new ScheduleSiteResumeCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });

    // No site available for ingestion on our test setup
    it.skip('should test scheduleIngestionSiteResume', async () => {
        const bodyData = JSON.stringify({ hours: 24 });
        const input: ScheduleIngestionSiteResumeCommandInput = {
            Site: 'zenko',
            Body: new TextEncoder().encode(bodyData)
        };
        const cmd = new ScheduleIngestionSiteResumeCommand(input);
        const result = await proxyBackbeatApisClient.send(cmd);
        assert.strictEqual(result.$metadata.httpStatusCode, 200);
    });
});
