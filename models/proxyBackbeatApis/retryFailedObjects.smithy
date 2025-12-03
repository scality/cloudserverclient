$version: "2.0"
namespace cloudserver.proxyBackbeatApis

@http(method: "POST", uri: "/_/backbeat/api/crr/failed")
operation RetryFailedObjects {
    input: RetryFailedObjectsInput,
    output: RetryFailedObjectsOutput
}

structure RetryFailedObjectsInput {
    @required
    @httpPayload
    Body: Blob
}

structure RetryFailedObjectsOutput {
    @httpPayload
    Results: Document
}
