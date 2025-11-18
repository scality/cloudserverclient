$version: "2.0"
namespace cloudserver.client

use aws.auth#unsignedPayload

@streaming
blob StreamingBlob

@http(method: "PUT", uri: "/_/backbeat/data/{Bucket}/{Key}?v2")
@unsignedPayload
operation PutData {
    input: PutDataInput,
    output: PutDataOutput
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