// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteBucketIndexesInput,
  DeleteBucketIndexesOutput,
} from "../models/models_0";
import {
  de_DeleteBucketIndexesCommand,
  se_DeleteBucketIndexesCommand,
} from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  MetadataBearer as __MetadataBearer,
} from "@smithy/types";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type DeleteBucketIndexesCommandInputType = Omit<DeleteBucketIndexesInput, "Body"> & {
  Body?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link DeleteBucketIndexesCommand}.
 */
export interface DeleteBucketIndexesCommandInput extends DeleteBucketIndexesCommandInputType {}
/**
 * @public
 *
 * The output of {@link DeleteBucketIndexesCommand}.
 */
export interface DeleteBucketIndexesCommandOutput extends DeleteBucketIndexesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, DeleteBucketIndexesCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, DeleteBucketIndexesCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // DeleteBucketIndexesInput
 *   Bucket: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new DeleteBucketIndexesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketIndexesCommandInput - {@link DeleteBucketIndexesCommandInput}
 * @returns {@link DeleteBucketIndexesCommandOutput}
 * @see {@link DeleteBucketIndexesCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketIndexesCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export class DeleteBucketIndexesCommand extends $Command.classBuilder<DeleteBucketIndexesCommandInput, DeleteBucketIndexesCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "DeleteBucketIndexes", {

  })
  .n("CloudserverClient", "DeleteBucketIndexesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBucketIndexesCommand)
  .de(de_DeleteBucketIndexesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: DeleteBucketIndexesInput;
      output: {};
  };
  sdk: {
      input: DeleteBucketIndexesCommandInput;
      output: DeleteBucketIndexesCommandOutput;
  };
};
}
