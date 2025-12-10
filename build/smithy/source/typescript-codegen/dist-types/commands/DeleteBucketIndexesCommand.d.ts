import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { DeleteBucketIndexesInput, DeleteBucketIndexesOutput } from "../models/models_0";
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
export type DeleteBucketIndexesCommandInputType = Omit<DeleteBucketIndexesInput, "Body"> & {
    Body?: BlobPayloadInputTypes;
};
/**
 * @public
 *
 * The input for {@link DeleteBucketIndexesCommand}.
 */
export interface DeleteBucketIndexesCommandInput extends DeleteBucketIndexesCommandInputType {
}
/**
 * @public
 *
 * The output of {@link DeleteBucketIndexesCommand}.
 */
export interface DeleteBucketIndexesCommandOutput extends DeleteBucketIndexesOutput, __MetadataBearer {
}
declare const DeleteBucketIndexesCommand_base: {
    new (input: DeleteBucketIndexesCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteBucketIndexesCommandInput, DeleteBucketIndexesCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DeleteBucketIndexesCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteBucketIndexesCommandInput, DeleteBucketIndexesCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, DeleteBucketIndexesCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, DeleteBucketIndexesCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // DeleteBucketIndexesInput
 *   Bucket: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new DeleteBucketIndexesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketIndexesCommandInput - {@link DeleteBucketIndexesCommandInput}
 * @returns {@link DeleteBucketIndexesCommandOutput}
 * @see {@link DeleteBucketIndexesCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketIndexesCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export declare class DeleteBucketIndexesCommand extends DeleteBucketIndexesCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteBucketIndexesInput;
            output: {};
        };
        sdk: {
            input: DeleteBucketIndexesCommandInput;
            output: DeleteBucketIndexesCommandOutput;
        };
    };
}
