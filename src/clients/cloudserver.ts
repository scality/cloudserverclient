import { BackbeatRoutesClient } from './backbeatRoutes';
import { BucketQuotaClient } from './bucketQuota';
import { CloudserverBackbeatRoutesClientConfig } from '../../build/smithy/cloudserverBackbeatRoutes/typescript-codegen';

export type CloudserverClientConfig = CloudserverBackbeatRoutesClientConfig;

export class CloudserverClient {
    public readonly backbeatRoutes: BackbeatRoutesClient;
    public readonly bucketQuota: BucketQuotaClient;

    constructor(config: CloudserverClientConfig) {
        this.backbeatRoutes = new BackbeatRoutesClient(config);
        this.bucketQuota = new BucketQuotaClient(config);
    }
}
