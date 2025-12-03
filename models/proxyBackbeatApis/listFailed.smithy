$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@readonly
@http(method: "GET", uri: "/_/backbeat/api/crr/failed")
operation ListFailed {
    input: ListFailedInput,
    output: ListFailedOutput
}

structure ListFailedInput {
    @httpQuery("marker")
    Marker: String,
    
    @httpQuery("sitename")
    Sitename: String
}

structure ListFailedOutput {
    IsTruncated: Boolean,
    
    NextMarker: String,
    
    Versions: FailedObjectVersions
}

list FailedObjectVersions {
    member: FailedObjectVersion
}
