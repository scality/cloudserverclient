$version: "2.0"
namespace cloudserver.client

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