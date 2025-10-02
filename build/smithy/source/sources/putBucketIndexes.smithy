$version: "2.0"
namespace cloudserver.client

@http(method: "POST", uri: "/_/backbeat/index/{Bucket}?operation=add")
operation PutBucketIndexes {
    input: PutBucketIndexesInput,
    output: PutBucketIndexesOutput,
}

structure PutBucketIndexesInput {
    @httpLabel
    @required
    Bucket: String,
    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,
    
    @httpPayload
    Body: Blob,
}

structure PutBucketIndexesOutput {
    // Empty response structure
}
