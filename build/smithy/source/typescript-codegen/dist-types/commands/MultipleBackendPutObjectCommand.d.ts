import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { MultipleBackendPutObjectInput, MultipleBackendPutObjectOutput } from "../models/models_0";
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
 * The input for {@link MultipleBackendPutObjectCommand}.
 */
export interface MultipleBackendPutObjectCommandInput extends Omit<MultipleBackendPutObjectInput, "Body"> {
    Body?: StreamingBlobPayloadInputTypes;
}
/**
 * @public
 *
 * The output of {@link MultipleBackendPutObjectCommand}.
 */
export interface MultipleBackendPutObjectCommandOutput extends MultipleBackendPutObjectOutput, __MetadataBearer {
}
declare const MultipleBackendPutObjectCommand_base: {
    new (input: MultipleBackendPutObjectCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendPutObjectCommandInput, MultipleBackendPutObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: MultipleBackendPutObjectCommandInput): import("@smithy/smithy-client").CommandImpl<MultipleBackendPutObjectCommandInput, MultipleBackendPutObjectCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, MultipleBackendPutObjectCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, MultipleBackendPutObjectCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // MultipleBackendPutObjectInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
 *   UserMetaData: "STRING_VALUE",
 *   CacheControl: "STRING_VALUE",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   CanonicalID: "STRING_VALUE",
 *   StorageClass: "STRING_VALUE", // required
 *   StorageType: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   Tags: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 *   Body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 * };
 * const command = new MultipleBackendPutObjectCommand(input);
 * const response = await client.send(command);
 * // { // MultipleBackendPutObjectOutput
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
 * @param MultipleBackendPutObjectCommandInput - {@link MultipleBackendPutObjectCommandInput}
 * @returns {@link MultipleBackendPutObjectCommandOutput}
 * @see {@link MultipleBackendPutObjectCommandInput} for command's `input` shape.
 * @see {@link MultipleBackendPutObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export declare class MultipleBackendPutObjectCommand extends MultipleBackendPutObjectCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: MultipleBackendPutObjectInput;
            output: MultipleBackendPutObjectOutput;
        };
        sdk: {
            input: MultipleBackendPutObjectCommandInput;
            output: MultipleBackendPutObjectCommandOutput;
        };
    };
}
