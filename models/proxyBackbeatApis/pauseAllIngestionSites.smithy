$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/ingestion/pause")
operation PauseAllIngestionSites {
    input: PauseAllIngestionSitesInput,
    output: PauseAllIngestionSitesOutput
}

structure PauseAllIngestionSitesInput {
    @httpPayload
    Body: Blob
}

structure PauseAllIngestionSitesOutput {
    @httpPayload
    status: Document
}
