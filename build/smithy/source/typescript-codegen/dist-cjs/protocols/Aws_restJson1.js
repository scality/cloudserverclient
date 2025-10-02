"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.de_MultipleBackendPutObjectCommand = exports.de_MultipleBackendPutMPUPartCommand = exports.de_MultipleBackendInitiateMPUCommand = exports.de_MultipleBackendHeadObjectCommand = exports.de_MultipleBackendDeleteObjectTaggingCommand = exports.de_MultipleBackendDeleteObjectCommand = exports.de_MultipleBackendCompleteMPUCommand = exports.de_MultipleBackendAbortMPUCommand = exports.de_ListLifecycleOrphansCommand = exports.de_ListLifecycleNonCurrentsCommand = exports.de_ListLifecycleCurrentsCommand = exports.de_GetRaftLogCommand = exports.de_GetRaftIdCommand = exports.de_GetRaftBucketsCommand = exports.de_GetObjectListCommand = exports.de_GetObjectCommand = exports.de_GetMetadataCommand = exports.de_GetBucketMetadataCommand = exports.de_GetBucketIndexesCommand = exports.de_GetBucketCseqCommand = exports.de_DeleteObjectFromExpirationCommand = exports.de_DeleteBucketIndexesCommand = exports.de_BatchDeleteCommand = exports.se_PutMetadataCommand = exports.se_PutDataCommand = exports.se_PutBucketIndexesCommand = exports.se_MultipleBackendPutObjectTaggingCommand = exports.se_MultipleBackendPutObjectCommand = exports.se_MultipleBackendPutMPUPartCommand = exports.se_MultipleBackendInitiateMPUCommand = exports.se_MultipleBackendHeadObjectCommand = exports.se_MultipleBackendDeleteObjectTaggingCommand = exports.se_MultipleBackendDeleteObjectCommand = exports.se_MultipleBackendCompleteMPUCommand = exports.se_MultipleBackendAbortMPUCommand = exports.se_ListLifecycleOrphansCommand = exports.se_ListLifecycleNonCurrentsCommand = exports.se_ListLifecycleCurrentsCommand = exports.se_GetRaftLogCommand = exports.se_GetRaftIdCommand = exports.se_GetRaftBucketsCommand = exports.se_GetObjectListCommand = exports.se_GetObjectCommand = exports.se_GetMetadataCommand = exports.se_GetBucketMetadataCommand = exports.se_GetBucketIndexesCommand = exports.se_GetBucketCseqCommand = exports.se_DeleteObjectFromExpirationCommand = exports.se_DeleteBucketIndexesCommand = exports.se_BatchDeleteCommand = void 0;
exports.de_PutMetadataCommand = exports.de_PutDataCommand = exports.de_PutBucketIndexesCommand = exports.de_MultipleBackendPutObjectTaggingCommand = void 0;
const CloudserverServiceException_1 = require("../models/CloudserverServiceException");
const core_1 = require("@aws-sdk/core");
const core_2 = require("@smithy/core");
const smithy_client_1 = require("@smithy/smithy-client");
const se_BatchDeleteCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/json',
        [_ius]: input[_IUS],
        [_xssc]: input[_SC],
        [_xst]: input[_T],
        [_xsct]: input[_CT],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/batchdelete/{Bucket}/{Key}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key}', false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        'Locations': _ => (0, smithy_client_1._json)(_),
    }));
    b.m("POST")
        .h(headers)
        .b(body);
    return b.build();
};
exports.se_BatchDeleteCommand = se_BatchDeleteCommand;
const se_DeleteBucketIndexesCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/index/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "delete"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("POST")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_DeleteBucketIndexesCommand = se_DeleteBucketIndexesCommand;
const se_DeleteObjectFromExpirationCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/expiration/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("DELETE")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_DeleteObjectFromExpirationCommand = se_DeleteObjectFromExpirationCommand;
const se_GetBucketCseqCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/metadata/default/informations/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    let body;
    b.m("GET")
        .h(headers)
        .b(body);
    return b.build();
};
exports.se_GetBucketCseqCommand = se_GetBucketCseqCommand;
const se_GetBucketIndexesCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/index/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    let body;
    b.m("GET")
        .h(headers)
        .b(body);
    return b.build();
};
exports.se_GetBucketIndexesCommand = se_GetBucketIndexesCommand;
const se_GetBucketMetadataCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/metadata/default/attributes/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    let body;
    b.m("GET")
        .h(headers)
        .b(body);
    return b.build();
};
exports.se_GetBucketMetadataCommand = se_GetBucketMetadataCommand;
const se_GetMetadataCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/metadata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("GET")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_GetMetadataCommand = se_GetMetadataCommand;
const se_GetObjectCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_im]: input[_IM],
        [_ims]: [() => (0, smithy_client_1.isSerializableHeaderValue)(input[_IMS]), () => (0, smithy_client_1.dateToUtcString)(input[_IMS]).toString()],
        [_inm]: input[_INM],
        [_ius]: [() => (0, smithy_client_1.isSerializableHeaderValue)(input[_IUS]), () => (0, smithy_client_1.dateToUtcString)(input[_IUS]).toString()],
        [_r]: input[_R],
        [_xasseca]: input[_SSECA],
        [_xasseck]: input[_SSECK],
        [_xasseckm]: input[_SSECKMD],
        [_xarp]: input[_RP],
        [_xalc]: input[_LC],
        [_xsru]: input[_RU],
    });
    b.bp("/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_rcc]: [, input[_RCC]],
        [_rcd]: [, input[_RCD]],
        [_rce]: [, input[_RCE]],
        [_rcl]: [, input[_RCL]],
        [_rct]: [, input[_RCT]],
        [_re]: [() => input.ResponseExpires !== void 0, () => ((0, smithy_client_1.serializeDateTime)(input[_RE]).toString())],
        [_vI]: [, input[_VI]],
        [_pN]: [() => input.PartNumber !== void 0, () => (input[_PN].toString())],
    });
    let body;
    b.m("GET")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_GetObjectCommand = se_GetObjectCommand;
