$version: "2.0"
namespace cloudserver.client

@idempotent
@http(method: "DELETE", uri: "/_/backbeat/expiration/{Bucket}/{Key+}")
operation DeleteObjectFromExpiration {
    input: DeleteObjectFromExpirationInput,
    output: DeleteObjectFromExpirationOutput
}

structure DeleteObjectFromExpirationInput {
    @required
    @httpLabel
    Bucket: String,
    
    @required
    @httpLabel
    Key: String,
    
    @httpQuery("versionId")
    VersionId: String,

    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String
}

structure DeleteObjectFromExpirationOutput {
    /// Version ID of the deleted object
    versionId: String
}