$version: "2.0"

namespace cloudserver.backbeatRoutes

use aws.protocols#restJson1
use aws.auth#sigv4
use aws.api#service

@restJson1
@sigv4(name: "s3")
@service(sdkId: "CloudserverBackbeatRoutes")
service CloudserverBackbeatRoutes {
    version: "2017-07-01",
    operations: [
        BatchDelete,
        DeleteBucketIndexes,
        DeleteObjectFromExpiration,
        GetBucketCseq,
        GetBucketIndexes,
        GetBucketMetadata,
        GetMetadata,
        GetObject,
        GetObjectList,
        GetRaftBuckets,
        GetRaftId,
        GetRaftLog,
        ListLifecycleCurrents,
        ListLifecycleNonCurrents,
        ListLifecycleOrphans,
        MultipleBackendAbortMPU,
        MultipleBackendCompleteMPU,
        MultipleBackendDeleteObject,
        MultipleBackendDeleteObjectTagging,
        MultipleBackendHeadObject,
        MultipleBackendInitiateMPU,
        MultipleBackendPutMPUPart,
        MultipleBackendPutObject,
        MultipleBackendPutObjectTagging,
        PutBucketIndexes,
        PutData,
        PutMetadata,
    ]
}
