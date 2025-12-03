$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/ingestion/pause/{Site}")
operation PauseIngestionSite {
    input: PauseIngestionSiteInput,
    output: PauseIngestionSiteOutput
}

structure PauseIngestionSiteInput {
    @required
    @httpLabel
    Site: String,
    
    @httpPayload
    Body: Blob
}

structure PauseIngestionSiteOutput {
    @httpPayload
    status: Document
}
