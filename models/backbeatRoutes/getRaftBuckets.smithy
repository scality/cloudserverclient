$version: "2.0"
namespace cloudserver.backbeatRoutes

/// Retrieves buckets associated with a specific Raft log ID
@readonly
@http(method: "GET", uri: "/_/metadata/admin/raft_sessions/{LogId}/bucket")
operation GetRaftBuckets {
    input: GetRaftBucketsInput,
    output: GetRaftBucketsOutput,
}

@input
structure GetRaftBucketsInput {
    @httpLabel
    @required
    LogId: String,

    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,
}

@output
structure GetRaftBucketsOutput {
    @httpPayload
    Buckets: Document,
}