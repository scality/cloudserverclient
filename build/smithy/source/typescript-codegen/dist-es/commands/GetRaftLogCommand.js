import { commonParams } from "../endpoint/EndpointParameters";
import { GetRaftLogOutputFilterSensitiveLog, } from "../models/models_0";
import { de_GetRaftLogCommand, se_GetRaftLogCommand, } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
export { $Command };
export class GetRaftLogCommand extends $Command.classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("cloudserver", "GetRaftLog", {})
    .n("CloudserverClient", "GetRaftLogCommand")
    .f(void 0, GetRaftLogOutputFilterSensitiveLog)
    .ser(se_GetRaftLogCommand)
    .de(de_GetRaftLogCommand)
    .build() {
}
