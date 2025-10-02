import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { MultipleBackendPutObjectTaggingInput, MultipleBackendPutObjectTaggingOutput } from "../models/models_0";
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
export type MultipleBackendPutObjectTaggingCommandInputType = Omit<MultipleBackendPutObjectTaggingInput, "Body"> & {
    Body?: BlobPayloadInputTypes;
};
/**
 * @public
 *
 * The input for {@link MultipleBackendPutObjectTaggingCommand}.
 */
export interface MultipleBackendPutObjectTaggingCommandInput extends MultipleBackendPutObjectTaggingCommandInputType {
}
/**
 * @public
 *
 * The output of {@link MultipleBackendPutObjectTaggingCommand}.
 */
export interface MultipleBackendPutObjectTaggingCommandOutput extends MultipleBackendPutObjectTaggingOutput, __MetadataBearer {
}
declare const MultipleBackendPutObjectTaggingCommand_base: {
    new (input: MultipleBackendPutObjectTaggingCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendPutObjectTaggingCommandInput, MultipleBackendPutObjectTaggingCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: MultipleBackendPutObjectTaggingCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendPutObjectTaggingCommandInput, MultipleBackendPutObjectTaggingCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * Adds or updates tags for an object in multiple backend storage
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendPutObjectTaggingCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendPutObjectTaggingCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendPutObjectTaggingInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   StorageType: "STRING_VALUE",
 *   StorageClass: "STRING_VALUE", // required
 *   DataStoreVersionId: "STRING_VALUE",
 *   Tags: "STRING_VALUE",
 *   SourceBucket: "STRING_VALUE",
 *   SourceVersionId: "STRING_VALUE",
 *   ReplicationEndpointSite: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new MultipleBackendPutObjectTaggingCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendPutObjectTaggingOutput
 * //   versionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MultipleBackendPutObjectTaggingCommandInput - {@link MultipleBackendPutObjectTaggingCommandInput}
 * @returns {@link MultipleBackendPutObjectTaggingCommandOutput}
 * @see {@link MultipleBackendPutObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendPutObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class MultipleBackendPutObjectTaggingCommand extends MultipleBackendPutObjectTaggingCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: MultipleBackendPutObjectTaggingInput;
            output: MultipleBackendPutObjectTaggingOutput;
        };
        sdk: {
            input: MultipleBackendPutObjectTaggingCommandInput;
            output: MultipleBackendPutObjectTaggingCommandOutput;
        };
    };
}
