$version: "2.0"
namespace cloudserver.client

@readonly
@http(method: "GET", uri: "/{Bucket}/{Key+}", code: 200)
operation GetObject {
    input: GetObjectInput,
    output: GetObjectOutput,
}

structure GetObjectInput {
    @required
    @httpLabel
    Bucket: String,

    @required
    @httpLabel
    Key: String,
    
    @httpHeader("If-Match")
    IfMatch: String,
    
    @httpHeader("If-Modified-Since")
    IfModifiedSince: Timestamp,
    
    @httpHeader("If-None-Match")
    IfNoneMatch: String,
    
    @httpHeader("If-Unmodified-Since")
    IfUnmodifiedSince: Timestamp,
    
    @httpHeader("Range")
    Range: String,
    
    @httpQuery("response-cache-control")
    ResponseCacheControl: String,
    
    @httpQuery("response-content-disposition")
    ResponseContentDisposition: String,
    
    @httpQuery("response-content-encoding")
    ResponseContentEncoding: String,
    
    @httpQuery("response-content-language")
    ResponseContentLanguage: String,
    
    @httpQuery("response-content-type")
    ResponseContentType: String,
    
    @httpQuery("response-expires")
    ResponseExpires: Timestamp,
    
    @httpQuery("versionId")
    VersionId: String,
    
    @httpHeader("x-amz-server-side-encryption-customer-algorithm")
    SSECustomerAlgorithm: String,
    
    @httpHeader("x-amz-server-side-encryption-customer-key")
    SSECustomerKey: SensitiveString,
    
    @httpHeader("x-amz-server-side-encryption-customer-key-MD5")
    SSECustomerKeyMD5: String,
    
    @httpHeader("x-amz-request-payer")
    RequestPayer: String,
    
    @httpQuery("partNumber")
    PartNumber: Integer,
    
    @httpHeader("x-amz-location-constraint")
    LocationConstraint: String,
    
    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String
}

structure GetObjectOutput {
    @httpPayload
    @required
    Body: StreamingBlob,
    
    @httpHeader("x-amz-delete-marker")
    DeleteMarker: Boolean,
    
    @httpHeader("accept-ranges")
    AcceptRanges: String,
    
    @httpHeader("x-amz-expiration")
    Expiration: String,
    
    @httpHeader("x-amz-restore")
    Restore: String,
    
    @httpHeader("Last-Modified")
    LastModified: Timestamp,
    
    @httpHeader("ETag")
    ETag: String,
    
    @httpHeader("x-amz-missing-meta")
    MissingMeta: Integer,
    
    @httpHeader("x-amz-version-id")
    VersionId: String,
    
    @httpHeader("Cache-Control")
    CacheControl: String,
    
    @httpHeader("Content-Disposition")
    ContentDisposition: String,
    
    @httpHeader("Content-Encoding")
    ContentEncoding: String,
    
    @httpHeader("Content-Language")
    ContentLanguage: String,
    
    @httpHeader("Content-Range")
    ContentRange: String,
    
    @httpHeader("Content-Type")
    ContentType: String,
    
    @httpHeader("Expires")
    Expires: Timestamp,
    
    @httpHeader("x-amz-website-redirect-location")
    WebsiteRedirectLocation: String,
    
    @httpHeader("x-amz-server-side-encryption")
    ServerSideEncryption: String,
    
    @httpPrefixHeaders("x-amz-meta-")
    Metadata: MetadataMap,
    
    @httpHeader("x-amz-server-side-encryption-customer-algorithm")
    SSECustomerAlgorithm: String,
    
    @httpHeader("x-amz-server-side-encryption-customer-key-MD5")
    SSECustomerKeyMD5: String,
    
    @httpHeader("x-amz-server-side-encryption-aws-kms-key-id")
    SSEKMSKeyId: SensitiveString,
    
    @httpHeader("x-amz-storage-class")
    StorageClass: String,
    
    @httpHeader("x-amz-request-charged")
    RequestCharged: String,
    
    @httpHeader("x-amz-replication-status")
    ReplicationStatus: String,
    
    @httpHeader("x-amz-mp-parts-count")
    PartsCount: Integer,
    
    @httpHeader("x-amz-tagging-count")
    TagCount: Integer
}

map MetadataMap {
    key: String,
    value: String
}

@sensitive
string SensitiveString

@streaming
blob StreamingBlob