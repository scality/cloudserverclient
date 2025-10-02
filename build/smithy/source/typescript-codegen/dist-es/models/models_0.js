import { SENSITIVE_STRING } from "@smithy/smithy-client";
export const LifecycleRuleStatus = {
    DISABLED: "Disabled",
    ENABLED: "Enabled",
};
export const GetObjectInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING
    }),
});
export const GetObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING
    }),
});
export const GetRaftLogOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const MultipleBackendPutMPUPartInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const MultipleBackendPutObjectInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutDataInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
