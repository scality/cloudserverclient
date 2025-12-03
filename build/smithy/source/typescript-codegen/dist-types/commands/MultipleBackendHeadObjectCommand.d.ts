import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { MultipleBackendHeadObjectInput, MultipleBackendHeadObjectOutput } from "../models/models_0";
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
 * The input for {@link MultipleBackendHeadObjectCommand}.
 */
export interface MultipleBackendHeadObjectCommandInput extends MultipleBackendHeadObjectInput {
}
/**
 * @public
 *
 * The output of {@link MultipleBackendHeadObjectCommand}.
 */
export interface MultipleBackendHeadObjectCommandOutput extends MultipleBackendHeadObjectOutput, __MetadataBearer {
}
declare const MultipleBackendHeadObjectCommand_base: {
    new (input: MultipleBackendHeadObjectCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendHeadObjectCommandInput, MultipleBackendHeadObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: MultipleBackendHeadObjectCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendHeadObjectCommandInput, MultipleBackendHeadObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * Retrieves metadata for an object from multiple backend storage
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendHeadObjectCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendHeadObjectCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendHeadObjectInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   Locations: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new MultipleBackendHeadObjectCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendHeadObjectOutput
 * //   lastModified: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MultipleBackendHeadObjectCommandInput - {@link MultipleBackendHeadObjectCommandInput}
 * @returns {@link MultipleBackendHeadObjectCommandOutput}
 * @see {@link MultipleBackendHeadObjectCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendHeadObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class MultipleBackendHeadObjectCommand extends MultipleBackendHeadObjectCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: MultipleBackendHeadObjectInput;
            output: MultipleBackendHeadObjectOutput;
        };
        sdk: {
            input: MultipleBackendHeadObjectCommandInput;
            output: MultipleBackendHeadObjectCommandOutput;
        };
    };
}
