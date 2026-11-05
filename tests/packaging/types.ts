import {
    CloudserverClient,
    GetRaftIdCommand,
    GetBucketQuotaCommand,
    CheckConnectionCommand,
    DestinationApiUnavailable,
    ListNotificationDestinationsCommand,
} from '@scality/cloudserverclient';
import { BackbeatRoutesClient } from '@scality/cloudserverclient/clients/backbeatRoutes';
import { BucketQuotaClient } from '@scality/cloudserverclient/clients/bucketQuota';
import { ProxyBackbeatApisClient } from '@scality/cloudserverclient/clients/proxyBackbeatApis';
import { NotificationDestinationsClient } from '@scality/cloudserverclient/clients/notificationDestinations';

const client = new CloudserverClient({ endpoint: 'http://localhost:8000', region: 'us-east-1' });
const backbeatRoutes: BackbeatRoutesClient = client.backbeatRoutes;
const bucketQuota: BucketQuotaClient = client.bucketQuota;
const proxyBackbeatApis: ProxyBackbeatApisClient = client.proxyBackbeatApis;
const notificationDestinations: NotificationDestinationsClient = client.notificationDestinations;

export async function statusCodes(): Promise<(number | undefined)[]> {
    const outputs = await Promise.all([
        backbeatRoutes.send(new GetRaftIdCommand({ Bucket: 'bucket' })),
        bucketQuota.send(new GetBucketQuotaCommand({ Bucket: 'bucket' })),
        proxyBackbeatApis.send(new CheckConnectionCommand({})),
        notificationDestinations.send(new ListNotificationDestinationsCommand({})),
    ]);
    return outputs.map(o => o.$metadata.httpStatusCode);
}

export function isDestinationApiUnavailable(err: unknown): boolean {
    return err instanceof DestinationApiUnavailable;
}
