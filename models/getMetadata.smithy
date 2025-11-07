$version: "2.0"
namespace cloudserver.client

@http(method: "GET", uri: "/_/backbeat/metadata/{Bucket}/{Key+}")
@readonly
operation GetMetadata {
    input: GetMetadataInput,
    output: GetMetadataOutput
}

structure GetMetadataInput {
    @required
    @httpLabel
    Bucket: String,
    
    @required
    @httpLabel
    Key: String,
    
    @httpQuery("versionId")
    VersionId: String,
    
    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String
}

structure GetMetadataOutput {
    Body: String
}