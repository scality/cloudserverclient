$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/crr/resume/{Site}/schedule")
operation ScheduleSiteResume {
    input: ScheduleSiteResumeInput,
    output: ScheduleSiteResumeOutput
}

structure ScheduleSiteResumeInput {
    @required
    @httpLabel
    Site: String,
    
    @httpPayload
    Body: Blob
}

structure ScheduleSiteResumeOutput {
    @httpPayload
    status: Document
}
