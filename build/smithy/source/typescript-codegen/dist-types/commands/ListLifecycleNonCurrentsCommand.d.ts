import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { ListLifecycleNonCurrentsInput, ListLifecycleNonCurrentsOutput } from "../models/models_0";
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
 * The input for {@link ListLifecycleNonCurrentsCommand}.
 */
export interface ListLifecycleNonCurrentsCommandInput extends ListLifecycleNonCurrentsInput {
}
/**
 * @public
 *
 * The output of {@link ListLifecycleNonCurrentsCommand}.
 */
export interface ListLifecycleNonCurrentsCommandOutput extends ListLifecycleNonCurrentsOutput, __MetadataBearer {
}
declare const ListLifecycleNonCurrentsCommand_base: {
    new (input: ListLifecycleNonCurrentsCommandInput): import("@smithy/smithy-client").CommandImpl<ListLifecycleNonCurrentsCommandInput, ListLifecycleNonCurrentsCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: ListLifecycleNonCurrentsCommandInput): import("@smithy/smithy-client").CommandImpl<ListLifecycleNonCurrentsCommandInput, ListLifecycleNonCurrentsCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * List lifecycle non-current objects operation
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, ListLifecycleNonCurrentsCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, ListLifecycleNonCurrentsCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // ListLifecycleNonCurrentsInput
 *   Bucket: "STRING_VALUE", // required
 *   BeforeDate: "STRING_VALUE",
 *   ExcludedDataStoreName: "STRING_VALUE",
 *   EncodingType: "STRING_VALUE",
 *   KeyMarker: "STRING_VALUE",
 *   VersionIdMarker: "STRING_VALUE",
 *   MaxKeys: Number("int"),
 *   Prefix: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new ListLifecycleNonCurrentsCommand(input);
 * const response = await client.send(command);
 * // { // ListLifecycleNonCurrentsOutput
 * //   BeforeDate: "STRING_VALUE",
 * //   KeyMarker: "STRING_VALUE",
 * //   VersionIdMarker: "STRING_VALUE",
 * //   IsTruncated: true || false,
 * //   NextKeyMarker: "STRING_VALUE",
 * //   NextVersionIdMarker: "STRING_VALUE",
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
 * @param ListLifecycleNonCurrentsCommandInput - {@link ListLifecycleNonCurrentsCommandInput}
 * @returns {@link ListLifecycleNonCurrentsCommandOutput}
 * @see {@link ListLifecycleNonCurrentsCommandInput} for command's `input` shape.
 * @see {@link ListLifecycleNonCurrentsCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class ListLifecycleNonCurrentsCommand extends ListLifecycleNonCurrentsCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ListLifecycleNonCurrentsInput;
            output: ListLifecycleNonCurrentsOutput;
        };
        sdk: {
            input: ListLifecycleNonCurrentsCommandInput;
            output: ListLifecycleNonCurrentsCommandOutput;
        };
    };
}
