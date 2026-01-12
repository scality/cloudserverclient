$version: "2.0"
namespace cloudserver.backbeatRoutes

@http(method: "PUT", uri: "/_/backbeat/metadata/{Bucket}/{Key+}")
operation PutMetadata {
    input: PutMetadataInput,
    output: PutMetadataOutput
}

structure PutMetadataInput {
    @required
    @httpLabel
    Bucket: String,
    
    @required
    @httpLabel
    Key: String,
    
    @httpQuery("versionId")
    VersionId: String,
    
    @httpQuery("accountId")
    AccountId: String,
    
    @httpHeader("Content-MD5")
    ContentMD5: String,
    
    @httpHeader("x-scal-replication-content")
    ReplicationContent: String,
    
    @httpHeader("x-scal-versioning-required")
    VersioningRequired: Boolean,
    
    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,
    
    @httpPayload
    Body: Blob
}

structure PutMetadataOutput {
    /// Version ID of the stored metadata
    versionId: String
}