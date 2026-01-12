$version: "2.0"
namespace cloudserver.backbeatRoutes

/// Streaming blob type for binary data transfer
@streaming
@requiresLength
blob StreamingBlob

@streaming
blob StreamingBlobOutput

/// Sensitive string that should be redacted in logs
@sensitive
string SensitiveString

/// Map of metadata key-value pairs
map MetadataMap {
    key: String,
    value: String
}

list LocationMDList {
    member: LocationMDObj
}

structure LocationMDObj {
    /// Storage key for this location
    key: String,

    /// Size of the data stored at this location
    size: Integer,

    /// Start position/offset for this data segment
    start: Integer,

    /// Name of the data store where this is located
    dataStoreName: String,

    /// Type of the data store (e.g., file, mem, etc.)
    dataStoreType: String,

    /// ETag from the data store for this location
    dataStoreETag: String,

    /// Version ID in the data store for this location
    dataStoreVersionId: String
}