// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutDataInput,
  PutDataInputFilterSensitiveLog,
  PutDataOutput,
} from "../models/models_0";
import {
  de_PutDataCommand,
  se_PutDataCommand,
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
 * The input for {@link PutDataCommand}.
 */
export interface PutDataCommandInput extends Omit<PutDataInput, "Body"> {
    Body: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link PutDataCommand}.
 */
export interface PutDataCommandOutput extends PutDataOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, PutDataCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, PutDataCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // PutDataInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   CanonicalID: "STRING_VALUE",
 *   VersioningRequired: true || false,
 *   RequestUids: "STRING_VALUE",
 *   Body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 * };
 * const command = new PutDataCommand(input);
 * const response = await client.send(command);
 * // { // PutDataOutput
 * //   Location: "DOCUMENT_VALUE",
 * //   ServerSideEncryption: "STRING_VALUE",
 * //   SSECustomerAlgorithm: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutDataCommandInput - {@link PutDataCommandInput}
 * @returns {@link PutDataCommandOutput}
 * @see {@link PutDataCommandInput} for command's `input` shape.
 * @see {@link PutDataCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export class PutDataCommand extends $Command.classBuilder<PutDataCommandInput, PutDataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "PutData", {

  })
  .n("CloudserverClient", "PutDataCommand")
  .f(PutDataInputFilterSensitiveLog, void 0)
  .ser(se_PutDataCommand)
  .de(de_PutDataCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: PutDataInput;
      output: PutDataOutput;
  };
  sdk: {
      input: PutDataCommandInput;
      output: PutDataCommandOutput;
  };
};
}
