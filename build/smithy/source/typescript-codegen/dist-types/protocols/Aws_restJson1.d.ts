import { BatchDeleteCommandInput, BatchDeleteCommandOutput } from "../commands/BatchDeleteCommand";
import { DeleteBucketIndexesCommandInput, DeleteBucketIndexesCommandOutput } from "../commands/DeleteBucketIndexesCommand";
import { DeleteObjectFromExpirationCommandInput, DeleteObjectFromExpirationCommandOutput } from "../commands/DeleteObjectFromExpirationCommand";
import { GetBucketCseqCommandInput, GetBucketCseqCommandOutput } from "../commands/GetBucketCseqCommand";
import { GetBucketIndexesCommandInput, GetBucketIndexesCommandOutput } from "../commands/GetBucketIndexesCommand";
import { GetBucketMetadataCommandInput, GetBucketMetadataCommandOutput } from "../commands/GetBucketMetadataCommand";
import { GetMetadataCommandInput, GetMetadataCommandOutput } from "../commands/GetMetadataCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "../commands/GetObjectCommand";
import { GetObjectListCommandInput, GetObjectListCommandOutput } from "../commands/GetObjectListCommand";
import { GetRaftBucketsCommandInput, GetRaftBucketsCommandOutput } from "../commands/GetRaftBucketsCommand";
import { GetRaftIdCommandInput, GetRaftIdCommandOutput } from "../commands/GetRaftIdCommand";
import { GetRaftLogCommandInput, GetRaftLogCommandOutput } from "../commands/GetRaftLogCommand";
import { ListLifecycleCurrentsCommandInput, ListLifecycleCurrentsCommandOutput } from "../commands/ListLifecycleCurrentsCommand";
import { ListLifecycleNonCurrentsCommandInput, ListLifecycleNonCurrentsCommandOutput } from "../commands/ListLifecycleNonCurrentsCommand";
import { ListLifecycleOrphansCommandInput, ListLifecycleOrphansCommandOutput } from "../commands/ListLifecycleOrphansCommand";
import { MultipleBackendAbortMPUCommandInput, MultipleBackendAbortMPUCommandOutput } from "../commands/MultipleBackendAbortMPUCommand";
import { MultipleBackendCompleteMPUCommandInput, MultipleBackendCompleteMPUCommandOutput } from "../commands/MultipleBackendCompleteMPUCommand";
import { MultipleBackendDeleteObjectCommandInput, MultipleBackendDeleteObjectCommandOutput } from "../commands/MultipleBackendDeleteObjectCommand";
import { MultipleBackendDeleteObjectTaggingCommandInput, MultipleBackendDeleteObjectTaggingCommandOutput } from "../commands/MultipleBackendDeleteObjectTaggingCommand";
import { MultipleBackendHeadObjectCommandInput, MultipleBackendHeadObjectCommandOutput } from "../commands/MultipleBackendHeadObjectCommand";
import { MultipleBackendInitiateMPUCommandInput, MultipleBackendInitiateMPUCommandOutput } from "../commands/MultipleBackendInitiateMPUCommand";
import { MultipleBackendPutMPUPartCommandInput, MultipleBackendPutMPUPartCommandOutput } from "../commands/MultipleBackendPutMPUPartCommand";
import { MultipleBackendPutObjectCommandInput, MultipleBackendPutObjectCommandOutput } from "../commands/MultipleBackendPutObjectCommand";
import { MultipleBackendPutObjectTaggingCommandInput, MultipleBackendPutObjectTaggingCommandOutput } from "../commands/MultipleBackendPutObjectTaggingCommand";
import { PutBucketIndexesCommandInput, PutBucketIndexesCommandOutput } from "../commands/PutBucketIndexesCommand";
import { PutDataCommandInput, PutDataCommandOutput } from "../commands/PutDataCommand";
import { PutMetadataCommandInput, PutMetadataCommandOutput } from "../commands/PutMetadataCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SdkStreamSerdeContext as __SdkStreamSerdeContext, SerdeContext as __SerdeContext } from "@smithy/types";
/**
 * serializeAws_restJson1BatchDeleteCommand
 */
