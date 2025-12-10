import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { GetBucketCseqInput, GetBucketCseqOutput } from "../models/models_0";
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
export interface GetBucketCseqCommandInput extends GetBucketCseqInput {
}
/**
 * @public
 *
 * The output of {@link GetBucketCseqCommand}.
 */
export interface GetBucketCseqCommandOutput extends GetBucketCseqOutput, __MetadataBearer {
}
declare const GetBucketCseqCommand_base: {
    new (input: GetBucketCseqCommandInput): import("@smithy/smithy-client").CommandImpl<GetBucketCseqCommandInput, GetBucketCseqCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: GetBucketCseqCommandInput): import("@smithy/smithy-client").CommandImpl<GetBucketCseqCommandInput, GetBucketCseqCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
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
export declare class GetBucketCseqCommand extends GetBucketCseqCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
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
