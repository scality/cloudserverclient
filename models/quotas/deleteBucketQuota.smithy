$version: "2.0"

namespace cloudserver.bucketquota

@http(method: "DELETE", uri: "/{Bucket}?quota=true")
@idempotent
operation DeleteBucketQuota {
    input := {
        @required
        @httpLabel
        Bucket: String
    }
    output := {}
}
