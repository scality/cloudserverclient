import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { PutMetadataInput, PutMetadataOutput } from "../models/models_0";
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
export type PutMetadataCommandInputType = Omit<PutMetadataInput, "Body"> & {
    Body?: BlobPayloadInputTypes;
};
/**
 * @public
 *
 * The input for {@link PutMetadataCommand}.
 */
export interface PutMetadataCommandInput extends PutMetadataCommandInputType {
}
/**
 * @public
 *
 * The output of {@link PutMetadataCommand}.
 */
export interface PutMetadataCommandOutput extends PutMetadataOutput, __MetadataBearer {
}
declare const PutMetadataCommand_base: {
    new (input: PutMetadataCommandInput): import("@smithy/smithy-client").CommandImpl<PutMetadataCommandInput, PutMetadataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: PutMetadataCommandInput): import("@smithy/smithy-client").CommandImpl<PutMetadataCommandInput, PutMetadataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, PutMetadataCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, PutMetadataCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // PutMetadataInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 *   ContentMD5: "STRING_VALUE",
 *   ReplicationContent: "STRING_VALUE",
 *   VersioningRequired: true || false,
 *   RequestUids: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new PutMetadataCommand(input);
 * const response = await client.send(command);
 * // { // PutMetadataOutput
 * //   versionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutMetadataCommandInput - {@link PutMetadataCommandInput}
 * @returns {@link PutMetadataCommandOutput}
 * @see {@link PutMetadataCommandInput} for command's `input` shape.
 * @see {@link PutMetadataCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export declare class PutMetadataCommand extends PutMetadataCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: PutMetadataInput;
            output: PutMetadataOutput;
        };
        sdk: {
            input: PutMetadataCommandInput;
            output: PutMetadataCommandOutput;
        };
    };
}