export declare const se_BatchDeleteCommand: (input: BatchDeleteCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1DeleteBucketIndexesCommand
 */
export declare const se_DeleteBucketIndexesCommand: (input: DeleteBucketIndexesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1DeleteObjectFromExpirationCommand
 */
export declare const se_DeleteObjectFromExpirationCommand: (input: DeleteObjectFromExpirationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetBucketCseqCommand
 */
export declare const se_GetBucketCseqCommand: (input: GetBucketCseqCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetBucketIndexesCommand
 */
export declare const se_GetBucketIndexesCommand: (input: GetBucketIndexesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetBucketMetadataCommand
 */
export declare const se_GetBucketMetadataCommand: (input: GetBucketMetadataCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetMetadataCommand
 */
export declare const se_GetMetadataCommand: (input: GetMetadataCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetObjectCommand
 */
export declare const se_GetObjectCommand: (input: GetObjectCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetObjectListCommand
 */
export declare const se_GetObjectListCommand: (input: GetObjectListCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetRaftBucketsCommand
 */
export declare const se_GetRaftBucketsCommand: (input: GetRaftBucketsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetRaftIdCommand
 */
export declare const se_GetRaftIdCommand: (input: GetRaftIdCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1GetRaftLogCommand
 */
export declare const se_GetRaftLogCommand: (input: GetRaftLogCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1ListLifecycleCurrentsCommand
 */
export declare const se_ListLifecycleCurrentsCommand: (input: ListLifecycleCurrentsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1ListLifecycleNonCurrentsCommand
 */
export declare const se_ListLifecycleNonCurrentsCommand: (input: ListLifecycleNonCurrentsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1ListLifecycleOrphansCommand
 */
export declare const se_ListLifecycleOrphansCommand: (input: ListLifecycleOrphansCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1MultipleBackendAbortMPUCommand
 */
export declare const se_MultipleBackendAbortMPUCommand: (input: MultipleBackendAbortMPUCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1MultipleBackendCompleteMPUCommand
 */
export declare const se_MultipleBackendCompleteMPUCommand: (input: MultipleBackendCompleteMPUCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1MultipleBackendDeleteObjectCommand
 */
export declare const se_MultipleBackendDeleteObjectCommand: (input: MultipleBackendDeleteObjectCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1MultipleBackendDeleteObjectTaggingCommand
 */
export declare const se_MultipleBackendDeleteObjectTaggingCommand: (input: MultipleBackendDeleteObjectTaggingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1MultipleBackendHeadObjectCommand
 */
export declare const se_MultipleBackendHeadObjectCommand: (input: MultipleBackendHeadObjectCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1MultipleBackendInitiateMPUCommand
 */
export declare const se_MultipleBackendInitiateMPUCommand: (input: MultipleBackendInitiateMPUCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1MultipleBackendPutMPUPartCommand
 */
export declare const se_MultipleBackendPutMPUPartCommand: (input: MultipleBackendPutMPUPartCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1MultipleBackendPutObjectCommand
 */
export declare const se_MultipleBackendPutObjectCommand: (input: MultipleBackendPutObjectCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1MultipleBackendPutObjectTaggingCommand
 */
export declare const se_MultipleBackendPutObjectTaggingCommand: (input: MultipleBackendPutObjectTaggingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1PutBucketIndexesCommand
 */
export declare const se_PutBucketIndexesCommand: (input: PutBucketIndexesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1PutDataCommand
 */
export declare const se_PutDataCommand: (input: PutDataCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1PutMetadataCommand
 */
export declare const se_PutMetadataCommand: (input: PutMetadataCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * deserializeAws_restJson1BatchDeleteCommand
 */
export declare const de_BatchDeleteCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchDeleteCommandOutput>;
/**
 * deserializeAws_restJson1DeleteBucketIndexesCommand
 */
export declare const de_DeleteBucketIndexesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteBucketIndexesCommandOutput>;
/**
 * deserializeAws_restJson1DeleteObjectFromExpirationCommand
 */
export declare const de_DeleteObjectFromExpirationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteObjectFromExpirationCommandOutput>;
/**
 * deserializeAws_restJson1GetBucketCseqCommand
 */
export declare const de_GetBucketCseqCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetBucketCseqCommandOutput>;
/**
 * deserializeAws_restJson1GetBucketIndexesCommand
 */
export declare const de_GetBucketIndexesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetBucketIndexesCommandOutput>;
/**
 * deserializeAws_restJson1GetBucketMetadataCommand
 */
export declare const de_GetBucketMetadataCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetBucketMetadataCommandOutput>;
/**
 * deserializeAws_restJson1GetMetadataCommand
 */
export declare const de_GetMetadataCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMetadataCommandOutput>;
/**
 * deserializeAws_restJson1GetObjectCommand
 */
export declare const de_GetObjectCommand: (output: __HttpResponse, context: __SerdeContext & __SdkStreamSerdeContext) => Promise<GetObjectCommandOutput>;
/**
 * deserializeAws_restJson1GetObjectListCommand
 */
export declare const de_GetObjectListCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetObjectListCommandOutput>;
/**
 * deserializeAws_restJson1GetRaftBucketsCommand
 */
export declare const de_GetRaftBucketsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetRaftBucketsCommandOutput>;
/**
 * deserializeAws_restJson1GetRaftIdCommand
 */
export declare const de_GetRaftIdCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetRaftIdCommandOutput>;
/**
 * deserializeAws_restJson1GetRaftLogCommand
 */
export declare const de_GetRaftLogCommand: (output: __HttpResponse, context: __SerdeContext & __SdkStreamSerdeContext) => Promise<GetRaftLogCommandOutput>;
/**
 * deserializeAws_restJson1ListLifecycleCurrentsCommand
 */
export declare const de_ListLifecycleCurrentsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLifecycleCurrentsCommandOutput>;
/**
 * deserializeAws_restJson1ListLifecycleNonCurrentsCommand
 */
export declare const de_ListLifecycleNonCurrentsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLifecycleNonCurrentsCommandOutput>;
/**
 * deserializeAws_restJson1ListLifecycleOrphansCommand
 */
export declare const de_ListLifecycleOrphansCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLifecycleOrphansCommandOutput>;
/**
 * deserializeAws_restJson1MultipleBackendAbortMPUCommand
 */
export declare const de_MultipleBackendAbortMPUCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MultipleBackendAbortMPUCommandOutput>;
/**
 * deserializeAws_restJson1MultipleBackendCompleteMPUCommand
 */
export declare const de_MultipleBackendCompleteMPUCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MultipleBackendCompleteMPUCommandOutput>;
/**
 * deserializeAws_restJson1MultipleBackendDeleteObjectCommand
 */
export declare const de_MultipleBackendDeleteObjectCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MultipleBackendDeleteObjectCommandOutput>;
/**
 * deserializeAws_restJson1MultipleBackendDeleteObjectTaggingCommand
 */
export declare const de_MultipleBackendDeleteObjectTaggingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MultipleBackendDeleteObjectTaggingCommandOutput>;
/**
 * deserializeAws_restJson1MultipleBackendHeadObjectCommand
 */
export declare const de_MultipleBackendHeadObjectCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MultipleBackendHeadObjectCommandOutput>;
/**
 * deserializeAws_restJson1MultipleBackendInitiateMPUCommand
 */
export declare const de_MultipleBackendInitiateMPUCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MultipleBackendInitiateMPUCommandOutput>;
/**
 * deserializeAws_restJson1MultipleBackendPutMPUPartCommand
 */
export declare const de_MultipleBackendPutMPUPartCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MultipleBackendPutMPUPartCommandOutput>;
/**
 * deserializeAws_restJson1MultipleBackendPutObjectCommand
 */
export declare const de_MultipleBackendPutObjectCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MultipleBackendPutObjectCommandOutput>;
/**
 * deserializeAws_restJson1MultipleBackendPutObjectTaggingCommand
 */
export declare const de_MultipleBackendPutObjectTaggingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MultipleBackendPutObjectTaggingCommandOutput>;
/**
 * deserializeAws_restJson1PutBucketIndexesCommand
 */
export declare const de_PutBucketIndexesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutBucketIndexesCommandOutput>;
/**
 * deserializeAws_restJson1PutDataCommand
 */
export declare const de_PutDataCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutDataCommandOutput>;
/**
 * deserializeAws_restJson1PutMetadataCommand
 */
export declare const de_PutMetadataCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutMetadataCommandOutput>;
