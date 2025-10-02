// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetBucketCseqInput,
  GetBucketCseqOutput,
} from "../models/models_0";
import {
  de_GetBucketCseqCommand,
  se_GetBucketCseqCommand,
} from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketCseqCommand}.
 */
export interface GetBucketCseqCommandInput extends GetBucketCseqInput {}
/**
 * @public
 *
 * The output of {@link GetBucketCseqCommand}.
 */
export interface GetBucketCseqCommandOutput extends GetBucketCseqOutput, __MetadataBearer {}

/**
 * Retrieves bucket sequence information
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, GetBucketCseqCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, GetBucketCseqCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // GetBucketCseqInput
 *   Bucket: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new GetBucketCseqCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketCseqOutput
 * //   CseqInfo: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBucketCseqCommandInput - {@link GetBucketCseqCommandInput}
 * @returns {@link GetBucketCseqCommandOutput}
 * @see {@link GetBucketCseqCommandInput} for command's `input` shape.
 * @see {@link GetBucketCseqCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export class GetBucketCseqCommand extends $Command.classBuilder<GetBucketCseqCommandInput, GetBucketCseqCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "GetBucketCseq", {

  })
  .n("CloudserverClient", "GetBucketCseqCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketCseqCommand)
  .de(de_GetBucketCseqCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetBucketCseqInput;
      output: GetBucketCseqOutput;
  };
  sdk: {
      input: GetBucketCseqCommandInput;
      output: GetBucketCseqCommandOutput;
  };
};
}
