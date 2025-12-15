$version: "2.0"

namespace cloudserver.bucketquota

@http(method: "GET", uri: "/{Bucket}?quota=true")
@readonly
operation GetBucketQuota {
    input := {
        @required
        @httpLabel
        Bucket: String
    }
    output := {
        Name: String
        Quota: Long
    }
}
