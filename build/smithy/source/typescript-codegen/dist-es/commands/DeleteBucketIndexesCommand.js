import { commonParams } from "../endpoint/EndpointParameters";
import { de_DeleteBucketIndexesCommand, se_DeleteBucketIndexesCommand, } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
export { $Command };
export class DeleteBucketIndexesCommand extends $Command.classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("cloudserver", "DeleteBucketIndexes", {})
    .n("CloudserverClient", "DeleteBucketIndexesCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBucketIndexesCommand)
    .de(de_DeleteBucketIndexesCommand)
    .build() {
}
