import {
    CloudserverBucketQuotaClient,
    CloudserverBucketQuotaClientConfig,
} from '../../build/smithy/cloudserverBucketQuota/typescript-codegen';

export {
    CloudserverBucketQuotaClientConfig,
    GetBucketQuotaCommand,
    GetBucketQuotaCommandOutput,
    UpdateBucketQuotaCommand,
    UpdateBucketQuotaCommandOutput,
    DeleteBucketQuotaCommand,
    DeleteBucketQuotaCommandOutput,
} from '../../build/smithy/cloudserverBucketQuota/typescript-codegen';

export class BucketQuotaClient extends CloudserverBucketQuotaClient {
    constructor(config: CloudserverBucketQuotaClientConfig) {
        super(config);
    }
}