const se_GetObjectListCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/metadata/default/bucket/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    let body;
    b.m("GET")
        .h(headers)
        .b(body);
    return b.build();
};
exports.se_GetObjectListCommand = se_GetObjectListCommand;
const se_GetRaftBucketsCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/metadata/admin/raft_sessions/{LogId}/bucket");
    b.p('LogId', () => input.LogId, '{LogId}', false);
    let body;
    b.m("GET")
        .h(headers)
        .b(body);
    return b.build();
};
exports.se_GetRaftBucketsCommand = se_GetRaftBucketsCommand;
const se_GetRaftIdCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/metadata/admin/buckets/{Bucket}/id");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    let body;
    b.m("GET")
        .h(headers)
        .b(body);
    return b.build();
};
exports.se_GetRaftIdCommand = se_GetRaftIdCommand;
const se_GetRaftLogCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/metadata/admin/raft_sessions/{LogId}/log");
    b.p('LogId', () => input.LogId, '{LogId}', false);
    const query = (0, smithy_client_1.map)({
        [_b]: [() => input.Begin !== void 0, () => (input[_B].toString())],
        [_l]: [() => input.Limit !== void 0, () => (input[_L].toString())],
        [_tL]: [() => input.TargetLeader !== void 0, () => (input[_TL].toString())],
    });
    let body;
    b.m("GET")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_GetRaftLogCommand = se_GetRaftLogCommand;
const se_ListLifecycleCurrentsCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/lifecycle/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = (0, smithy_client_1.map)({
        [_lt]: [, "current"],
        [_bd]: [, input[_BD]],
        [_edsn]: [, input[_EDSN]],
        [_et]: [, input[_ET]],
        [_m]: [, input[_M]],
        [_mk]: [() => input.MaxKeys !== void 0, () => (input[_MK].toString())],
        [_p]: [, input[_P]],
    });
    let body;
    b.m("GET")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_ListLifecycleCurrentsCommand = se_ListLifecycleCurrentsCommand;
const se_ListLifecycleNonCurrentsCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/lifecycle/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = (0, smithy_client_1.map)({
        [_lt]: [, "noncurrent"],
        [_bd]: [, input[_BD]],
        [_edsn]: [, input[_EDSN]],
        [_et]: [, input[_ET]],
        [_km]: [, input[_KM]],
        [_vim]: [, input[_VIM]],
        [_mk]: [() => input.MaxKeys !== void 0, () => (input[_MK].toString())],
        [_p]: [, input[_P]],
    });
    let body;
    b.m("GET")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_ListLifecycleNonCurrentsCommand = se_ListLifecycleNonCurrentsCommand;
