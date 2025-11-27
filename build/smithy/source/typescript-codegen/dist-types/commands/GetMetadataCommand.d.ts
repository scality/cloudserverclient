import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { GetMetadataInput, GetMetadataOutput } from "../models/models_0";
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
export interface GetMetadataCommandInput extends GetMetadataInput {
}
/**
 * @public
 *
 * The output of {@link GetMetadataCommand}.
 */
export interface GetMetadataCommandOutput extends GetMetadataOutput, __MetadataBearer {
}
declare const GetMetadataCommand_base: {
    new (input: GetMetadataCommandInput): import("@smithy/smithy-client").CommandImpl<GetMetadataCommandInput, GetMetadataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: GetMetadataCommandInput): import("@smithy/smithy-client").CommandImpl<GetMetadataCommandInput, GetMetadataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
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
export declare class GetMetadataCommand extends GetMetadataCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
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
