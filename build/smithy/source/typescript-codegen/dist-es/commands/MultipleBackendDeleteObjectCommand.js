import { commonParams } from "../endpoint/EndpointParameters";
import { de_MultipleBackendDeleteObjectCommand, se_MultipleBackendDeleteObjectCommand, } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
export { $Command };
export class MultipleBackendDeleteObjectCommand extends $Command.classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("cloudserver", "MultipleBackendDeleteObject", {})
    .n("CloudserverClient", "MultipleBackendDeleteObjectCommand")
    .f(void 0, void 0)
    .ser(se_MultipleBackendDeleteObjectCommand)
    .de(de_MultipleBackendDeleteObjectCommand)
    .build() {
}
