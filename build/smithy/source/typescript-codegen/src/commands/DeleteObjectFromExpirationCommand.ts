// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteObjectFromExpirationInput,
  DeleteObjectFromExpirationOutput,
} from "../models/models_0";
import {
  de_DeleteObjectFromExpirationCommand,
  se_DeleteObjectFromExpirationCommand,
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
 * The input for {@link DeleteObjectFromExpirationCommand}.
 */
export interface DeleteObjectFromExpirationCommandInput extends DeleteObjectFromExpirationInput {}
/**
 * @public
 *
 * The output of {@link DeleteObjectFromExpirationCommand}.
 */
export interface DeleteObjectFromExpirationCommandOutput extends DeleteObjectFromExpirationOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, DeleteObjectFromExpirationCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, DeleteObjectFromExpirationCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // DeleteObjectFromExpirationInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new DeleteObjectFromExpirationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteObjectFromExpirationOutput
 * //   versionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteObjectFromExpirationCommandInput - {@link DeleteObjectFromExpirationCommandInput}
 * @returns {@link DeleteObjectFromExpirationCommandOutput}
 * @see {@link DeleteObjectFromExpirationCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectFromExpirationCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export class DeleteObjectFromExpirationCommand extends $Command.classBuilder<DeleteObjectFromExpirationCommandInput, DeleteObjectFromExpirationCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "DeleteObjectFromExpiration", {

  })
  .n("CloudserverClient", "DeleteObjectFromExpirationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteObjectFromExpirationCommand)
  .de(de_DeleteObjectFromExpirationCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: DeleteObjectFromExpirationInput;
      output: DeleteObjectFromExpirationOutput;
  };
  sdk: {
      input: DeleteObjectFromExpirationCommandInput;
      output: DeleteObjectFromExpirationCommandOutput;
  };
};
}
