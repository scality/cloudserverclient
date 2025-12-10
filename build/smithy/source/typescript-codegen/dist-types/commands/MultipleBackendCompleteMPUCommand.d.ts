import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { MultipleBackendCompleteMPUInput, MultipleBackendCompleteMPUOutput } from "../models/models_0";
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
export type MultipleBackendCompleteMPUCommandInputType = Omit<MultipleBackendCompleteMPUInput, "Body"> & {
    Body?: BlobPayloadInputTypes;
};
/**
 * @public
 *
 * The input for {@link MultipleBackendCompleteMPUCommand}.
 */
export interface MultipleBackendCompleteMPUCommandInput extends MultipleBackendCompleteMPUCommandInputType {
}
/**
 * @public
 *
 * The output of {@link MultipleBackendCompleteMPUCommand}.
 */
export interface MultipleBackendCompleteMPUCommandOutput extends MultipleBackendCompleteMPUOutput, __MetadataBearer {
}
declare const MultipleBackendCompleteMPUCommand_base: {
    new (input: MultipleBackendCompleteMPUCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendCompleteMPUCommandInput, MultipleBackendCompleteMPUCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: MultipleBackendCompleteMPUCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendCompleteMPUCommandInput, MultipleBackendCompleteMPUCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * Completes a multipart upload for multiple backend storage
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendCompleteMPUCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendCompleteMPUCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendCompleteMPUInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   StorageType: "STRING_VALUE",
 *   StorageClass: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   UserMetaData: "STRING_VALUE",
 *   CacheControl: "STRING_VALUE",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   UploadId: "STRING_VALUE",
 *   Tags: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new MultipleBackendCompleteMPUCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendCompleteMPUOutput
 * //   versionId: "STRING_VALUE",
 * //   location: [ // LocationMDList
 * //     { // LocationMDObj
 * //       key: "STRING_VALUE",
 * //       size: Number("int"),
 * //       start: Number("int"),
 * //       dataStoreName: "STRING_VALUE",
 * //       dataStoreType: "STRING_VALUE",
 * //       dataStoreETag: "STRING_VALUE",
 * //       dataStoreVersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param MultipleBackendCompleteMPUCommandInput - {@link MultipleBackendCompleteMPUCommandInput}
 * @returns {@link MultipleBackendCompleteMPUCommandOutput}
 * @see {@link MultipleBackendCompleteMPUCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendCompleteMPUCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class MultipleBackendCompleteMPUCommand extends MultipleBackendCompleteMPUCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: MultipleBackendCompleteMPUInput;
            output: MultipleBackendCompleteMPUOutput;
        };
        sdk: {
            input: MultipleBackendCompleteMPUCommandInput;
            output: MultipleBackendCompleteMPUCommandOutput;
        };
    };
}
