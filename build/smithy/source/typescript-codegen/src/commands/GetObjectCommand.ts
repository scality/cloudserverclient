// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetObjectInput,
  GetObjectInputFilterSensitiveLog,
  GetObjectOutput,
  GetObjectOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetObjectCommand,
  se_GetObjectCommand,
} from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import {
  StreamingBlobPayloadOutputTypes,
  MetadataBearer as __MetadataBearer,
} from "@smithy/types";

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
export interface GetObjectCommandInput extends GetObjectInput {}
/**
 * @public
 *
 * The output of {@link GetObjectCommand}.
 */
export interface GetObjectCommandOutput extends Omit<GetObjectOutput, "Body">, __MetadataBearer {
    Body: StreamingBlobPayloadOutputTypes;
}

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
export class GetObjectCommand extends $Command.classBuilder<GetObjectCommandInput, GetObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "GetObject", {

  })
  .n("CloudserverClient", "GetObjectCommand")
  .f(GetObjectInputFilterSensitiveLog, GetObjectOutputFilterSensitiveLog)
  .ser(se_GetObjectCommand)
  .de(de_GetObjectCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
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
