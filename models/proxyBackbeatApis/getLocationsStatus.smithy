$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@readonly
@http(method: "GET", uri: "/_/backbeat/api/crr/status")
operation GetLocationsStatus {
    input: GetLocationsStatusInput,
    output: GetLocationsStatusOutput
}

structure GetLocationsStatusInput {}

structure GetLocationsStatusOutput {
    @httpPayload
    status: Document
}
