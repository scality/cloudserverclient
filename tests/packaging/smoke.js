// Sends one request with each generated client, from a consumer that only
// has the published tarball installed.
const assert = require('assert');
const http = require('http');
const pkg = require('@scality/cloudserverclient');
require('@scality/cloudserverclient/clients/backbeatRoutes');
require('@scality/cloudserverclient/clients/bucketQuota');
require('@scality/cloudserverclient/clients/proxyBackbeatApis');

const requests = [];
const server = http.createServer((req, res) => {
    requests.push(`${req.method} ${req.url}`);
    assert.match(req.headers.authorization || '', /^AWS4-HMAC-SHA256 /);
    req.resume();
    req.on('end', () => res.writeHead(200, { 'content-length': 0 }).end());
});

server.listen(0, '127.0.0.1', async () => {
    const client = new pkg.CloudserverClient({
        endpoint: `http://127.0.0.1:${server.address().port}`,
        region: 'us-east-1',
        credentials: { accessKeyId: 'accessKey', secretAccessKey: 'secretKey' },
        maxAttempts: 1,
    });
    try {
        await client.backbeatRoutes.send(new pkg.GetRaftIdCommand({ Bucket: 'bucket' }));
        await client.bucketQuota.send(new pkg.GetBucketQuotaCommand({ Bucket: 'bucket' }));
        await client.proxyBackbeatApis.send(new pkg.CheckConnectionCommand({}));
        assert.strictEqual(requests.length, 3);
        console.log(`runtime OK: ${requests.join(', ')}`);
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    } finally {
        server.close();
    }
});
