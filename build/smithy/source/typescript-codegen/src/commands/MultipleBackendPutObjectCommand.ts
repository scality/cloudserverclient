// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  MultipleBackendPutObjectInput,
  MultipleBackendPutObjectInputFilterSensitiveLog,
  MultipleBackendPutObjectOutput,
} from "../models/models_0";
import {
  de_MultipleBackendPutObjectCommand,
  se_MultipleBackendPutObjectCommand,
} from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import {
  StreamingBlobPayloadInputTypes,
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
 * The input for {@link MultipleBackendPutObjectCommand}.
 */
export interface MultipleBackendPutObjectCommandInput extends Omit<MultipleBackendPutObjectInput, "Body"> {
    Body?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link MultipleBackendPutObjectCommand}.
 */
export interface MultipleBackendPutObjectCommandOutput extends MultipleBackendPutObjectOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendPutObjectCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendPutObjectCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendPutObjectInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   UserMetaData: "STRING_VALUE",
 *   CacheControl: "STRING_VALUE",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   CanonicalID: "STRING_VALUE",
 *   StorageClass: "STRING_VALUE", // required
 *   StorageType: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   Tags: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 *   Body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 * };
 * const command = new MultipleBackendPutObjectCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendPutObjectOutput
 * //   versionId: "STRING_VALUE",
 * //   location: [ // LocationMDList
 * //     { // LocationMDObj
 * //       key: "STRING_VALUE",
 * //       size: Number("int"),
 * //       start: Number("int"),
 * //       dataStoreName: "STRING_VALUE",
 * //       dataStoreType: "STRING_VALUE",
 * //       dataStoreETag: "STRING_VALUE",
 * //       dataStoreVersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param MultipleBackendPutObjectCommandInput - {@link MultipleBackendPutObjectCommandInput}
 * @returns {@link MultipleBackendPutObjectCommandOutput}
 * @see {@link MultipleBackendPutObjectCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendPutObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export class MultipleBackendPutObjectCommand extends $Command.classBuilder<MultipleBackendPutObjectCommandInput, MultipleBackendPutObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "MultipleBackendPutObject", {

  })
  .n("CloudserverClient", "MultipleBackendPutObjectCommand")
  .f(MultipleBackendPutObjectInputFilterSensitiveLog, void 0)
  .ser(se_MultipleBackendPutObjectCommand)
  .de(de_MultipleBackendPutObjectCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: MultipleBackendPutObjectInput;
      output: MultipleBackendPutObjectOutput;
  };
  sdk: {
      input: MultipleBackendPutObjectCommandInput;
      output: MultipleBackendPutObjectCommandOutput;
  };
};
}
