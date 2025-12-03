"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutDataInputFilterSensitiveLog = exports.MultipleBackendPutObjectInputFilterSensitiveLog = exports.MultipleBackendPutMPUPartInputFilterSensitiveLog = exports.GetRaftLogOutputFilterSensitiveLog = exports.GetObjectOutputFilterSensitiveLog = exports.GetObjectInputFilterSensitiveLog = exports.LifecycleRuleStatus = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
exports.LifecycleRuleStatus = {
    DISABLED: "Disabled",
    ENABLED: "Enabled",
};
const GetObjectInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING
    }),
});
exports.GetObjectInputFilterSensitiveLog = GetObjectInputFilterSensitiveLog;
const GetObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING
    }),
});
exports.GetObjectOutputFilterSensitiveLog = GetObjectOutputFilterSensitiveLog;
const GetRaftLogOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetRaftLogOutputFilterSensitiveLog = GetRaftLogOutputFilterSensitiveLog;
const MultipleBackendPutMPUPartInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MultipleBackendPutMPUPartInputFilterSensitiveLog = MultipleBackendPutMPUPartInputFilterSensitiveLog;
const MultipleBackendPutObjectInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MultipleBackendPutObjectInputFilterSensitiveLog = MultipleBackendPutObjectInputFilterSensitiveLog;
const PutDataInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutDataInputFilterSensitiveLog = PutDataInputFilterSensitiveLog;
