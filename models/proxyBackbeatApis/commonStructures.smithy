$version: "2.0"
namespace cloudserver.proxyBackbeatApis

map LocationStatusMap {
    key: String,
    value: Document
}

structure FailedObjectVersion {
    Bucket: String,
    
    Key: String,
    
    VersionId: String,
    
    StorageClass: String,
    
    Size: Integer,
    
    LastModified: Timestamp
}