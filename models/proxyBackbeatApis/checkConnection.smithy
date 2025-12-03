$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@readonly
@http(method: "GET", uri: "/_/backbeat/api/healthcheck")
operation CheckConnection {
    input: CheckConnectionInput,
    output: CheckConnectionOutput
}

structure CheckConnectionInput {}

structure CheckConnectionOutput {}