const se_ListLifecycleOrphansCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/lifecycle/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = (0, smithy_client_1.map)({
        [_lt]: [, "orphan"],
        [_bd]: [, input[_BD]],
        [_edsn]: [, input[_EDSN]],
        [_et]: [, input[_ET]],
        [_m]: [, input[_M]],
        [_mk]: [() => input.MaxKeys !== void 0, () => (input[_MK].toString())],
        [_p]: [, input[_P]],
    });
    let body;
    b.m("GET")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_ListLifecycleOrphansCommand = se_ListLifecycleOrphansCommand;
const se_MultipleBackendAbortMPUCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsst]: input[_ST],
        [_xssc]: input[_SC],
        [_xsui]: input[_UI],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "abortmpu"],
    });
    let body;
    b.m("DELETE")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_MultipleBackendAbortMPUCommand = se_MultipleBackendAbortMPUCommand;
const se_MultipleBackendCompleteMPUCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_xsst]: input[_ST],
        [_xssc]: input[_SC],
        [_xsvi]: input[_VI],
        [_xsct]: input[_CT],
        [_xsum]: input[_UMD],
        [_xscc]: input[_CC],
        [_xscd]: input[_CD],
        [_xsce]: input[_CE],
        [_xsui]: input[_UI],
        [_xst]: input[_T],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "completempu"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("POST")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_MultipleBackendCompleteMPUCommand = se_MultipleBackendCompleteMPUCommand;
const se_MultipleBackendDeleteObjectCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsst]: input[_ST],
        [_xssc]: input[_SC],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "deleteobject"],
    });
    let body;
    b.m("DELETE")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_MultipleBackendDeleteObjectCommand = se_MultipleBackendDeleteObjectCommand;
const se_MultipleBackendDeleteObjectTaggingCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_xssc]: input[_SC],
        [_xsst]: input[_ST],
        [_xsdsvi]: input[_DSVI],
        [_xssb]: input[_SB],
        [_xssvi]: input[_SVI],
        [_xsres]: input[_RES],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "deleteobjecttagging"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("DELETE")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_MultipleBackendDeleteObjectTaggingCommand = se_MultipleBackendDeleteObjectTaggingCommand;
const se_MultipleBackendHeadObjectCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        [_xsl]: input[_Lo],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackendmetadata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    let body;
    b.m("GET")
        .h(headers)
        .b(body);
    return b.build();
};
exports.se_MultipleBackendHeadObjectCommand = se_MultipleBackendHeadObjectCommand;
const se_MultipleBackendInitiateMPUCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_xssc]: input[_SC],
        [_xsvi]: input[_VI],
        [_xsst]: input[_ST],
        [_xsct]: input[_CT],
        [_xsum]: input[_UMD],
        [_xscc]: input[_CC],
        [_xscd]: input[_CD],
        [_xsce]: input[_CE],
        [_xst]: input[_T],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "initiatempu"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("POST")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_MultipleBackendInitiateMPUCommand = se_MultipleBackendInitiateMPUCommand;
const se_MultipleBackendPutMPUPartCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_xsst]: input[_ST],
        [_xssc]: input[_SC],
        [_xspn]: [() => (0, smithy_client_1.isSerializableHeaderValue)(input[_PN]), () => input[_PN].toString()],
        [_xsui]: input[_UI],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "putpart"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("PUT")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_MultipleBackendPutMPUPartCommand = se_MultipleBackendPutMPUPartCommand;
const se_MultipleBackendPutObjectCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_cm]: input[_CMD],
        [_xsct]: input[_CT],
        [_xsum]: input[_UMD],
        [_xscc]: input[_CC],
        [_xscd]: input[_CD],
        [_xsce]: input[_CE],
        [_xsci]: input[_CID],
        [_xssc]: input[_SC],
        [_xsst]: input[_ST],
        [_xsvi]: input[_VI],
        [_xst]: input[_T],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key}', false);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "putobject"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("PUT")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_MultipleBackendPutObjectCommand = se_MultipleBackendPutObjectCommand;
const se_MultipleBackendPutObjectTaggingCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_xsst]: input[_ST],
        [_xssc]: input[_SC],
        [_xsdsvi]: input[_DSVI],
        [_xst]: input[_T],
        [_xssb]: input[_SB],
        [_xssvi]: input[_SVI],
        [_xsres]: input[_RES],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "puttagging"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("POST")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_MultipleBackendPutObjectTaggingCommand = se_MultipleBackendPutObjectTaggingCommand;
const se_PutBucketIndexesCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/index/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = (0, smithy_client_1.map)({
        [_o]: [, "add"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("POST")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_PutBucketIndexesCommand = se_PutBucketIndexesCommand;
const se_PutDataCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_cm]: input[_CMD],
        [_xsci]: input[_CID],
        [_xsvr]: [() => (0, smithy_client_1.isSerializableHeaderValue)(input[_VR]), () => input[_VR].toString()],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/data/{Bucket}/{Key}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key}', false);
    const query = (0, smithy_client_1.map)({
        [_v]: [, ""],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("PUT")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_PutDataCommand = se_PutDataCommand;
const se_PutMetadataCommand = async (input, context) => {
    const b = (0, core_2.requestBuilder)(input, context);
    const headers = (0, smithy_client_1.map)({}, smithy_client_1.isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_cm]: input[_CMD],
        [_xsrc]: input[_RC],
        [_xsvr]: [() => (0, smithy_client_1.isSerializableHeaderValue)(input[_VR]), () => input[_VR].toString()],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/metadata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = (0, smithy_client_1.map)({
        [_vI]: [, input[_VI]],
        [_aI]: [, input[_AI]],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    b.m("PUT")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
exports.se_PutMetadataCommand = se_PutMetadataCommand;
const de_BatchDeleteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_BatchDeleteCommand = de_BatchDeleteCommand;
const de_DeleteBucketIndexesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteBucketIndexesCommand = de_DeleteBucketIndexesCommand;
const de_DeleteObjectFromExpirationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'versionId': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_DeleteObjectFromExpirationCommand = de_DeleteObjectFromExpirationCommand;
const de_GetBucketCseqCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = await collectBodyString(output.body, context);
    contents.CseqInfo = data;
    contents.CseqInfo = JSON.parse(data);
    return contents;
};
exports.de_GetBucketCseqCommand = de_GetBucketCseqCommand;
const de_GetBucketIndexesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'Indexes': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetBucketIndexesCommand = de_GetBucketIndexesCommand;
const de_GetBucketMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'acl': smithy_client_1._json,
        'cors': smithy_client_1._json,
        'creationDate': smithy_client_1.expectString,
        'deleted': smithy_client_1.expectBoolean,
        'lifecycleConfiguration': smithy_client_1._json,
        'locationConstraint': smithy_client_1.expectString,
        'mdBucketModelVersion': smithy_client_1.expectInt32,
        'name': smithy_client_1.expectString,
        'owner': smithy_client_1.expectString,
        'ownerDisplayName': smithy_client_1.expectString,
        'readLocationConstraint': smithy_client_1.expectString,
        'replicationConfiguration': smithy_client_1._json,
        'serverSideEncryption': smithy_client_1._json,
        'transient': smithy_client_1.expectBoolean,
        'uid': smithy_client_1.expectString,
        'versioningConfiguration': smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetBucketMetadataCommand = de_GetBucketMetadataCommand;
const de_GetMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'Body': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetMetadataCommand = de_GetMetadataCommand;
const de_GetObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        [_DM]: [() => void 0 !== output.headers[_xadm], () => (0, smithy_client_1.parseBoolean)(output.headers[_xadm])],
        [_AR]: [, output.headers[_ar]],
        [_E]: [, output.headers[_xae]],
        [_Re]: [, output.headers[_xar]],
        [_LM]: [() => void 0 !== output.headers[_lm], () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc7231DateTime)(output.headers[_lm]))],
        [_ETa]: [, output.headers[_e]],
        [_MM]: [() => void 0 !== output.headers[_xamm], () => (0, smithy_client_1.strictParseInt32)(output.headers[_xamm])],
        [_VI]: [, output.headers[_xavi]],
        [_CC]: [, output.headers[_cc]],
        [_CD]: [, output.headers[_cd]],
        [_CE]: [, output.headers[_ce]],
        [_CL]: [, output.headers[_cl]],
        [_CR]: [, output.headers[_cr]],
        [_CT]: [, output.headers[_ct]],
        [_Ex]: [() => void 0 !== output.headers[_ex], () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc7231DateTime)(output.headers[_ex]))],
        [_WRL]: [, output.headers[_xawrl]],
        [_SSE]: [, output.headers[_xasse]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSECKMD]: [, output.headers[_xasseckm]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_SC]: [, output.headers[_xasc]],
        [_RCe]: [, output.headers[_xarc]],
        [_RS]: [, output.headers[_xars]],
        [_PC]: [() => void 0 !== output.headers[_xampc], () => (0, smithy_client_1.strictParseInt32)(output.headers[_xampc])],
        [_TC]: [() => void 0 !== output.headers[_xatc], () => (0, smithy_client_1.strictParseInt32)(output.headers[_xatc])],
        Metadata: [,
            Object.keys(output.headers).filter(header => header.startsWith('x-amz-meta-'))
                .reduce((acc, header) => {
                acc[header.substring(11)] = output.headers[header];
                return acc;
            }, {})
        ],
    });
    const data = output.body;
    context.sdkStreamMixin(data);
    contents.Body = data;
    return contents;
};
exports.de_GetObjectCommand = de_GetObjectCommand;
const de_GetObjectListCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'CommonPrefixes': smithy_client_1._json,
        'Contents': smithy_client_1._json,
        'Delimiter': smithy_client_1.expectString,
        'IsTruncated': smithy_client_1.expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetObjectListCommand = de_GetObjectListCommand;
