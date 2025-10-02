import { commonParams } from "../endpoint/EndpointParameters";
import { MultipleBackendPutMPUPartInputFilterSensitiveLog, } from "../models/models_0";
import { de_MultipleBackendPutMPUPartCommand, se_MultipleBackendPutMPUPartCommand, } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
export { $Command };
export class MultipleBackendPutMPUPartCommand extends $Command.classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("cloudserver", "MultipleBackendPutMPUPart", {})
    .n("CloudserverClient", "MultipleBackendPutMPUPartCommand")
    .f(MultipleBackendPutMPUPartInputFilterSensitiveLog, void 0)
    .ser(se_MultipleBackendPutMPUPartCommand)
    .de(de_MultipleBackendPutMPUPartCommand)
    .build() {
}
