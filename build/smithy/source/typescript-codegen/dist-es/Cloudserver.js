import { CloudserverClient, } from "./CloudserverClient";
import { BatchDeleteCommand, } from "./commands/BatchDeleteCommand";
import { DeleteBucketIndexesCommand, } from "./commands/DeleteBucketIndexesCommand";
import { DeleteObjectFromExpirationCommand, } from "./commands/DeleteObjectFromExpirationCommand";
import { GetBucketCseqCommand, } from "./commands/GetBucketCseqCommand";
import { GetBucketIndexesCommand, } from "./commands/GetBucketIndexesCommand";
import { GetBucketMetadataCommand, } from "./commands/GetBucketMetadataCommand";
import { GetMetadataCommand, } from "./commands/GetMetadataCommand";
import { GetObjectCommand, } from "./commands/GetObjectCommand";
import { GetObjectListCommand, } from "./commands/GetObjectListCommand";
import { GetRaftBucketsCommand, } from "./commands/GetRaftBucketsCommand";
import { GetRaftIdCommand, } from "./commands/GetRaftIdCommand";
import { GetRaftLogCommand, } from "./commands/GetRaftLogCommand";
import { ListLifecycleCurrentsCommand, } from "./commands/ListLifecycleCurrentsCommand";
import { ListLifecycleNonCurrentsCommand, } from "./commands/ListLifecycleNonCurrentsCommand";
import { ListLifecycleOrphansCommand, } from "./commands/ListLifecycleOrphansCommand";
import { MultipleBackendAbortMPUCommand, } from "./commands/MultipleBackendAbortMPUCommand";
import { MultipleBackendCompleteMPUCommand, } from "./commands/MultipleBackendCompleteMPUCommand";
import { MultipleBackendDeleteObjectCommand, } from "./commands/MultipleBackendDeleteObjectCommand";
import { MultipleBackendDeleteObjectTaggingCommand, } from "./commands/MultipleBackendDeleteObjectTaggingCommand";
import { MultipleBackendHeadObjectCommand, } from "./commands/MultipleBackendHeadObjectCommand";
import { MultipleBackendInitiateMPUCommand, } from "./commands/MultipleBackendInitiateMPUCommand";
import { MultipleBackendPutMPUPartCommand, } from "./commands/MultipleBackendPutMPUPartCommand";
import { MultipleBackendPutObjectCommand, } from "./commands/MultipleBackendPutObjectCommand";
import { MultipleBackendPutObjectTaggingCommand, } from "./commands/MultipleBackendPutObjectTaggingCommand";
import { PutBucketIndexesCommand, } from "./commands/PutBucketIndexesCommand";
import { PutDataCommand, } from "./commands/PutDataCommand";
import { PutMetadataCommand, } from "./commands/PutMetadataCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
const commands = {
    BatchDeleteCommand,
    DeleteBucketIndexesCommand,
    DeleteObjectFromExpirationCommand,
    GetBucketCseqCommand,
    GetBucketIndexesCommand,
    GetBucketMetadataCommand,
    GetMetadataCommand,
    GetObjectCommand,
    GetObjectListCommand,
    GetRaftBucketsCommand,
    GetRaftIdCommand,
    GetRaftLogCommand,
    ListLifecycleCurrentsCommand,
    ListLifecycleNonCurrentsCommand,
    ListLifecycleOrphansCommand,
    MultipleBackendAbortMPUCommand,
    MultipleBackendCompleteMPUCommand,
    MultipleBackendDeleteObjectCommand,
    MultipleBackendDeleteObjectTaggingCommand,
    MultipleBackendHeadObjectCommand,
    MultipleBackendInitiateMPUCommand,
    MultipleBackendPutMPUPartCommand,
    MultipleBackendPutObjectCommand,
    MultipleBackendPutObjectTaggingCommand,
    PutBucketIndexesCommand,
    PutDataCommand,
    PutMetadataCommand,
};
export class Cloudserver extends CloudserverClient {
}
createAggregatedClient(commands, Cloudserver);
