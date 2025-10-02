import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { GetRaftIdInput, GetRaftIdOutput } from "../models/models_0";
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
 * The input for {@link GetRaftIdCommand}.
 */
export interface GetRaftIdCommandInput extends GetRaftIdInput {
}
/**
 * @public
 *
 * The output of {@link GetRaftIdCommand}.
 */
export interface GetRaftIdCommandOutput extends GetRaftIdOutput, __MetadataBearer {
}
declare const GetRaftIdCommand_base: {
    new (input: GetRaftIdCommandInput): import("@smithy/smithy-client").CommandImpl<GetRaftIdCommandInput, GetRaftIdCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: GetRaftIdCommandInput): import("@smithy/smithy-client").CommandImpl<GetRaftIdCommandInput, GetRaftIdCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, GetRaftIdCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, GetRaftIdCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // GetRaftIdInput
 *   Bucket: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new GetRaftIdCommand(input);
 * const response = await client.send(command);
 * // { // GetRaftIdOutput
 * //   RaftId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRaftIdCommandInput - {@link GetRaftIdCommandInput}
 * @returns {@link GetRaftIdCommandOutput}
 * @see {@link GetRaftIdCommandInput} for command's `input` shape.
 * @see {@link GetRaftIdCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export declare class GetRaftIdCommand extends GetRaftIdCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetRaftIdInput;
            output: GetRaftIdOutput;
        };
        sdk: {
            input: GetRaftIdCommandInput;
            output: GetRaftIdCommandOutput;
        };
    };
}
