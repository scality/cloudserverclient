$version: "2.0"
namespace cloudserver.client

@http(method: "POST", uri: "/_/backbeat/index/{Bucket}?operation=delete")
operation DeleteBucketIndexes {
    input: DeleteBucketIndexesInput,
    output: DeleteBucketIndexesOutput
}

structure DeleteBucketIndexesInput {
    @required
    @httpLabel
    Bucket: String,
    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,
    
    @httpPayload
    Body: Blob
}

structure DeleteBucketIndexesOutput {
    // Empty response body
}