const de_GetRaftBucketsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = await collectBodyString(output.body, context);
    contents.Buckets = data;
    contents.Buckets = JSON.parse(data);
    return contents;
};
exports.de_GetRaftBucketsCommand = de_GetRaftBucketsCommand;
const de_GetRaftIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = await collectBodyString(output.body, context);
    contents.RaftId = (0, smithy_client_1.expectString)(data);
    return contents;
};
exports.de_GetRaftIdCommand = de_GetRaftIdCommand;
const de_GetRaftLogCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        [_S]: [() => void 0 !== output.headers[_xrls], () => (0, smithy_client_1.strictParseInt32)(output.headers[_xrls])],
        [_C]: [() => void 0 !== output.headers[_xrlc], () => (0, smithy_client_1.strictParseInt32)(output.headers[_xrlc])],
        [_Pr]: [() => void 0 !== output.headers[_xrlp], () => (0, smithy_client_1.strictParseInt32)(output.headers[_xrlp])],
    });
    const data = output.body;
    context.sdkStreamMixin(data);
    contents.Body = data;
    return contents;
};
exports.de_GetRaftLogCommand = de_GetRaftLogCommand;
const de_ListLifecycleCurrentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'BeforeDate': smithy_client_1.expectString,
        'Contents': smithy_client_1._json,
        'IsTruncated': smithy_client_1.expectBoolean,
        'Marker': smithy_client_1.expectString,
        'MaxKeys': smithy_client_1.expectInt32,
        'Name': smithy_client_1.expectString,
        'NextMarker': smithy_client_1.expectString,
        'Prefix': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListLifecycleCurrentsCommand = de_ListLifecycleCurrentsCommand;
const de_ListLifecycleNonCurrentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'BeforeDate': smithy_client_1.expectString,
        'Contents': smithy_client_1._json,
        'IsTruncated': smithy_client_1.expectBoolean,
        'KeyMarker': smithy_client_1.expectString,
        'MaxKeys': smithy_client_1.expectInt32,
        'Name': smithy_client_1.expectString,
        'NextKeyMarker': smithy_client_1.expectString,
        'NextVersionIdMarker': smithy_client_1.expectString,
        'Prefix': smithy_client_1.expectString,
        'VersionIdMarker': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListLifecycleNonCurrentsCommand = de_ListLifecycleNonCurrentsCommand;
const de_ListLifecycleOrphansCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'BeforeDate': smithy_client_1.expectString,
        'Contents': smithy_client_1._json,
        'IsTruncated': smithy_client_1.expectBoolean,
        'Marker': smithy_client_1.expectString,
        'MaxKeys': smithy_client_1.expectInt32,
        'Name': smithy_client_1.expectString,
        'NextMarker': smithy_client_1.expectString,
        'Prefix': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListLifecycleOrphansCommand = de_ListLifecycleOrphansCommand;
const de_MultipleBackendAbortMPUCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_MultipleBackendAbortMPUCommand = de_MultipleBackendAbortMPUCommand;
const de_MultipleBackendCompleteMPUCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'location': smithy_client_1._json,
        'versionId': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_MultipleBackendCompleteMPUCommand = de_MultipleBackendCompleteMPUCommand;
const de_MultipleBackendDeleteObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'versionId': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_MultipleBackendDeleteObjectCommand = de_MultipleBackendDeleteObjectCommand;
const de_MultipleBackendDeleteObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'versionId': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_MultipleBackendDeleteObjectTaggingCommand = de_MultipleBackendDeleteObjectTaggingCommand;
const de_MultipleBackendHeadObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'lastModified': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_MultipleBackendHeadObjectCommand = de_MultipleBackendHeadObjectCommand;
const de_MultipleBackendInitiateMPUCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'uploadId': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_MultipleBackendInitiateMPUCommand = de_MultipleBackendInitiateMPUCommand;
const de_MultipleBackendPutMPUPartCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'ETag': smithy_client_1.expectString,
        'numberSubParts': smithy_client_1.expectLong,
        'partNumber': smithy_client_1.expectLong,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_MultipleBackendPutMPUPartCommand = de_MultipleBackendPutMPUPartCommand;
const de_MultipleBackendPutObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'location': smithy_client_1._json,
        'versionId': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_MultipleBackendPutObjectCommand = de_MultipleBackendPutObjectCommand;
