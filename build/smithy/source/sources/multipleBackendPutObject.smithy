$version: "2.0"
namespace cloudserver.client

@streaming
blob StreamingBlob

@idempotent
@http(method: "PUT", uri: "/_/backbeat/multiplebackenddata/{Bucket}/{Key}?operation=putobject")
operation MultipleBackendPutObject {
    input: MultipleBackendPutObjectInput,
    output: MultipleBackendPutObjectOutput
}

structure MultipleBackendPutObjectInput {
    @required
    @httpLabel
    Bucket: String,

    @required
    @httpLabel
    Key: String,

    @httpHeader("Content-MD5")
    ContentMD5: String,

    @httpHeader("X-Scal-Content-Type")
    ContentType: String,

    @httpHeader("X-Scal-User-Metadata")
    UserMetaData: String,

    @httpHeader("X-Scal-Cache-Control")
    CacheControl: String,

    @httpHeader("X-Scal-Content-Disposition")
    ContentDisposition: String,

    @httpHeader("X-Scal-Content-Encoding")
    ContentEncoding: String,

    @httpHeader("X-Scal-Canonical-Id")
    CanonicalID: String,

    @required
    @httpHeader("X-Scal-Storage-Class")
    StorageClass: String,

    @httpHeader("X-Scal-Storage-Type")
    StorageType: String,

    @httpHeader("X-Scal-Version-Id")
    VersionId: String,

    @httpHeader("X-Scal-Tags")
    Tags: String,

    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,

    @httpPayload
    @default("")
    Body: StreamingBlob
}

structure MultipleBackendPutObjectOutput {
    /// Version ID of the stored object
    versionId: String,

    /// List of storage locations where the object was stored
    location: LocationMDList
}