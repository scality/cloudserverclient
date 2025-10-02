// smithy-typescript generated code
import {
  CloudserverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudserverClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetBucketIndexesInput,
  GetBucketIndexesOutput,
} from "../models/models_0";
import {
  de_GetBucketIndexesCommand,
  se_GetBucketIndexesCommand,
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
 * The input for {@link GetBucketIndexesCommand}.
 */
export interface GetBucketIndexesCommandInput extends GetBucketIndexesInput {}
/**
 * @public
 *
 * The output of {@link GetBucketIndexesCommand}.
 */
export interface GetBucketIndexesCommandOutput extends GetBucketIndexesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, GetBucketIndexesCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, GetBucketIndexesCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // GetBucketIndexesInput
 *   Bucket: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new GetBucketIndexesCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketIndexesOutput
 * //   Indexes: [ // IndexList
 * //     { // Index
 * //       name: "STRING_VALUE",
 * //       keys: [ // IndexKeyList
 * //         { // IndexKey
 * //           order: Number("int"),
 * //           key: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketIndexesCommandInput - {@link GetBucketIndexesCommandInput}
 * @returns {@link GetBucketIndexesCommandOutput}
 * @see {@link GetBucketIndexesCommandInput} for command's `input` shape.
 * @see {@link GetBucketIndexesCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export class GetBucketIndexesCommand extends $Command.classBuilder<GetBucketIndexesCommandInput, GetBucketIndexesCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
      .m(function (this: any, Command: any, cs: any, config: CloudserverClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
  getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      ];
  })
  .s("cloudserver", "GetBucketIndexes", {

  })
  .n("CloudserverClient", "GetBucketIndexesCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketIndexesCommand)
  .de(de_GetBucketIndexesCommand)
.build() {
/** @internal type navigation helper, not in runtime. */
declare protected static __types: {
  api: {
      input: GetBucketIndexesInput;
      output: GetBucketIndexesOutput;
  };
  sdk: {
      input: GetBucketIndexesCommandInput;
      output: GetBucketIndexesCommandOutput;
  };
};
}
