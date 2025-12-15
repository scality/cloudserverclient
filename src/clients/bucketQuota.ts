import { CloudserverClientConfig } from '../../build/smithy/cloudserver/typescript-codegen';
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
    constructor(config: CloudserverClientConfig | CloudserverBucketQuotaClientConfig) {
        super(config);
    }
}
