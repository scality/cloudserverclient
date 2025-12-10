// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetMetadataInput,
  GetMetadataOutput,
} from "../models/models_0";
import {
  de_GetMetadataCommand,
  se_GetMetadataCommand,
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
 * The input for {@link GetMetadataCommand}.
 */
export interface GetMetadataCommandInput extends GetMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetMetadataCommand}.
 */
export interface GetMetadataCommandOutput extends GetMetadataOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, GetMetadataCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, GetMetadataCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // GetMetadataInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new GetMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetMetadataOutput
 * //   Body: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMetadataCommandInput - {@link GetMetadataCommandInput}
 * @returns {@link GetMetadataCommandOutput}
 * @see {@link GetMetadataCommandInput} for command's `input` shape.
 * @see {@link GetMetadataCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export class GetMetadataCommand extends $Command.classBuilder<GetMetadataCommandInput, GetMetadataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "GetMetadata", {

  })
  .n("CloudserverClient", "GetMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetMetadataCommand)
  .de(de_GetMetadataCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetMetadataInput;
      output: GetMetadataOutput;
  };
  sdk: {
      input: GetMetadataCommandInput;
      output: GetMetadataCommandOutput;
  };
};
}
