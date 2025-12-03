$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/crr/resume")
operation ResumeAllSites {
    input: ResumeAllSitesInput,
    output: ResumeAllSitesOutput
}

structure ResumeAllSitesInput {
    @httpPayload
    Body: Blob
}

structure ResumeAllSitesOutput {
    @httpPayload
    status: Document
}
