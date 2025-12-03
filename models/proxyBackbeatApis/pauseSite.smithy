$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/crr/pause/{Site}")
operation PauseSite {
    input: PauseSiteInput,
    output: PauseSiteOutput
}

structure PauseSiteInput {
    @required
    @httpLabel
    Site: String,
    
    @httpPayload
    Body: Blob
}

structure PauseSiteOutput {
    @httpPayload
    status: Document
}
