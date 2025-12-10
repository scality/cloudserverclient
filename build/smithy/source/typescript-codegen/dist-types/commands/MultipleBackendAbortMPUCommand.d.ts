import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { MultipleBackendAbortMPUInput, MultipleBackendAbortMPUOutput } from "../models/models_0";
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
 * The input for {@link MultipleBackendAbortMPUCommand}.
 */
export interface MultipleBackendAbortMPUCommandInput extends MultipleBackendAbortMPUInput {
}
/**
 * @public
 *
 * The output of {@link MultipleBackendAbortMPUCommand}.
 */
export interface MultipleBackendAbortMPUCommandOutput extends MultipleBackendAbortMPUOutput, __MetadataBearer {
}
declare const MultipleBackendAbortMPUCommand_base: {
    new (input: MultipleBackendAbortMPUCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendAbortMPUCommandInput, MultipleBackendAbortMPUCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: MultipleBackendAbortMPUCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendAbortMPUCommandInput, MultipleBackendAbortMPUCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * Aborts a multipart upload for multiple backend storage
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendAbortMPUCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendAbortMPUCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendAbortMPUInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   StorageType: "STRING_VALUE",
 *   StorageClass: "STRING_VALUE", // required
 *   UploadId: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new MultipleBackendAbortMPUCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MultipleBackendAbortMPUCommandInput - {@link MultipleBackendAbortMPUCommandInput}
 * @returns {@link MultipleBackendAbortMPUCommandOutput}
 * @see {@link MultipleBackendAbortMPUCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendAbortMPUCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class MultipleBackendAbortMPUCommand extends MultipleBackendAbortMPUCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: MultipleBackendAbortMPUInput;
            output: {};
        };
        sdk: {
            input: MultipleBackendAbortMPUCommandInput;
            output: MultipleBackendAbortMPUCommandOutput;
        };
    };
}
