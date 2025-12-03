$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/ingestion/resume")
operation ResumeAllIngestionSites {
    input: ResumeAllIngestionSitesInput,
    output: ResumeAllIngestionSitesOutput
}

structure ResumeAllIngestionSitesInput {
    @httpPayload
    Body: Blob
}

structure ResumeAllIngestionSitesOutput {
    @httpPayload
    status: Document
}
