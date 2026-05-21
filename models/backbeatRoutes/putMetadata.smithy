$version: "2.0"
namespace cloudserver.backbeatRoutes

@http(method: "PUT", uri: "/_/backbeat/metadata/{Bucket}/{Key+}")
operation PutMetadata {
    input: PutMetadataInput,
    output: PutMetadataOutput,
    errors: [MicroVersionIdAlreadyStoredException, StaleMicroVersionIdException]
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

    /// MicroVersionId of the metadata being written. If specified, call will be rejected if 
    /// the existing metadata document already has a newer `micro-version-id`: 
    /// this ensures `micro-version-id` is monotonic, and thus allows handling
    /// conflicting writes. If not specified, the update will be performed inconditionnally.
    @httpHeader("x-scal-micro-version-id")
    MicroVersionId: String,

    @httpPayload
    Body: Blob
}

structure PutMetadataOutput {
    /// Version ID of the stored metadata
    versionId: String
}

/// Returned by PutMetadata when the incoming microVersionId matches the one
/// already at the destination. The write is skipped.
@error("client")
@httpError(409)
structure MicroVersionIdAlreadyStoredException {
    @required
    message: String
}

/// Returned by PutMetadata when the incoming microVersionId is older than
/// the destination's current value (can happen with stale cascade events for example).
/// In that case there is no write.
@error("client")
@httpError(409)
structure StaleMicroVersionIdException {
    @required
    message: String,

    @httpHeader("x-scal-micro-version-id")
    microVersionId: String
}