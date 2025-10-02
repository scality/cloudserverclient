$version: "2.0"

namespace cloudserver.client

use aws.protocols#restJson1
use aws.auth#sigv4
use aws.api#service

@restJson1
@sigv4(name: "s3")
@service(sdkId: "cloudserver")
service cloudserver {
    version: "2017-07-01",
    operations: [
        PutData,
        GetObject,
        GetMetadata,
        PutMetadata,
        GetObjectList,
        GetBucketMetadata,
        BatchDelete,
        PutBucketIndexes,
        GetBucketIndexes,
        DeleteBucketIndexes,
        ListLifecycleCurrents,
        ListLifecycleNonCurrents,
        ListLifecycleOrphans,
        DeleteObjectFromExpiration,
        GetRaftId,
        GetRaftLog,
        GetRaftBuckets,
        GetBucketCseq,
        MultipleBackendPutObject,
        MultipleBackendHeadObject,
        MultipleBackendDeleteObject,
        MultipleBackendInitiateMPU,
        MultipleBackendPutMPUPart,
        MultipleBackendCompleteMPU,
        MultipleBackendAbortMPU,
        MultipleBackendPutObjectTagging,
        MultipleBackendDeleteObjectTagging,
    ]
}