const de_MultipleBackendPutObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'versionId': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_MultipleBackendPutObjectTaggingCommand = de_MultipleBackendPutObjectTaggingCommand;
const de_PutBucketIndexesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_PutBucketIndexesCommand = de_PutBucketIndexesCommand;
const de_PutDataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        [_SSE]: [, output.headers[_xasse]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
    });
    const data = await collectBodyString(output.body, context);
    contents.Location = data;
    contents.Location = JSON.parse(data);
    return contents;
};
exports.de_PutDataCommand = de_PutDataCommand;
const de_PutMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await (0, core_1.parseJsonBody)(output.body, context))), "body");
    const doc = (0, smithy_client_1.take)(data, {
        'versionId': smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_PutMetadataCommand = de_PutMetadataCommand;
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await (0, core_1.parseJsonErrorBody)(output.body, context)
    };
    const errorCode = (0, core_1.loadRestJsonErrorCode)(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
const throwDefaultError = (0, smithy_client_1.withBaseException)(CloudserverServiceException_1.CloudserverServiceException);
const de_Document = (output, context) => {
    return output;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then(body => context.utf8Encoder(body));
const _AI = "AccountId";
const _AR = "AcceptRanges";
const _B = "Begin";
const _BD = "BeforeDate";
const _C = "Cseq";
const _CC = "CacheControl";
const _CD = "ContentDisposition";
const _CE = "ContentEncoding";
const _CID = "CanonicalID";
const _CL = "ContentLanguage";
const _CMD = "ContentMD5";
const _CR = "ContentRange";
const _CT = "ContentType";
const _DM = "DeleteMarker";
const _DSVI = "DataStoreVersionId";
const _E = "Expiration";
const _EDSN = "ExcludedDataStoreName";
const _ET = "EncodingType";
const _ETa = "ETag";
const _Ex = "Expires";
const _IM = "IfMatch";
const _IMS = "IfModifiedSince";
const _INM = "IfNoneMatch";
const _IUS = "IfUnmodifiedSince";
const _KM = "KeyMarker";
const _L = "Limit";
const _LC = "LocationConstraint";
const _LM = "LastModified";
const _Lo = "Locations";
const _M = "Marker";
const _MK = "MaxKeys";
const _MM = "MissingMeta";
const _P = "Prefix";
const _PC = "PartsCount";
const _PN = "PartNumber";
const _Pr = "Prune";
const _R = "Range";
const _RC = "ReplicationContent";
const _RCC = "ResponseCacheControl";
const _RCD = "ResponseContentDisposition";
const _RCE = "ResponseContentEncoding";
const _RCL = "ResponseContentLanguage";
const _RCT = "ResponseContentType";
const _RCe = "RequestCharged";
const _RE = "ResponseExpires";
const _RES = "ReplicationEndpointSite";
const _RP = "RequestPayer";
const _RS = "ReplicationStatus";
const _RU = "RequestUids";
const _Re = "Restore";
const _S = "Start";
const _SB = "SourceBucket";
const _SC = "StorageClass";
const _SSE = "ServerSideEncryption";
const _SSECA = "SSECustomerAlgorithm";
const _SSECK = "SSECustomerKey";
const _SSECKMD = "SSECustomerKeyMD5";
const _SSEKMSKI = "SSEKMSKeyId";
const _ST = "StorageType";
const _SVI = "SourceVersionId";
const _T = "Tags";
const _TC = "TagCount";
const _TL = "TargetLeader";
const _UI = "UploadId";
const _UMD = "UserMetaData";
const _VI = "VersionId";
const _VIM = "VersionIdMarker";
const _VR = "VersioningRequired";
const _WRL = "WebsiteRedirectLocation";
const _aI = "accountId";
const _ar = "accept-ranges";
const _b = "begin";
const _bd = "before-date";
const _cc = "cache-control";
const _cd = "content-disposition";
const _ce = "content-encoding";
const _cl = "content-language";
const _cm = "content-md5";
const _cr = "content-range";
const _ct = "content-type";
const _e = "etag";
const _edsn = "excluded-data-store-name";
const _et = "encoding-type";
const _ex = "expires";
const _im = "if-match";
const _ims = "if-modified-since";
const _inm = "if-none-match";
const _ius = "if-unmodified-since";
const _km = "key-marker";
const _l = "limit";
const _lm = "last-modified";
const _lt = "list-type";
const _m = "marker";
const _mk = "max-keys";
const _o = "operation";
const _p = "prefix";
const _pN = "partNumber";
const _r = "range";
const _rcc = "response-cache-control";
const _rcd = "response-content-disposition";
const _rce = "response-content-encoding";
const _rcl = "response-content-language";
const _rct = "response-content-type";
const _re = "response-expires";
const _tL = "targetLeader";
const _v = "v2";
const _vI = "versionId";
const _vim = "version-id-marker";
const _xadm = "x-amz-delete-marker";
const _xae = "x-amz-expiration";
const _xalc = "x-amz-location-constraint";
const _xamm = "x-amz-missing-meta";
const _xampc = "x-amz-mp-parts-count";
const _xar = "x-amz-restore";
const _xarc = "x-amz-request-charged";
const _xarp = "x-amz-request-payer";
const _xars = "x-amz-replication-status";
const _xasc = "x-amz-storage-class";
const _xasse = "x-amz-server-side-encryption";
const _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
const _xasseca = "x-amz-server-side-encryption-customer-algorithm";
const _xasseck = "x-amz-server-side-encryption-customer-key";
const _xasseckm = "x-amz-server-side-encryption-customer-key-md5";
const _xatc = "x-amz-tagging-count";
const _xavi = "x-amz-version-id";
const _xawrl = "x-amz-website-redirect-location";
const _xrlc = "x-raft-log-cseq";
const _xrlp = "x-raft-log-prune";
const _xrls = "x-raft-log-start";
const _xscc = "x-scal-cache-control";
const _xscd = "x-scal-content-disposition";
const _xsce = "x-scal-content-encoding";
const _xsci = "x-scal-canonical-id";
const _xsct = "x-scal-content-type";
const _xsdsvi = "x-scal-data-store-version-id";
const _xsl = "x-scal-locations";
const _xspn = "x-scal-part-number";
const _xsrc = "x-scal-replication-content";
const _xsres = "x-scal-replication-endpoint-site";
const _xsru = "x-scal-request-uids";
const _xssb = "x-scal-source-bucket";
const _xssc = "x-scal-storage-class";
const _xsst = "x-scal-storage-type";
const _xssvi = "x-scal-source-version-id";
const _xst = "x-scal-tags";
const _xsui = "x-scal-upload-id";
const _xsum = "x-scal-user-metadata";
const _xsvi = "x-scal-version-id";
const _xsvr = "x-scal-versioning-required";
