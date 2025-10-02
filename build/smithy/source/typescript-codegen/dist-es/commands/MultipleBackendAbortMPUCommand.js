import { commonParams } from "../endpoint/EndpointParameters";
import { de_MultipleBackendAbortMPUCommand, se_MultipleBackendAbortMPUCommand, } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
export { $Command };
export class MultipleBackendAbortMPUCommand extends $Command.classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("cloudserver", "MultipleBackendAbortMPU", {})
    .n("CloudserverClient", "MultipleBackendAbortMPUCommand")
    .f(void 0, void 0)
    .ser(se_MultipleBackendAbortMPUCommand)
    .de(de_MultipleBackendAbortMPUCommand)
    .build() {
}
