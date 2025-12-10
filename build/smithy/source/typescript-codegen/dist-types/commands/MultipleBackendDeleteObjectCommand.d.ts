import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { MultipleBackendDeleteObjectInput, MultipleBackendDeleteObjectOutput } from "../models/models_0";
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
 * The input for {@link MultipleBackendDeleteObjectCommand}.
 */
export interface MultipleBackendDeleteObjectCommandInput extends MultipleBackendDeleteObjectInput {
}
/**
 * @public
 *
 * The output of {@link MultipleBackendDeleteObjectCommand}.
 */
export interface MultipleBackendDeleteObjectCommandOutput extends MultipleBackendDeleteObjectOutput, __MetadataBearer {
}
declare const MultipleBackendDeleteObjectCommand_base: {
    new (input: MultipleBackendDeleteObjectCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendDeleteObjectCommandInput, MultipleBackendDeleteObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: MultipleBackendDeleteObjectCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendDeleteObjectCommandInput, MultipleBackendDeleteObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendDeleteObjectCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendDeleteObjectCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendDeleteObjectInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   StorageType: "STRING_VALUE",
 *   StorageClass: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new MultipleBackendDeleteObjectCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendDeleteObjectOutput
 * //   versionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MultipleBackendDeleteObjectCommandInput - {@link MultipleBackendDeleteObjectCommandInput}
 * @returns {@link MultipleBackendDeleteObjectCommandOutput}
 * @see {@link MultipleBackendDeleteObjectCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendDeleteObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export declare class MultipleBackendDeleteObjectCommand extends MultipleBackendDeleteObjectCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: MultipleBackendDeleteObjectInput;
            output: MultipleBackendDeleteObjectOutput;
        };
        sdk: {
            input: MultipleBackendDeleteObjectCommandInput;
            output: MultipleBackendDeleteObjectCommandOutput;
        };
    };
}
