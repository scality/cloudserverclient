import { commonParams } from "../endpoint/EndpointParameters";
import { MultipleBackendPutObjectInputFilterSensitiveLog, } from "../models/models_0";
import { de_MultipleBackendPutObjectCommand, se_MultipleBackendPutObjectCommand, } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
export { $Command };
export class MultipleBackendPutObjectCommand extends $Command.classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("cloudserver", "MultipleBackendPutObject", {})
    .n("CloudserverClient", "MultipleBackendPutObjectCommand")
    .f(MultipleBackendPutObjectInputFilterSensitiveLog, void 0)
    .ser(se_MultipleBackendPutObjectCommand)
    .de(de_MultipleBackendPutObjectCommand)
    .build() {
}
