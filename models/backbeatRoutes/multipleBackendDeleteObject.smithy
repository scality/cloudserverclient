$version: "2.0"
namespace cloudserver.backbeatRoutes

@idempotent
@http(method: "DELETE", uri: "/_/backbeat/multiplebackenddata/{Bucket}/{Key+}?operation=deleteobject", code: 200)
operation MultipleBackendDeleteObject {
    input: MultipleBackendDeleteObjectInput,
    output: MultipleBackendDeleteObjectOutput
}

structure MultipleBackendDeleteObjectInput {
    @httpLabel
    @required
    Bucket: String,

    @httpLabel
    @required
    Key: String,

    @httpHeader("X-Scal-Storage-Type")
    StorageType: String,

    @httpHeader("X-Scal-Storage-Class")
    @required
    StorageClass: String,

    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,
}

structure MultipleBackendDeleteObjectOutput {
    versionId: String,
}