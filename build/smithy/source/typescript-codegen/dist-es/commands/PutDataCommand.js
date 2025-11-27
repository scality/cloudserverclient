import { commonParams } from "../endpoint/EndpointParameters";
import { PutDataInputFilterSensitiveLog, } from "../models/models_0";
import { de_PutDataCommand, se_PutDataCommand, } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
export { $Command };
export class PutDataCommand extends $Command.classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("cloudserver", "PutData", {})
    .n("CloudserverClient", "PutDataCommand")
    .f(PutDataInputFilterSensitiveLog, void 0)
    .ser(se_PutDataCommand)
    .de(de_PutDataCommand)
    .build() {
}
