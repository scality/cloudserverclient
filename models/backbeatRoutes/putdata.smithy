$version: "2.0"
namespace cloudserver.backbeatRoutes

use aws.auth#unsignedPayload

@http(method: "PUT", uri: "/_/backbeat/data/{Bucket}/{Key+}?v2")
@unsignedPayload
operation PutData {
    input: PutDataInput,
    output: PutDataOutput,
    errors: [VersionIdCollisionException]
}

structure PutDataInput {
    @required
    @httpLabel
    Bucket: String,

    @required
    @httpLabel
    Key: String,

    @httpHeader("Content-MD5")
    ContentMD5: String,

    @httpHeader("X-Scal-Canonical-Id")
    CanonicalID: String,

    @httpHeader("x-scal-versioning-required")
    VersioningRequired: Boolean,

    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,

    @httpQuery("versionId")
    VersionId: String,

    @httpPayload
    @default("")
    Body: StreamingBlob
}

structure PutDataOutput {
    @httpPayload
    Location: Document,

    @httpHeader("x-amz-server-side-encryption")
    ServerSideEncryption: String,

    @httpHeader("x-amz-server-side-encryption-customer-algorithm")
    SSECustomerAlgorithm: String,

    @httpHeader("x-amz-server-side-encryption-aws-kms-key-id")
    SSEKMSKeyId: String
}

/// Returned by PutData when the destination already has an object at this
/// versionId. The existing microVersionId is included in the response header
/// so the caller can run the cascade loop/stale/proceed classification.
@error("client")
@httpError(409)
structure VersionIdCollisionException {
    @required
    message: String,

    @httpHeader("x-scal-micro-version-id")
    microVersionId: String
}