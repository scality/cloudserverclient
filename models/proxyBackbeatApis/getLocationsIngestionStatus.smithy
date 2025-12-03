$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@readonly
@http(method: "GET", uri: "/_/backbeat/api/ingestion/status")
operation GetLocationsIngestionStatus {
    input: GetLocationsIngestionStatusInput,
    output: GetLocationsIngestionStatusOutput
}

structure GetLocationsIngestionStatusInput {}

structure GetLocationsIngestionStatusOutput {
    @httpPayload
    status: Document
}
