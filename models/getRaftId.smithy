$version: "2.0"
namespace cloudserver.client

@readonly
@http(method: "GET", uri: "/_/metadata/admin/buckets/{Bucket}/id")
operation GetRaftId {
    input: GetRaftIdInput,
    output: GetRaftIdOutput
}

structure GetRaftIdInput {
    @required
    @httpLabel
    Bucket: String,
    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String
}

structure GetRaftIdOutput {
    @httpPayload
    RaftId: String
}
