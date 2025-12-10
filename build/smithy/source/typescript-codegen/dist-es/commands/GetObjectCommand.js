import { commonParams } from "../endpoint/EndpointParameters";
import { GetObjectInputFilterSensitiveLog, GetObjectOutputFilterSensitiveLog, } from "../models/models_0";
import { de_GetObjectCommand, se_GetObjectCommand, } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
export { $Command };
export class GetObjectCommand extends $Command.classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("cloudserver", "GetObject", {})
    .n("CloudserverClient", "GetObjectCommand")
    .f(GetObjectInputFilterSensitiveLog, GetObjectOutputFilterSensitiveLog)
    .ser(se_GetObjectCommand)
    .de(de_GetObjectCommand)
    .build() {
}
