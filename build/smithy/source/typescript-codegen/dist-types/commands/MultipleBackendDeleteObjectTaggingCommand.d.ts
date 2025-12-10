import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { MultipleBackendDeleteObjectTaggingInput, MultipleBackendDeleteObjectTaggingOutput } from "../models/models_0";
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
export type MultipleBackendDeleteObjectTaggingCommandInputType = Omit<MultipleBackendDeleteObjectTaggingInput, "Body"> & {
    Body?: BlobPayloadInputTypes;
};
/**
 * @public
 *
 * The input for {@link MultipleBackendDeleteObjectTaggingCommand}.
 */
export interface MultipleBackendDeleteObjectTaggingCommandInput extends MultipleBackendDeleteObjectTaggingCommandInputType {
}
/**
 * @public
 *
 * The output of {@link MultipleBackendDeleteObjectTaggingCommand}.
 */
export interface MultipleBackendDeleteObjectTaggingCommandOutput extends MultipleBackendDeleteObjectTaggingOutput, __MetadataBearer {
}
declare const MultipleBackendDeleteObjectTaggingCommand_base: {
    new (input: MultipleBackendDeleteObjectTaggingCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendDeleteObjectTaggingCommandInput, MultipleBackendDeleteObjectTaggingCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: MultipleBackendDeleteObjectTaggingCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendDeleteObjectTaggingCommandInput, MultipleBackendDeleteObjectTaggingCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * Removes tags from an object in multiple backend storage
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendDeleteObjectTaggingCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendDeleteObjectTaggingCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendDeleteObjectTaggingInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   StorageClass: "STRING_VALUE", // required
 *   StorageType: "STRING_VALUE",
 *   DataStoreVersionId: "STRING_VALUE",
 *   SourceBucket: "STRING_VALUE",
 *   SourceVersionId: "STRING_VALUE",
 *   ReplicationEndpointSite: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new MultipleBackendDeleteObjectTaggingCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendDeleteObjectTaggingOutput
 * //   versionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MultipleBackendDeleteObjectTaggingCommandInput - {@link MultipleBackendDeleteObjectTaggingCommandInput}
 * @returns {@link MultipleBackendDeleteObjectTaggingCommandOutput}
 * @see {@link MultipleBackendDeleteObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendDeleteObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class MultipleBackendDeleteObjectTaggingCommand extends MultipleBackendDeleteObjectTaggingCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: MultipleBackendDeleteObjectTaggingInput;
            output: MultipleBackendDeleteObjectTaggingOutput;
        };
        sdk: {
            input: MultipleBackendDeleteObjectTaggingCommandInput;
            output: MultipleBackendDeleteObjectTaggingCommandOutput;
        };
    };
}
