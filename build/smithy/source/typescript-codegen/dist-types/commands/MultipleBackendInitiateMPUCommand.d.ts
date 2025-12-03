import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { MultipleBackendInitiateMPUInput, MultipleBackendInitiateMPUOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type MultipleBackendInitiateMPUCommandInputType = Omit<MultipleBackendInitiateMPUInput, "Body"> & {
    Body?: BlobPayloadInputTypes;
};
/**
 * @public
 *
 * The input for {@link MultipleBackendInitiateMPUCommand}.
 */
export interface MultipleBackendInitiateMPUCommandInput extends MultipleBackendInitiateMPUCommandInputType {
}
/**
 * @public
 *
 * The output of {@link MultipleBackendInitiateMPUCommand}.
 */
export interface MultipleBackendInitiateMPUCommandOutput extends MultipleBackendInitiateMPUOutput, __MetadataBearer {
}
declare const MultipleBackendInitiateMPUCommand_base: {
    new (input: MultipleBackendInitiateMPUCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendInitiateMPUCommandInput, MultipleBackendInitiateMPUCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: MultipleBackendInitiateMPUCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendInitiateMPUCommandInput, MultipleBackendInitiateMPUCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * Initiates a multipart upload for multiple backend storage
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendInitiateMPUCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendInitiateMPUCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendInitiateMPUInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   StorageClass: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   UserMetaData: "STRING_VALUE",
 *   CacheControl: "STRING_VALUE",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   Tags: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new MultipleBackendInitiateMPUCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendInitiateMPUOutput
 * //   uploadId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MultipleBackendInitiateMPUCommandInput - {@link MultipleBackendInitiateMPUCommandInput}
 * @returns {@link MultipleBackendInitiateMPUCommandOutput}
 * @see {@link MultipleBackendInitiateMPUCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendInitiateMPUCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class MultipleBackendInitiateMPUCommand extends MultipleBackendInitiateMPUCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: MultipleBackendInitiateMPUInput;
            output: MultipleBackendInitiateMPUOutput;
        };
        sdk: {
            input: MultipleBackendInitiateMPUCommandInput;
            output: MultipleBackendInitiateMPUCommandOutput;
        };
    };
}
