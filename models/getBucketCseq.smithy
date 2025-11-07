$version: "2.0"
namespace cloudserver.client

/// Retrieves bucket sequence information
@readonly
@http(method: "GET", uri: "/_/metadata/default/informations/{Bucket}")
operation GetBucketCseq {
    input: GetBucketCseqInput,
    output: GetBucketCseqOutput,
}

@input
structure GetBucketCseqInput {
    @httpLabel
    @required
    Bucket: String,

    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,
}

@output
structure GetBucketCseqOutput {
    @httpPayload
    CseqInfo: Document,
}