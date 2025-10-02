$version: "2.0"
namespace cloudserver.client

/// Retrieves Raft log entries for a specific log ID
@readonly
@http(method: "GET", uri: "/_/metadata/admin/raft_sessions/{LogId}/log")
operation GetRaftLog {
    input: GetRaftLogInput,
    output: GetRaftLogOutput,
}

@input
structure GetRaftLogInput {
    @httpLabel
    @required
    LogId: String,
    
    @httpQuery("begin")
    Begin: Integer,
    
    @httpQuery("limit")
    Limit: Integer,
    
    @httpQuery("targetLeader")
    TargetLeader: Boolean,
    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,
}

@output
structure GetRaftLogOutput {
    /// Streaming log data containing the complete JSON response
    @httpPayload
    @required
    Body: StreamingBlob,
    
    /// Starting sequence number
    @httpHeader("x-raft-log-start")
    Start: Integer,
    
    /// Current sequence number  
    @httpHeader("x-raft-log-cseq")
    Cseq: Integer,
    
    /// Prune sequence number
    @httpHeader("x-raft-log-prune") 
    Prune: Integer,
}

/// Streaming blob for large data responses
@streaming
blob StreamingBlob
