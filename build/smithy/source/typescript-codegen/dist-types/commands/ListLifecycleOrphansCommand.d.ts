import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { ListLifecycleOrphansInput, ListLifecycleOrphansOutput } from "../models/models_0";
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
 * The input for {@link ListLifecycleOrphansCommand}.
 */
export interface ListLifecycleOrphansCommandInput extends ListLifecycleOrphansInput {
}
/**
 * @public
 *
 * The output of {@link ListLifecycleOrphansCommand}.
 */
export interface ListLifecycleOrphansCommandOutput extends ListLifecycleOrphansOutput, __MetadataBearer {
}
declare const ListLifecycleOrphansCommand_base: {
    new (input: ListLifecycleOrphansCommandInput): import("@smithy/smithy-client").CommandImpl<ListLifecycleOrphansCommandInput, ListLifecycleOrphansCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: ListLifecycleOrphansCommandInput): import("@smithy/smithy-client").CommandImpl<ListLifecycleOrphansCommandInput, ListLifecycleOrphansCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * List lifecycle orphan objects operation
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, ListLifecycleOrphansCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, ListLifecycleOrphansCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // ListLifecycleOrphansInput
 *   Bucket: "STRING_VALUE", // required
 *   BeforeDate: "STRING_VALUE",
 *   ExcludedDataStoreName: "STRING_VALUE",
 *   EncodingType: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxKeys: Number("int"),
 *   Prefix: "STRING_VALUE",
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new ListLifecycleOrphansCommand(input);
 * const response = await client.send(command);
 * // { // ListLifecycleOrphansOutput
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
 * @param ListLifecycleOrphansCommandInput - {@link ListLifecycleOrphansCommandInput}
 * @returns {@link ListLifecycleOrphansCommandOutput}
 * @see {@link ListLifecycleOrphansCommandInput} for command's `input` shape.
 * @see {@link ListLifecycleOrphansCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class ListLifecycleOrphansCommand extends ListLifecycleOrphansCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ListLifecycleOrphansInput;
            output: ListLifecycleOrphansOutput;
        };
        sdk: {
            input: ListLifecycleOrphansCommandInput;
            output: ListLifecycleOrphansCommandOutput;
        };
    };
}
