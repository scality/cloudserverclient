import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { GetBucketMetadataInput, GetBucketMetadataOutput } from "../models/models_0";
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
 * The input for {@link GetBucketMetadataCommand}.
 */
export interface GetBucketMetadataCommandInput extends GetBucketMetadataInput {
}
/**
 * @public
 *
 * The output of {@link GetBucketMetadataCommand}.
 */
export interface GetBucketMetadataCommandOutput extends GetBucketMetadataOutput, __MetadataBearer {
}
declare const GetBucketMetadataCommand_base: {
    new (input: GetBucketMetadataCommandInput): import("@smithy/smithy-client").CommandImpl<GetBucketMetadataCommandInput, GetBucketMetadataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: GetBucketMetadataCommandInput): import("@smithy/smithy-client").CommandImpl<GetBucketMetadataCommandInput, GetBucketMetadataCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, GetBucketMetadataCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, GetBucketMetadataCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // GetBucketMetadataInput
 *   Bucket: "STRING_VALUE", // required
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new GetBucketMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketMetadataOutput
 * //   acl: { // AclObj
 * //     Canned: "STRING_VALUE",
 * //     FULL_CONTROL: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     WRITE: [
 * //       "STRING_VALUE",
 * //     ],
 * //     WRITE_ACP: [
 * //       "STRING_VALUE",
 * //     ],
 * //     READ: [
 * //       "STRING_VALUE",
 * //     ],
 * //     READ_ACP: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   name: "STRING_VALUE",
 * //   owner: "STRING_VALUE",
 * //   ownerDisplayName: "STRING_VALUE",
 * //   creationDate: "STRING_VALUE",
 * //   mdBucketModelVersion: Number("int"),
 * //   transient: true || false,
 * //   deleted: true || false,
 * //   serverSideEncryption: { // ServerSideEncryptionMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   versioningConfiguration: { // VersioningConfigurationObj
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   locationConstraint: "STRING_VALUE",
 * //   readLocationConstraint: "STRING_VALUE",
 * //   cors: [ // CorsListObj
 * //     { // CorsObj
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * //   replicationConfiguration: { // ReplicationConfigurationObj
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   lifecycleConfiguration: { // LifecycleConfigurationObj
 * //     Rules: [ // LifecycleRuleList
 * //       { // LCRuleObj
 * //         ID: "STRING_VALUE",
 * //         Status: "Enabled" || "Disabled",
 * //         Prefix: "STRING_VALUE",
 * //         Expiration: { // ExpirationConfiguration
 * //           Days: Number("int"),
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   uid: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBucketMetadataCommandInput - {@link GetBucketMetadataCommandInput}
 * @returns {@link GetBucketMetadataCommandOutput}
 * @see {@link GetBucketMetadataCommandInput} for command's `input` shape.
 * @see {@link GetBucketMetadataCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 */
export declare class GetBucketMetadataCommand extends GetBucketMetadataCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetBucketMetadataInput;
            output: GetBucketMetadataOutput;
        };
        sdk: {
            input: GetBucketMetadataCommandInput;
            output: GetBucketMetadataCommandOutput;
        };
    };
}
