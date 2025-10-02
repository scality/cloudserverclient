import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { PutDataInput, PutDataOutput } from "../models/models_0";
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
 * The input for {@link PutDataCommand}.
 */
export interface PutDataCommandInput extends Omit<PutDataInput, "Body"> {
    Body: StreamingBlobPayloadInputTypes;
}
/**
 * @public
 *
 * The output of {@link PutDataCommand}.
 */
export interface PutDataCommandOutput extends PutDataOutput, __MetadataBearer {
}
declare const PutDataCommand_base: {
    new (input: PutDataCommandInput): import("@smithy/smithy-client").CommandImpl<PutDataCommandInput, PutDataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: PutDataCommandInput): import("@smithy/smithy-client").CommandImpl<PutDataCommandInput, PutDataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, PutDataCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, PutDataCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // PutDataInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   CanonicalID: "STRING_VALUE",
 *   VersioningRequired: true || false,
 *   RequestUids: "STRING_VALUE",
 *   Body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 * };
 * const command = new PutDataCommand(input);
 * const response = await client.send(command);
 * // { // PutDataOutput
 * //   Location: "DOCUMENT_VALUE",
 * //   ServerSideEncryption: "STRING_VALUE",
 * //   SSECustomerAlgorithm: "STRING_VALUE",
 * //   SSEKMSKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutDataCommandInput - {@link PutDataCommandInput}
 * @returns {@link PutDataCommandOutput}
 * @see {@link PutDataCommandInput} for command's `input` shape.
 * @see {@link PutDataCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export declare class PutDataCommand extends PutDataCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: PutDataInput;
            output: PutDataOutput;
        };
        sdk: {
            input: PutDataCommandInput;
            output: PutDataCommandOutput;
        };
    };
}
