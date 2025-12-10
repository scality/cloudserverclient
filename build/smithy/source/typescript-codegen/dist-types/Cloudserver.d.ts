import { CloudserverClient } from "./CloudserverClient";
import { BatchDeleteCommandInput, BatchDeleteCommandOutput } from "./commands/BatchDeleteCommand";
import { DeleteBucketIndexesCommandInput, DeleteBucketIndexesCommandOutput } from "./commands/DeleteBucketIndexesCommand";
import { DeleteObjectFromExpirationCommandInput, DeleteObjectFromExpirationCommandOutput } from "./commands/DeleteObjectFromExpirationCommand";
import { GetBucketCseqCommandInput, GetBucketCseqCommandOutput } from "./commands/GetBucketCseqCommand";
import { GetBucketIndexesCommandInput, GetBucketIndexesCommandOutput } from "./commands/GetBucketIndexesCommand";
import { GetBucketMetadataCommandInput, GetBucketMetadataCommandOutput } from "./commands/GetBucketMetadataCommand";
import { GetMetadataCommandInput, GetMetadataCommandOutput } from "./commands/GetMetadataCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand";
import { GetObjectListCommandInput, GetObjectListCommandOutput } from "./commands/GetObjectListCommand";
import { GetRaftBucketsCommandInput, GetRaftBucketsCommandOutput } from "./commands/GetRaftBucketsCommand";
import { GetRaftIdCommandInput, GetRaftIdCommandOutput } from "./commands/GetRaftIdCommand";
import { GetRaftLogCommandInput, GetRaftLogCommandOutput } from "./commands/GetRaftLogCommand";
import { ListLifecycleCurrentsCommandInput, ListLifecycleCurrentsCommandOutput } from "./commands/ListLifecycleCurrentsCommand";
import { ListLifecycleNonCurrentsCommandInput, ListLifecycleNonCurrentsCommandOutput } from "./commands/ListLifecycleNonCurrentsCommand";
import { ListLifecycleOrphansCommandInput, ListLifecycleOrphansCommandOutput } from "./commands/ListLifecycleOrphansCommand";
import { MultipleBackendAbortMPUCommandInput, MultipleBackendAbortMPUCommandOutput } from "./commands/MultipleBackendAbortMPUCommand";
import { MultipleBackendCompleteMPUCommandInput, MultipleBackendCompleteMPUCommandOutput } from "./commands/MultipleBackendCompleteMPUCommand";
import { MultipleBackendDeleteObjectCommandInput, MultipleBackendDeleteObjectCommandOutput } from "./commands/MultipleBackendDeleteObjectCommand";
import { MultipleBackendDeleteObjectTaggingCommandInput, MultipleBackendDeleteObjectTaggingCommandOutput } from "./commands/MultipleBackendDeleteObjectTaggingCommand";
import { MultipleBackendHeadObjectCommandInput, MultipleBackendHeadObjectCommandOutput } from "./commands/MultipleBackendHeadObjectCommand";
import { MultipleBackendInitiateMPUCommandInput, MultipleBackendInitiateMPUCommandOutput } from "./commands/MultipleBackendInitiateMPUCommand";
import { MultipleBackendPutMPUPartCommandInput, MultipleBackendPutMPUPartCommandOutput } from "./commands/MultipleBackendPutMPUPartCommand";
import { MultipleBackendPutObjectCommandInput, MultipleBackendPutObjectCommandOutput } from "./commands/MultipleBackendPutObjectCommand";
import { MultipleBackendPutObjectTaggingCommandInput, MultipleBackendPutObjectTaggingCommandOutput } from "./commands/MultipleBackendPutObjectTaggingCommand";
import { PutBucketIndexesCommandInput, PutBucketIndexesCommandOutput } from "./commands/PutBucketIndexesCommand";
import { PutDataCommandInput, PutDataCommandOutput } from "./commands/PutDataCommand";
import { PutMetadataCommandInput, PutMetadataCommandOutput } from "./commands/PutMetadataCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";
export interface Cloudserver {
    /**
     * @see {@link BatchDeleteCommand}
     */
    batchDelete(args: BatchDeleteCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteCommandOutput>;
    batchDelete(args: BatchDeleteCommandInput, cb: (err: any, data?: BatchDeleteCommandOutput) => void): void;
    batchDelete(args: BatchDeleteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteCommandOutput) => void): void;
    /**
     * @see {@link DeleteBucketIndexesCommand}
     */
    deleteBucketIndexes(args: DeleteBucketIndexesCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBucketIndexesCommandOutput>;
    deleteBucketIndexes(args: DeleteBucketIndexesCommandInput, cb: (err: any, data?: DeleteBucketIndexesCommandOutput) => void): void;
    deleteBucketIndexes(args: DeleteBucketIndexesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBucketIndexesCommandOutput) => void): void;
    /**
     * @see {@link DeleteObjectFromExpirationCommand}
     */
    deleteObjectFromExpiration(args: DeleteObjectFromExpirationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteObjectFromExpirationCommandOutput>;
    deleteObjectFromExpiration(args: DeleteObjectFromExpirationCommandInput, cb: (err: any, data?: DeleteObjectFromExpirationCommandOutput) => void): void;
    deleteObjectFromExpiration(args: DeleteObjectFromExpirationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteObjectFromExpirationCommandOutput) => void): void;
    /**
     * @see {@link GetBucketCseqCommand}
     */
    getBucketCseq(args: GetBucketCseqCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketCseqCommandOutput>;
    getBucketCseq(args: GetBucketCseqCommandInput, cb: (err: any, data?: GetBucketCseqCommandOutput) => void): void;
    getBucketCseq(args: GetBucketCseqCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBucketCseqCommandOutput) => void): void;
    /**
     * @see {@link GetBucketIndexesCommand}
     */
    getBucketIndexes(args: GetBucketIndexesCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketIndexesCommandOutput>;
    getBucketIndexes(args: GetBucketIndexesCommandInput, cb: (err: any, data?: GetBucketIndexesCommandOutput) => void): void;
    getBucketIndexes(args: GetBucketIndexesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBucketIndexesCommandOutput) => void): void;
    /**
     * @see {@link GetBucketMetadataCommand}
     */
    getBucketMetadata(args: GetBucketMetadataCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketMetadataCommandOutput>;
    getBucketMetadata(args: GetBucketMetadataCommandInput, cb: (err: any, data?: GetBucketMetadataCommandOutput) => void): void;
    getBucketMetadata(args: GetBucketMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBucketMetadataCommandOutput) => void): void;
    /**
     * @see {@link GetMetadataCommand}
     */
    getMetadata(args: GetMetadataCommandInput, options?: __HttpHandlerOptions): Promise<GetMetadataCommandOutput>;
    getMetadata(args: GetMetadataCommandInput, cb: (err: any, data?: GetMetadataCommandOutput) => void): void;
    getMetadata(args: GetMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMetadataCommandOutput) => void): void;
    /**
     * @see {@link GetObjectCommand}
     */
    getObject(args: GetObjectCommandInput, options?: __HttpHandlerOptions): Promise<GetObjectCommandOutput>;
    getObject(args: GetObjectCommandInput, cb: (err: any, data?: GetObjectCommandOutput) => void): void;
    getObject(args: GetObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetObjectCommandOutput) => void): void;
    /**
     * @see {@link GetObjectListCommand}
     */
    getObjectList(args: GetObjectListCommandInput, options?: __HttpHandlerOptions): Promise<GetObjectListCommandOutput>;
    getObjectList(args: GetObjectListCommandInput, cb: (err: any, data?: GetObjectListCommandOutput) => void): void;
    getObjectList(args: GetObjectListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetObjectListCommandOutput) => void): void;
    /**
     * @see {@link GetRaftBucketsCommand}
     */
    getRaftBuckets(args: GetRaftBucketsCommandInput, options?: __HttpHandlerOptions): Promise<GetRaftBucketsCommandOutput>;
    getRaftBuckets(args: GetRaftBucketsCommandInput, cb: (err: any, data?: GetRaftBucketsCommandOutput) => void): void;
    getRaftBuckets(args: GetRaftBucketsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRaftBucketsCommandOutput) => void): void;
    /**
     * @see {@link GetRaftIdCommand}
     */
    getRaftId(args: GetRaftIdCommandInput, options?: __HttpHandlerOptions): Promise<GetRaftIdCommandOutput>;
    getRaftId(args: GetRaftIdCommandInput, cb: (err: any, data?: GetRaftIdCommandOutput) => void): void;
    getRaftId(args: GetRaftIdCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRaftIdCommandOutput) => void): void;
    /**
     * @see {@link GetRaftLogCommand}
     */
    getRaftLog(args: GetRaftLogCommandInput, options?: __HttpHandlerOptions): Promise<GetRaftLogCommandOutput>;
    getRaftLog(args: GetRaftLogCommandInput, cb: (err: any, data?: GetRaftLogCommandOutput) => void): void;
    getRaftLog(args: GetRaftLogCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRaftLogCommandOutput) => void): void;
    /**
     * @see {@link ListLifecycleCurrentsCommand}
     */
    listLifecycleCurrents(args: ListLifecycleCurrentsCommandInput, options?: __HttpHandlerOptions): Promise<ListLifecycleCurrentsCommandOutput>;
    listLifecycleCurrents(args: ListLifecycleCurrentsCommandInput, cb: (err: any, data?: ListLifecycleCurrentsCommandOutput) => void): void;
    listLifecycleCurrents(args: ListLifecycleCurrentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLifecycleCurrentsCommandOutput) => void): void;
    /**
     * @see {@link ListLifecycleNonCurrentsCommand}
     */
    listLifecycleNonCurrents(args: ListLifecycleNonCurrentsCommandInput, options?: __HttpHandlerOptions): Promise<ListLifecycleNonCurrentsCommandOutput>;
    listLifecycleNonCurrents(args: ListLifecycleNonCurrentsCommandInput, cb: (err: any, data?: ListLifecycleNonCurrentsCommandOutput) => void): void;
    listLifecycleNonCurrents(args: ListLifecycleNonCurrentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLifecycleNonCurrentsCommandOutput) => void): void;
    /**
     * @see {@link ListLifecycleOrphansCommand}
     */
    listLifecycleOrphans(args: ListLifecycleOrphansCommandInput, options?: __HttpHandlerOptions): Promise<ListLifecycleOrphansCommandOutput>;
    listLifecycleOrphans(args: ListLifecycleOrphansCommandInput, cb: (err: any, data?: ListLifecycleOrphansCommandOutput) => void): void;
    listLifecycleOrphans(args: ListLifecycleOrphansCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLifecycleOrphansCommandOutput) => void): void;
    /**
     * @see {@link MultipleBackendAbortMPUCommand}
     */
    multipleBackendAbortMPU(args: MultipleBackendAbortMPUCommandInput, options?: __HttpHandlerOptions): Promise<MultipleBackendAbortMPUCommandOutput>;
    multipleBackendAbortMPU(args: MultipleBackendAbortMPUCommandInput, cb: (err: any, data?: MultipleBackendAbortMPUCommandOutput) => void): void;
    multipleBackendAbortMPU(args: MultipleBackendAbortMPUCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MultipleBackendAbortMPUCommandOutput) => void): void;
    /**
     * @see {@link MultipleBackendCompleteMPUCommand}
     */
    multipleBackendCompleteMPU(args: MultipleBackendCompleteMPUCommandInput, options?: __HttpHandlerOptions): Promise<MultipleBackendCompleteMPUCommandOutput>;
    multipleBackendCompleteMPU(args: MultipleBackendCompleteMPUCommandInput, cb: (err: any, data?: MultipleBackendCompleteMPUCommandOutput) => void): void;
    multipleBackendCompleteMPU(args: MultipleBackendCompleteMPUCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MultipleBackendCompleteMPUCommandOutput) => void): void;
    /**
     * @see {@link MultipleBackendDeleteObjectCommand}
     */
    multipleBackendDeleteObject(args: MultipleBackendDeleteObjectCommandInput, options?: __HttpHandlerOptions): Promise<MultipleBackendDeleteObjectCommandOutput>;
    multipleBackendDeleteObject(args: MultipleBackendDeleteObjectCommandInput, cb: (err: any, data?: MultipleBackendDeleteObjectCommandOutput) => void): void;
    multipleBackendDeleteObject(args: MultipleBackendDeleteObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MultipleBackendDeleteObjectCommandOutput) => void): void;
    /**
     * @see {@link MultipleBackendDeleteObjectTaggingCommand}
     */
    multipleBackendDeleteObjectTagging(args: MultipleBackendDeleteObjectTaggingCommandInput, options?: __HttpHandlerOptions): Promise<MultipleBackendDeleteObjectTaggingCommandOutput>;
    multipleBackendDeleteObjectTagging(args: MultipleBackendDeleteObjectTaggingCommandInput, cb: (err: any, data?: MultipleBackendDeleteObjectTaggingCommandOutput) => void): void;
    multipleBackendDeleteObjectTagging(args: MultipleBackendDeleteObjectTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MultipleBackendDeleteObjectTaggingCommandOutput) => void): void;
    /**
     * @see {@link MultipleBackendHeadObjectCommand}
     */
    multipleBackendHeadObject(args: MultipleBackendHeadObjectCommandInput, options?: __HttpHandlerOptions): Promise<MultipleBackendHeadObjectCommandOutput>;
    multipleBackendHeadObject(args: MultipleBackendHeadObjectCommandInput, cb: (err: any, data?: MultipleBackendHeadObjectCommandOutput) => void): void;
    multipleBackendHeadObject(args: MultipleBackendHeadObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MultipleBackendHeadObjectCommandOutput) => void): void;
    /**
     * @see {@link MultipleBackendInitiateMPUCommand}
     */
    multipleBackendInitiateMPU(args: MultipleBackendInitiateMPUCommandInput, options?: __HttpHandlerOptions): Promise<MultipleBackendInitiateMPUCommandOutput>;
    multipleBackendInitiateMPU(args: MultipleBackendInitiateMPUCommandInput, cb: (err: any, data?: MultipleBackendInitiateMPUCommandOutput) => void): void;
    multipleBackendInitiateMPU(args: MultipleBackendInitiateMPUCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MultipleBackendInitiateMPUCommandOutput) => void): void;
    /**
     * @see {@link MultipleBackendPutMPUPartCommand}
     */
    multipleBackendPutMPUPart(args: MultipleBackendPutMPUPartCommandInput, options?: __HttpHandlerOptions): Promise<MultipleBackendPutMPUPartCommandOutput>;
    multipleBackendPutMPUPart(args: MultipleBackendPutMPUPartCommandInput, cb: (err: any, data?: MultipleBackendPutMPUPartCommandOutput) => void): void;
    multipleBackendPutMPUPart(args: MultipleBackendPutMPUPartCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MultipleBackendPutMPUPartCommandOutput) => void): void;
    /**
     * @see {@link MultipleBackendPutObjectCommand}
     */
    multipleBackendPutObject(args: MultipleBackendPutObjectCommandInput, options?: __HttpHandlerOptions): Promise<MultipleBackendPutObjectCommandOutput>;
    multipleBackendPutObject(args: MultipleBackendPutObjectCommandInput, cb: (err: any, data?: MultipleBackendPutObjectCommandOutput) => void): void;
    multipleBackendPutObject(args: MultipleBackendPutObjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MultipleBackendPutObjectCommandOutput) => void): void;
    /**
     * @see {@link MultipleBackendPutObjectTaggingCommand}
     */
    multipleBackendPutObjectTagging(args: MultipleBackendPutObjectTaggingCommandInput, options?: __HttpHandlerOptions): Promise<MultipleBackendPutObjectTaggingCommandOutput>;
    multipleBackendPutObjectTagging(args: MultipleBackendPutObjectTaggingCommandInput, cb: (err: any, data?: MultipleBackendPutObjectTaggingCommandOutput) => void): void;
    multipleBackendPutObjectTagging(args: MultipleBackendPutObjectTaggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MultipleBackendPutObjectTaggingCommandOutput) => void): void;
    /**
     * @see {@link PutBucketIndexesCommand}
     */
    putBucketIndexes(args: PutBucketIndexesCommandInput, options?: __HttpHandlerOptions): Promise<PutBucketIndexesCommandOutput>;
    putBucketIndexes(args: PutBucketIndexesCommandInput, cb: (err: any, data?: PutBucketIndexesCommandOutput) => void): void;
    putBucketIndexes(args: PutBucketIndexesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutBucketIndexesCommandOutput) => void): void;
    /**
     * @see {@link PutDataCommand}
     */
    putData(args: PutDataCommandInput, options?: __HttpHandlerOptions): Promise<PutDataCommandOutput>;
    putData(args: PutDataCommandInput, cb: (err: any, data?: PutDataCommandOutput) => void): void;
    putData(args: PutDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDataCommandOutput) => void): void;
    /**
     * @see {@link PutMetadataCommand}
     */
    putMetadata(args: PutMetadataCommandInput, options?: __HttpHandlerOptions): Promise<PutMetadataCommandOutput>;
    putMetadata(args: PutMetadataCommandInput, cb: (err: any, data?: PutMetadataCommandOutput) => void): void;
    putMetadata(args: PutMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutMetadataCommandOutput) => void): void;
}
/**
 * @public
 */
export declare class Cloudserver extends CloudserverClient implements Cloudserver {
}
