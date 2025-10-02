"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloudserver = void 0;
const CloudserverClient_1 = require("./CloudserverClient");
const BatchDeleteCommand_1 = require("./commands/BatchDeleteCommand");
const DeleteBucketIndexesCommand_1 = require("./commands/DeleteBucketIndexesCommand");
const DeleteObjectFromExpirationCommand_1 = require("./commands/DeleteObjectFromExpirationCommand");
const GetBucketCseqCommand_1 = require("./commands/GetBucketCseqCommand");
const GetBucketIndexesCommand_1 = require("./commands/GetBucketIndexesCommand");
const GetBucketMetadataCommand_1 = require("./commands/GetBucketMetadataCommand");
const GetMetadataCommand_1 = require("./commands/GetMetadataCommand");
const GetObjectCommand_1 = require("./commands/GetObjectCommand");
const GetObjectListCommand_1 = require("./commands/GetObjectListCommand");
const GetRaftBucketsCommand_1 = require("./commands/GetRaftBucketsCommand");
const GetRaftIdCommand_1 = require("./commands/GetRaftIdCommand");
const GetRaftLogCommand_1 = require("./commands/GetRaftLogCommand");
const ListLifecycleCurrentsCommand_1 = require("./commands/ListLifecycleCurrentsCommand");
const ListLifecycleNonCurrentsCommand_1 = require("./commands/ListLifecycleNonCurrentsCommand");
const ListLifecycleOrphansCommand_1 = require("./commands/ListLifecycleOrphansCommand");
const MultipleBackendAbortMPUCommand_1 = require("./commands/MultipleBackendAbortMPUCommand");
const MultipleBackendCompleteMPUCommand_1 = require("./commands/MultipleBackendCompleteMPUCommand");
const MultipleBackendDeleteObjectCommand_1 = require("./commands/MultipleBackendDeleteObjectCommand");
const MultipleBackendDeleteObjectTaggingCommand_1 = require("./commands/MultipleBackendDeleteObjectTaggingCommand");
const MultipleBackendHeadObjectCommand_1 = require("./commands/MultipleBackendHeadObjectCommand");
const MultipleBackendInitiateMPUCommand_1 = require("./commands/MultipleBackendInitiateMPUCommand");
const MultipleBackendPutMPUPartCommand_1 = require("./commands/MultipleBackendPutMPUPartCommand");
const MultipleBackendPutObjectCommand_1 = require("./commands/MultipleBackendPutObjectCommand");
const MultipleBackendPutObjectTaggingCommand_1 = require("./commands/MultipleBackendPutObjectTaggingCommand");
const PutBucketIndexesCommand_1 = require("./commands/PutBucketIndexesCommand");
const PutDataCommand_1 = require("./commands/PutDataCommand");
const PutMetadataCommand_1 = require("./commands/PutMetadataCommand");
const smithy_client_1 = require("@smithy/smithy-client");
const commands = {
    BatchDeleteCommand: BatchDeleteCommand_1.BatchDeleteCommand,
    DeleteBucketIndexesCommand: DeleteBucketIndexesCommand_1.DeleteBucketIndexesCommand,
    DeleteObjectFromExpirationCommand: DeleteObjectFromExpirationCommand_1.DeleteObjectFromExpirationCommand,
    GetBucketCseqCommand: GetBucketCseqCommand_1.GetBucketCseqCommand,
    GetBucketIndexesCommand: GetBucketIndexesCommand_1.GetBucketIndexesCommand,
    GetBucketMetadataCommand: GetBucketMetadataCommand_1.GetBucketMetadataCommand,
    GetMetadataCommand: GetMetadataCommand_1.GetMetadataCommand,
    GetObjectCommand: GetObjectCommand_1.GetObjectCommand,
    GetObjectListCommand: GetObjectListCommand_1.GetObjectListCommand,
    GetRaftBucketsCommand: GetRaftBucketsCommand_1.GetRaftBucketsCommand,
    GetRaftIdCommand: GetRaftIdCommand_1.GetRaftIdCommand,
    GetRaftLogCommand: GetRaftLogCommand_1.GetRaftLogCommand,
    ListLifecycleCurrentsCommand: ListLifecycleCurrentsCommand_1.ListLifecycleCurrentsCommand,
    ListLifecycleNonCurrentsCommand: ListLifecycleNonCurrentsCommand_1.ListLifecycleNonCurrentsCommand,
    ListLifecycleOrphansCommand: ListLifecycleOrphansCommand_1.ListLifecycleOrphansCommand,
    MultipleBackendAbortMPUCommand: MultipleBackendAbortMPUCommand_1.MultipleBackendAbortMPUCommand,
    MultipleBackendCompleteMPUCommand: MultipleBackendCompleteMPUCommand_1.MultipleBackendCompleteMPUCommand,
    MultipleBackendDeleteObjectCommand: MultipleBackendDeleteObjectCommand_1.MultipleBackendDeleteObjectCommand,
    MultipleBackendDeleteObjectTaggingCommand: MultipleBackendDeleteObjectTaggingCommand_1.MultipleBackendDeleteObjectTaggingCommand,
    MultipleBackendHeadObjectCommand: MultipleBackendHeadObjectCommand_1.MultipleBackendHeadObjectCommand,
    MultipleBackendInitiateMPUCommand: MultipleBackendInitiateMPUCommand_1.MultipleBackendInitiateMPUCommand,
    MultipleBackendPutMPUPartCommand: MultipleBackendPutMPUPartCommand_1.MultipleBackendPutMPUPartCommand,
    MultipleBackendPutObjectCommand: MultipleBackendPutObjectCommand_1.MultipleBackendPutObjectCommand,
    MultipleBackendPutObjectTaggingCommand: MultipleBackendPutObjectTaggingCommand_1.MultipleBackendPutObjectTaggingCommand,
    PutBucketIndexesCommand: PutBucketIndexesCommand_1.PutBucketIndexesCommand,
    PutDataCommand: PutDataCommand_1.PutDataCommand,
    PutMetadataCommand: PutMetadataCommand_1.PutMetadataCommand,
};
class Cloudserver extends CloudserverClient_1.CloudserverClient {
}
exports.Cloudserver = Cloudserver;
(0, smithy_client_1.createAggregatedClient)(commands, Cloudserver);
