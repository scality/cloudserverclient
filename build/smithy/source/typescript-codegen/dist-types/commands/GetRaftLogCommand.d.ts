import { CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudserverClient";
import { GetRaftLogInput, GetRaftLogOutput } from "../models/models_0";
import { Command as $Command } from "@smithy/smithy-client";
import { StreamingBlobPayloadOutputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRaftLogCommand}.
 */
export interface GetRaftLogCommandInput extends GetRaftLogInput {
}
/**
 * @public
 *
 * The output of {@link GetRaftLogCommand}.
 */
export interface GetRaftLogCommandOutput extends Omit<GetRaftLogOutput, "Body">, __MetadataBearer {
    Body: StreamingBlobPayloadOutputTypes;
}
declare const GetRaftLogCommand_base: {
    new (input: GetRaftLogCommandInput): import("@smithy/smithy-client").CommandImpl<GetRaftLogCommandInput, GetRaftLogCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: GetRaftLogCommandInput): import("@smithy/smithy-client").CommandImpl<GetRaftLogCommandInput, GetRaftLogCommandOutput, CloudserverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * Retrieves Raft log entries for a specific log ID
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudserverClient, GetRaftLogCommand } from "@scality/cloudserverclient"; // ES Modules import
 * // const { CloudserverClient, GetRaftLogCommand } = require("@scality/cloudserverclient"); // CommonJS import
 * const client = new CloudserverClient(config);
 * const input = { // GetRaftLogInput
 *   LogId: "STRING_VALUE", // required
 *   Begin: Number("int"),
 *   Limit: Number("int"),
 *   TargetLeader: true || false,
 *   RequestUids: "STRING_VALUE",
 * };
 * const command = new GetRaftLogCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Body.transformToByteArray();
 * // const str = await response.Body.transformToString();
 * // response.Body.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetRaftLogOutput
 * //   Body: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes // required
 * //   Start: Number("int"),
 * //   Cseq: Number("int"),
 * //   Prune: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetRaftLogCommandInput - {@link GetRaftLogCommandInput}
 * @returns {@link GetRaftLogCommandOutput}
 * @see {@link GetRaftLogCommandInput} for command's `input` shape.
 * @see {@link GetRaftLogCommandOutput} for command's `response` shape.
 * @see {@link CloudserverClientResolvedConfig | config} for CloudserverClient's `config` shape.
 *
 * @throws {@link CloudserverServiceException}
 * <p>Base exception class for all service exceptions from Cloudserver service.</p>
 *
 *
 * @public
 */
export declare class GetRaftLogCommand extends GetRaftLogCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetRaftLogInput;
            output: GetRaftLogOutput;
        };
        sdk: {
            input: GetRaftLogCommandInput;
            output: GetRaftLogCommandOutput;
        };
    };
}
