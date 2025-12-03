$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/ingestion/resume/{Site}")
operation ResumeIngestionSite {
    input: ResumeIngestionSiteInput,
    output: ResumeIngestionSiteOutput
}

structure ResumeIngestionSiteInput {
    @required
    @httpLabel
    Site: String,
    
    @httpPayload
    Body: Blob
}

structure ResumeIngestionSiteOutput {
    @httpPayload
    status: Document
}
