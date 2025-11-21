import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { MultipleBackendPutMPUPartInput, MultipleBackendPutMPUPartOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { StreamingBlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
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
export interface MultipleBackendPutMPUPartCommandOutput extends MultipleBackendPutMPUPartOutput, __MetadataBearer {
}
declare const MultipleBackendPutMPUPartCommand_base: {
    new (input: MultipleBackendPutMPUPartCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendPutMPUPartCommandInput, MultipleBackendPutMPUPartCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: MultipleBackendPutMPUPartCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendPutMPUPartCommandInput, MultipleBackendPutMPUPartCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
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
 * //   partNumber: Number("int"),
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
export declare class MultipleBackendPutMPUPartCommand extends MultipleBackendPutMPUPartCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
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
