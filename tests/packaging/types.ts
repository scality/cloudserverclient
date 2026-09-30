import {
    CloudserverClient,
    GetRaftIdCommand,
    GetBucketQuotaCommand,
    CheckConnectionCommand,
} from '@scality/cloudserverclient';
import { BackbeatRoutesClient } from '@scality/cloudserverclient/clients/backbeatRoutes';
import { BucketQuotaClient } from '@scality/cloudserverclient/clients/bucketQuota';
import { ProxyBackbeatApisClient } from '@scality/cloudserverclient/clients/proxyBackbeatApis';

const client = new CloudserverClient({ endpoint: 'http://localhost:8000', region: 'us-east-1' });
const backbeatRoutes: BackbeatRoutesClient = client.backbeatRoutes;
const bucketQuota: BucketQuotaClient = client.bucketQuota;
const proxyBackbeatApis: ProxyBackbeatApisClient = client.proxyBackbeatApis;

export async function statusCodes(): Promise<(number | undefined)[]> {
    const outputs = await Promise.all([
        backbeatRoutes.send(new GetRaftIdCommand({ Bucket: 'bucket' })),
        bucketQuota.send(new GetBucketQuotaCommand({ Bucket: 'bucket' })),
        proxyBackbeatApis.send(new CheckConnectionCommand({})),
    ]);
    return outputs.map(o => o.$metadata.httpStatusCode);
}
