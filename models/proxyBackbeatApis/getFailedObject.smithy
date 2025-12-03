$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@readonly
@http(method: "GET", uri: "/_/backbeat/api/crr/failed/{Bucket}/{Key+}")
operation GetFailedObject {
    input: GetFailedObjectInput,
    output: GetFailedObjectOutput
}

structure GetFailedObjectInput {
    @required
    @httpLabel
    Bucket: String,
    
    @required
    @httpLabel
    Key: String,
    
    @required
    @httpQuery("versionId")
    VersionId: String
}

structure GetFailedObjectOutput {
    IsTruncated: Boolean,
    
    Versions: FailedObjectVersions
}
