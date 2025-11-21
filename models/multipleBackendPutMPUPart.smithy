$version: "2.0"
namespace cloudserver.client

use aws.auth#unsignedPayload

@streaming
blob StreamingBlob

/// Uploads a part for a multipart upload to multiple backend storage
@http(method: "PUT", uri: "/_/backbeat/multiplebackenddata/{Bucket}/{Key+}?operation=putpart")
@unsignedPayload
operation MultipleBackendPutMPUPart {
    input: MultipleBackendPutMPUPartInput,
    output: MultipleBackendPutMPUPartOutput,
}

@input
structure MultipleBackendPutMPUPartInput {
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
    
    @httpHeader("X-Scal-Part-Number")
    PartNumber: Integer,
    
    @httpHeader("X-Scal-Upload-Id")
    UploadId: String,

    @httpHeader("X-Scal-Request-Uids")
    RequestUids: String,
    
    @httpPayload
    @required
    Body: StreamingBlob,
}

@output
structure MultipleBackendPutMPUPartOutput {
    /// Part number
    partNumber: Integer,
    
    /// ETag of the uploaded part
    ETag: String,
    
    /// Number of sub-parts
    numberSubParts: Integer,
}