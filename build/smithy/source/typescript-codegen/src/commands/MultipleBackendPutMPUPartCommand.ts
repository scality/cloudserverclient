// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  MultipleBackendPutMPUPartInput,
  MultipleBackendPutMPUPartInputFilterSensitiveLog,
  MultipleBackendPutMPUPartOutput,
} from "../models/models_0";
import {
  de_MultipleBackendPutMPUPartCommand,
  se_MultipleBackendPutMPUPartCommand,
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
 * The input for {@link MultipleBackendPutMPUPartCommand}.
 */
export interface MultipleBackendPutMPUPartCommandInput extends Omit<MultipleBackendPutMPUPartInput, "Body"> {
    Body: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link MultipleBackendPutMPUPartCommand}.
 */
export interface MultipleBackendPutMPUPartCommandOutput extends MultipleBackendPutMPUPartOutput, __MetadataBearer {}

/**
 * Uploads a part for a multipart upload to multiple backend storage
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendPutMPUPartCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendPutMPUPartCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendPutMPUPartInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   StorageType: "STRING_VALUE",
 *   StorageClass: "STRING_VALUE", // required
 *   PartNumber: Number("int"),
 *   UploadId: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 *   Body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 * };
 * const command = new MultipleBackendPutMPUPartCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendPutMPUPartOutput
 * //   partNumber: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * //   numberSubParts: Number("int"),
 * // };
 *
 * ```
 *
 * @param MultipleBackendPutMPUPartCommandInput - {@link MultipleBackendPutMPUPartCommandInput}
 * @returns {@link MultipleBackendPutMPUPartCommandOutput}
 * @see {@link MultipleBackendPutMPUPartCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendPutMPUPartCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export class MultipleBackendPutMPUPartCommand extends $Command.classBuilder<MultipleBackendPutMPUPartCommandInput, MultipleBackendPutMPUPartCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "MultipleBackendPutMPUPart", {

  })
  .n("CloudserverClient", "MultipleBackendPutMPUPartCommand")
  .f(MultipleBackendPutMPUPartInputFilterSensitiveLog, void 0)
  .ser(se_MultipleBackendPutMPUPartCommand)
  .de(de_MultipleBackendPutMPUPartCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: MultipleBackendPutMPUPartInput;
      output: MultipleBackendPutMPUPartOutput;
  };
  sdk: {
      input: MultipleBackendPutMPUPartCommandInput;
      output: MultipleBackendPutMPUPartCommandOutput;
  };
};
}
