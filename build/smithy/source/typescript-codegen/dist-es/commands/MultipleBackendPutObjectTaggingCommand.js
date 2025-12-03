import { commonParams } from "../endpoint/EndpointParameters";
import { de_MultipleBackendPutObjectTaggingCommand, se_MultipleBackendPutObjectTaggingCommand, } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
export { $Command };
export class MultipleBackendPutObjectTaggingCommand extends $Command.classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("cloudserver", "MultipleBackendPutObjectTagging", {})
    .n("CloudserverClient", "MultipleBackendPutObjectTaggingCommand")
    .f(void 0, void 0)
    .ser(se_MultipleBackendPutObjectTaggingCommand)
    .de(de_MultipleBackendPutObjectTaggingCommand)
    .build() {
}
