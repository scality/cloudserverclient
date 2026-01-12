$version: "2.0"
namespace cloudserver.backbeatRoutes

/// Retrieves metadata for an object from multiple backend storage
@readonly
@http(method: "GET", uri: "/_/backbeat/multiplebackendmetadata/{Bucket}/{Key+}")
operation MultipleBackendHeadObject {
    input: MultipleBackendHeadObjectInput,
    output: MultipleBackendHeadObjectOutput,
}

@input
structure MultipleBackendHeadObjectInput {
    @httpLabel
    @required
    Bucket: String,
    
    @httpLabel
    @required
    Key: String,
    
    @httpHeader("X-Scal-Locations")
    @required
    Locations: String,
    
    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,
}

@output
structure MultipleBackendHeadObjectOutput {
    /// Last modified timestamp
    lastModified: String,
}