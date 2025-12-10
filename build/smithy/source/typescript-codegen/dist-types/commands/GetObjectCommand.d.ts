import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { GetObjectInput, GetObjectOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { StreamingBlobPayloadOutputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetObjectCommand}.
 */
export interface GetObjectCommandInput extends GetObjectInput {
}
/**
 * @public
 *
 * The output of {@link GetObjectCommand}.
 */
export interface GetObjectCommandOutput extends Omit<GetObjectOutput, "Body">, __MetadataBearer {
    Body: StreamingBlobPayloadOutputTypes;
}
declare const GetObjectCommand_base: {
    new (input: GetObjectCommandInput): import("@smithy/smithy-client").CommandImpl<GetObjectCommandInput, GetObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: GetObjectCommandInput): import("@smithy/smithy-client").CommandImpl<GetObjectCommandInput, GetObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, GetObjectCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, GetObjectCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // GetObjectInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 *   IfModifiedSince: new Date("TIMESTAMP"),
 *   IfNoneMatch: "STRING_VALUE",
 *   IfUnmodifiedSince: new Date("TIMESTAMP"),
 *   Range: "STRING_VALUE",
 *   ResponseCacheControl: "STRING_VALUE",
 *   ResponseContentDisposition: "STRING_VALUE",
 *   ResponseContentEncoding: "STRING_VALUE",
 *   ResponseContentLanguage: "STRING_VALUE",
 *   ResponseContentType: "STRING_VALUE",
 *   ResponseExpires: new Date("TIMESTAMP"),
 *   VersionId: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   RequestPayer: "STRING_VALUE",
 *   PartNumber: Number("int"),
 *   LocationConstraint: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new GetObjectCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Body.transformToByteArray();
 * // const str = await response.Body.transformToString();
 * // response.Body.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetObjectOutput
 * //   Body: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes // required
 * //   DeleteMarker: true || false,
 * //   AcceptRanges: "STRING_VALUE",
 * //   Expiration: "STRING_VALUE",
 * //   Restore: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * //   ETag: "STRING_VALUE",
 * //   MissingMeta: Number("int"),
 * //   VersionId: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * //   ContentDisposition: "STRING_VALUE",
 * //   ContentEncoding: "STRING_VALUE",
 * //   ContentLanguage: "STRING_VALUE",
 * //   ContentRange: "STRING_VALUE",
 * //   ContentType: "STRING_VALUE",
 * //   Expires: new Date("TIMESTAMP"),
 * //   WebsiteRedirectLocation: "STRING_VALUE",
 * //   ServerSideEncryption: "STRING_VALUE",
 * //   Metadata: { // MetadataMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   SSECustomerAlgorithm: "STRING_VALUE",
 * //   SSECustomerKeyMD5: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * //   StorageClass: "STRING_VALUE",
 * //   RequestCharged: "STRING_VALUE",
 * //   ReplicationStatus: "STRING_VALUE",
 * //   PartsCount: Number("int"),
 * //   TagCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetObjectCommandInput - {@link GetObjectCommandInput}
 * @returns {@link GetObjectCommandOutput}
 * @see {@link GetObjectCommandInput} for command's `input` shape.
 * @see {@link GetObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export declare class GetObjectCommand extends GetObjectCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetObjectInput;
            output: GetObjectOutput;
        };
        sdk: {
            input: GetObjectCommandInput;
            output: GetObjectCommandOutput;
        };
    };
}
