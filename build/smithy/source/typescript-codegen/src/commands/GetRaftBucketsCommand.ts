// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetRaftBucketsInput,
  GetRaftBucketsOutput,
} from "../models/models_0";
import {
  de_GetRaftBucketsCommand,
  se_GetRaftBucketsCommand,
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
 * The input for {@link GetRaftBucketsCommand}.
 */
export interface GetRaftBucketsCommandInput extends GetRaftBucketsInput {}
/**
 * @public
 *
 * The output of {@link GetRaftBucketsCommand}.
 */
export interface GetRaftBucketsCommandOutput extends GetRaftBucketsOutput, __MetadataBearer {}

/**
 * Retrieves buckets associated with a specific Raft log ID
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, GetRaftBucketsCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, GetRaftBucketsCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // GetRaftBucketsInput
 *   LogId: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new GetRaftBucketsCommand(input);
 * const response = await client.send(command);
 * // { // GetRaftBucketsOutput
 * //   Buckets: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRaftBucketsCommandInput - {@link GetRaftBucketsCommandInput}
 * @returns {@link GetRaftBucketsCommandOutput}
 * @see {@link GetRaftBucketsCommandInput} for command's `input` shape.
 * @see {@link GetRaftBucketsCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export class GetRaftBucketsCommand extends $Command.classBuilder<GetRaftBucketsCommandInput, GetRaftBucketsCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "GetRaftBuckets", {

  })
  .n("CloudserverClient", "GetRaftBucketsCommand")
  .f(void 0, void 0)
  .ser(se_GetRaftBucketsCommand)
  .de(de_GetRaftBucketsCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetRaftBucketsInput;
      output: GetRaftBucketsOutput;
  };
  sdk: {
      input: GetRaftBucketsCommandInput;
      output: GetRaftBucketsCommandOutput;
  };
};
}
