$version: "2.0"
namespace cloudserver.bucketquota

@http(method: "PUT", uri: "/{Bucket}?quota=true")
@idempotent
operation UpdateBucketQuota {
    input: QuotaConfiguration
    output: UpdateBucketQuotaOutput
}

structure QuotaConfiguration {
    @required
    @httpLabel
    Bucket: String

    @required
    Quota: Long
}

structure UpdateBucketQuotaOutput {
    @httpPayload
    body: String
}