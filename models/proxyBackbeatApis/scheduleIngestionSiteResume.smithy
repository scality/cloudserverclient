$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/ingestion/resume/{Site}/schedule")
operation ScheduleIngestionSiteResume {
    input: ScheduleIngestionSiteResumeInput,
    output: ScheduleIngestionSiteResumeOutput
}

structure ScheduleIngestionSiteResumeInput {
    @required
    @httpLabel
    Site: String,
    
    @httpPayload
    Body: Blob
}

structure ScheduleIngestionSiteResumeOutput {
    @httpPayload
    status: Document
}
