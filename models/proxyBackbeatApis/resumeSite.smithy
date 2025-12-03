$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/crr/resume/{Site}")
operation ResumeSite {
    input: ResumeSiteInput,
    output: ResumeSiteOutput
}

structure ResumeSiteInput {
    @required
    @httpLabel
    Site: String,
    
    @httpPayload
    Body: Blob
}

structure ResumeSiteOutput {
    @httpPayload
    status: Document
}
