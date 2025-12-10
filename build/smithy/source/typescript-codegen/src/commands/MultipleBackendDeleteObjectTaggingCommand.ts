// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  MultipleBackendDeleteObjectTaggingInput,
  MultipleBackendDeleteObjectTaggingOutput,
} from "../models/models_0";
import {
  de_MultipleBackendDeleteObjectTaggingCommand,
  se_MultipleBackendDeleteObjectTaggingCommand,
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
export type MultipleBackendDeleteObjectTaggingCommandInputType = Omit<MultipleBackendDeleteObjectTaggingInput, "Body"> & {
  Body?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link MultipleBackendDeleteObjectTaggingCommand}.
 */
export interface MultipleBackendDeleteObjectTaggingCommandInput extends MultipleBackendDeleteObjectTaggingCommandInputType {}
/**
 * @public
 *
 * The output of {@link MultipleBackendDeleteObjectTaggingCommand}.
 */
export interface MultipleBackendDeleteObjectTaggingCommandOutput extends MultipleBackendDeleteObjectTaggingOutput, __MetadataBearer {}

/**
 * Removes tags from an object in multiple backend storage
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendDeleteObjectTaggingCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendDeleteObjectTaggingCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendDeleteObjectTaggingInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   StorageClass: "STRING_VALUE", // required
 *   StorageType: "STRING_VALUE",
 *   DataStoreVersionId: "STRING_VALUE",
 *   SourceBucket: "STRING_VALUE",
 *   SourceVersionId: "STRING_VALUE",
 *   ReplicationEndpointSite: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new MultipleBackendDeleteObjectTaggingCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendDeleteObjectTaggingOutput
 * //   versionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MultipleBackendDeleteObjectTaggingCommandInput - {@link MultipleBackendDeleteObjectTaggingCommandInput}
 * @returns {@link MultipleBackendDeleteObjectTaggingCommandOutput}
 * @see {@link MultipleBackendDeleteObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendDeleteObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export class MultipleBackendDeleteObjectTaggingCommand extends $Command.classBuilder<MultipleBackendDeleteObjectTaggingCommandInput, MultipleBackendDeleteObjectTaggingCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "MultipleBackendDeleteObjectTagging", {

  })
  .n("CloudserverClient", "MultipleBackendDeleteObjectTaggingCommand")
  .f(void 0, void 0)
  .ser(se_MultipleBackendDeleteObjectTaggingCommand)
  .de(de_MultipleBackendDeleteObjectTaggingCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: MultipleBackendDeleteObjectTaggingInput;
      output: MultipleBackendDeleteObjectTaggingOutput;
  };
  sdk: {
      input: MultipleBackendDeleteObjectTaggingCommandInput;
      output: MultipleBackendDeleteObjectTaggingCommandOutput;
  };
};
}
