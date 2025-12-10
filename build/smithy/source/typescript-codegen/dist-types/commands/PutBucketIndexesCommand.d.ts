import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { PutBucketIndexesInput, PutBucketIndexesOutput } from "../models/models_0";
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
export type PutBucketIndexesCommandInputType = Omit<PutBucketIndexesInput, "Body"> & {
    Body?: BlobPayloadInputTypes;
};
/**
 * @public
 *
 * The input for {@link PutBucketIndexesCommand}.
 */
export interface PutBucketIndexesCommandInput extends PutBucketIndexesCommandInputType {
}
/**
 * @public
 *
 * The output of {@link PutBucketIndexesCommand}.
 */
export interface PutBucketIndexesCommandOutput extends PutBucketIndexesOutput, __MetadataBearer {
}
declare const PutBucketIndexesCommand_base: {
    new (input: PutBucketIndexesCommandInput): import("@smithy/smithy-client").CommandImpl<PutBucketIndexesCommandInput, PutBucketIndexesCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: PutBucketIndexesCommandInput): import("@smithy/smithy-client").CommandImpl<PutBucketIndexesCommandInput, PutBucketIndexesCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, PutBucketIndexesCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, PutBucketIndexesCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // PutBucketIndexesInput
 *   Bucket: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new PutBucketIndexesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketIndexesCommandInput - {@link PutBucketIndexesCommandInput}
 * @returns {@link PutBucketIndexesCommandOutput}
 * @see {@link PutBucketIndexesCommandInput} for command's `input` shape.
 * @see {@link PutBucketIndexesCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export declare class PutBucketIndexesCommand extends PutBucketIndexesCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: PutBucketIndexesInput;
            output: {};
        };
        sdk: {
            input: PutBucketIndexesCommandInput;
            output: PutBucketIndexesCommandOutput;
        };
    };
}
