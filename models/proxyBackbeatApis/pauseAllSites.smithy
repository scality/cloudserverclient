$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/crr/pause")
operation PauseAllSites {
    input: PauseAllSitesInput,
    output: PauseAllSitesOutput
}

structure PauseAllSitesInput {
    @httpPayload
    Body: Blob
}

structure PauseAllSitesOutput {
    @httpPayload
    status: Document
}
