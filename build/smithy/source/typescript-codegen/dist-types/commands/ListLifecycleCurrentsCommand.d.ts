import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { ListLifecycleCurrentsInput, ListLifecycleCurrentsOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLifecycleCurrentsCommand}.
 */
export interface ListLifecycleCurrentsCommandInput extends ListLifecycleCurrentsInput {
}
/**
 * @public
 *
 * The output of {@link ListLifecycleCurrentsCommand}.
 */
export interface ListLifecycleCurrentsCommandOutput extends ListLifecycleCurrentsOutput, __MetadataBearer {
}
declare const ListLifecycleCurrentsCommand_base: {
    new (input: ListLifecycleCurrentsCommandInput): import("@smithy/smithy-client").CommandImpl<ListLifecycleCurrentsCommandInput, ListLifecycleCurrentsCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: ListLifecycleCurrentsCommandInput): import("@smithy/smithy-client").CommandImpl<ListLifecycleCurrentsCommandInput, ListLifecycleCurrentsCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * List lifecycle current objects operation
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, ListLifecycleCurrentsCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, ListLifecycleCurrentsCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // ListLifecycleCurrentsInput
 *   Bucket: "STRING_VALUE", // required
 *   BeforeDate: "STRING_VALUE",
 *   ExcludedDataStoreName: "STRING_VALUE",
 *   EncodingType: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxKeys: Number("int"),
 *   Prefix: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new ListLifecycleCurrentsCommand(input);
 * const response = await client.send(command);
 * // { // ListLifecycleCurrentsOutput
 * //   BeforeDate: "STRING_VALUE",
 * //   Marker: "STRING_VALUE",
 * //   IsTruncated: true || false,
 * //   NextMarker: "STRING_VALUE",
 * //   Contents: [ // ObjectLifecycleList
 * //     { // ObjectLifecycle
 * //       Key: "STRING_VALUE",
 * //       LastModified: "STRING_VALUE",
 * //       ETag: "STRING_VALUE",
 * //       Owner: { // Owner
 * //         DisplayName: "STRING_VALUE",
 * //         ID: "STRING_VALUE",
 * //       },
 * //       Size: Number("int"),
 * //       StorageClass: "STRING_VALUE",
 * //       TagSet: [ // TagSet
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       staleDate: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       DataStoreName: "STRING_VALUE",
 * //       ListType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   Prefix: "STRING_VALUE",
 * //   MaxKeys: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListLifecycleCurrentsCommandInput - {@link ListLifecycleCurrentsCommandInput}
 * @returns {@link ListLifecycleCurrentsCommandOutput}
 * @see {@link ListLifecycleCurrentsCommandInput} for command's `input` shape.
 * @see {@link ListLifecycleCurrentsCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class ListLifecycleCurrentsCommand extends ListLifecycleCurrentsCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ListLifecycleCurrentsInput;
            output: ListLifecycleCurrentsOutput;
        };
        sdk: {
            input: ListLifecycleCurrentsCommandInput;
            output: ListLifecycleCurrentsCommandOutput;
        };
    };
}
