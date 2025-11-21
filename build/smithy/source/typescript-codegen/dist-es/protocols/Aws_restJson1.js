import { CloudserverServiceException as __BaseException } from "../models/CloudserverServiceException";
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody, } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { dateToUtcString as __dateToUtcString, expectBoolean as __expectBoolean, expectInt32 as __expectInt32, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, parseBoolean as __parseBoolean, parseRfc7231DateTime as __parseRfc7231DateTime, serializeDateTime as __serializeDateTime, strictParseInt32 as __strictParseInt32, _json, collectBody, isSerializableHeaderValue, map, take, withBaseException, } from "@smithy/smithy-client";
export const se_BatchDeleteCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        'content-type': 'application/json',
        [_ius]: input[_IUS],
        [_xssc]: input[_SC],
        [_xst]: input[_T],
        [_xsct]: input[_CT],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/batchdelete/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    let body;
    body = JSON.stringify(take(input, {
        'Locations': _ => _json(_),
    }));
    b.m("POST")
        .h(headers)
        .b(body);
    return b.build();
};
export const se_DeleteBucketIndexesCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/index/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = map({
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
export const se_DeleteObjectFromExpirationCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/expiration/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = map({
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("DELETE")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
export const se_GetBucketCseqCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
export const se_GetBucketIndexesCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
export const se_GetBucketMetadataCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
export const se_GetMetadataCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/metadata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = map({
        [_vI]: [, input[_VI]],
    });
    let body;
    b.m("GET")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
export const se_GetObjectCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_im]: input[_IM],
        [_ims]: [() => isSerializableHeaderValue(input[_IMS]), () => __dateToUtcString(input[_IMS]).toString()],
        [_inm]: input[_INM],
        [_ius]: [() => isSerializableHeaderValue(input[_IUS]), () => __dateToUtcString(input[_IUS]).toString()],
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
    const query = map({
        [_rcc]: [, input[_RCC]],
        [_rcd]: [, input[_RCD]],
        [_rce]: [, input[_RCE]],
        [_rcl]: [, input[_RCL]],
        [_rct]: [, input[_RCT]],
        [_re]: [() => input.ResponseExpires !== void 0, () => (__serializeDateTime(input[_RE]).toString())],
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
export const se_GetObjectListCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
export const se_GetRaftBucketsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
export const se_GetRaftIdCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
export const se_GetRaftLogCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/metadata/admin/raft_sessions/{LogId}/log");
    b.p('LogId', () => input.LogId, '{LogId}', false);
    const query = map({
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
export const se_ListLifecycleCurrentsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/lifecycle/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = map({
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
export const se_ListLifecycleNonCurrentsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/lifecycle/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = map({
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
export const se_ListLifecycleOrphansCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/lifecycle/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = map({
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
export const se_MultipleBackendAbortMPUCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xsst]: input[_ST],
        [_xssc]: input[_SC],
        [_xsui]: input[_UI],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = map({
        [_o]: [, "abortmpu"],
    });
    let body;
    b.m("DELETE")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
export const se_MultipleBackendCompleteMPUCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
    const query = map({
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
export const se_MultipleBackendDeleteObjectCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xsst]: input[_ST],
        [_xssc]: input[_SC],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = map({
        [_o]: [, "deleteobject"],
    });
    let body;
    b.m("DELETE")
        .h(headers)
        .q(query)
        .b(body);
    return b.build();
};
export const se_MultipleBackendDeleteObjectTaggingCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
    const query = map({
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
export const se_MultipleBackendHeadObjectCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
export const se_MultipleBackendInitiateMPUCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
    const query = map({
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
export const se_MultipleBackendPutMPUPartCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        'x-amz-content-sha256': 'UNSIGNED-PAYLOAD',
        'content-type': 'application/octet-stream',
        [_xsst]: input[_ST],
        [_xssc]: input[_SC],
        [_xspn]: [() => isSerializableHeaderValue(input[_PN]), () => input[_PN].toString()],
        [_xsui]: input[_UI],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = map({
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
export const se_MultipleBackendPutObjectCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        'x-amz-content-sha256': 'UNSIGNED-PAYLOAD',
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
    b.bp("/_/backbeat/multiplebackenddata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = map({
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
export const se_MultipleBackendPutObjectTaggingCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
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
    const query = map({
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
export const se_PutBucketIndexesCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/index/{Bucket}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    const query = map({
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
export const se_PutDataCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        'x-amz-content-sha256': 'UNSIGNED-PAYLOAD',
        'content-type': 'application/octet-stream',
        [_cm]: input[_CMD],
        [_xsci]: input[_CID],
        [_xsvr]: [() => isSerializableHeaderValue(input[_VR]), () => input[_VR].toString()],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/data/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = map({
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
export const se_PutMetadataCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        'content-type': 'application/octet-stream',
        [_cm]: input[_CMD],
        [_xsrc]: input[_RC],
        [_xsvr]: [() => isSerializableHeaderValue(input[_VR]), () => input[_VR].toString()],
        [_xsru]: input[_RU],
    });
    b.bp("/_/backbeat/metadata/{Bucket}/{Key+}");
    b.p('Bucket', () => input.Bucket, '{Bucket}', false);
    b.p('Key', () => input.Key, '{Key+}', true);
    const query = map({
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
export const de_BatchDeleteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_DeleteBucketIndexesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_DeleteObjectFromExpirationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'versionId': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_GetBucketCseqCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = await collectBodyString(output.body, context);
    contents.CseqInfo = data;
    contents.CseqInfo = JSON.parse(data);
    return contents;
};
export const de_GetBucketIndexesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'Indexes': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_GetBucketMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'acl': _json,
        'cors': _json,
        'creationDate': __expectString,
        'deleted': __expectBoolean,
        'lifecycleConfiguration': _json,
        'locationConstraint': __expectString,
        'mdBucketModelVersion': __expectInt32,
        'name': __expectString,
        'owner': __expectString,
        'ownerDisplayName': __expectString,
        'readLocationConstraint': __expectString,
        'replicationConfiguration': _json,
        'serverSideEncryption': _json,
        'transient': __expectBoolean,
        'uid': __expectString,
        'versioningConfiguration': _json,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_GetMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'Body': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_GetObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_DM]: [() => void 0 !== output.headers[_xadm], () => __parseBoolean(output.headers[_xadm])],
        [_AR]: [, output.headers[_ar]],
        [_E]: [, output.headers[_xae]],
        [_Re]: [, output.headers[_xar]],
        [_LM]: [() => void 0 !== output.headers[_lm], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_lm]))],
        [_ETa]: [, output.headers[_e]],
        [_MM]: [() => void 0 !== output.headers[_xamm], () => __strictParseInt32(output.headers[_xamm])],
        [_VI]: [, output.headers[_xavi]],
        [_CC]: [, output.headers[_cc]],
        [_CD]: [, output.headers[_cd]],
        [_CE]: [, output.headers[_ce]],
        [_CL]: [, output.headers[_cl]],
        [_CR]: [, output.headers[_cr]],
        [_CT]: [, output.headers[_ct]],
        [_Ex]: [() => void 0 !== output.headers[_ex], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_ex]))],
        [_WRL]: [, output.headers[_xawrl]],
        [_SSE]: [, output.headers[_xasse]],
        [_SSECA]: [, output.headers[_xasseca]],
        [_SSECKMD]: [, output.headers[_xasseckm]],
        [_SSEKMSKI]: [, output.headers[_xasseakki]],
        [_SC]: [, output.headers[_xasc]],
        [_RCe]: [, output.headers[_xarc]],
        [_RS]: [, output.headers[_xars]],
        [_PC]: [() => void 0 !== output.headers[_xampc], () => __strictParseInt32(output.headers[_xampc])],
        [_TC]: [() => void 0 !== output.headers[_xatc], () => __strictParseInt32(output.headers[_xatc])],
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
export const de_GetObjectListCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'CommonPrefixes': _json,
        'Contents': _json,
        'Delimiter': __expectString,
        'IsTruncated': __expectBoolean,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_GetRaftBucketsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = await collectBodyString(output.body, context);
    contents.Buckets = data;
    contents.Buckets = JSON.parse(data);
    return contents;
};
export const de_GetRaftIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = await collectBodyString(output.body, context);
    contents.RaftId = __expectString(data);
    return contents;
};
export const de_GetRaftLogCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        [_S]: [() => void 0 !== output.headers[_xrls], () => __strictParseInt32(output.headers[_xrls])],
        [_C]: [() => void 0 !== output.headers[_xrlc], () => __strictParseInt32(output.headers[_xrlc])],
        [_Pr]: [() => void 0 !== output.headers[_xrlp], () => __strictParseInt32(output.headers[_xrlp])],
    });
    const data = output.body;
    context.sdkStreamMixin(data);
    contents.Body = data;
    return contents;
};
export const de_ListLifecycleCurrentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'BeforeDate': __expectString,
        'Contents': _json,
        'IsTruncated': __expectBoolean,
        'Marker': __expectString,
        'MaxKeys': __expectInt32,
        'Name': __expectString,
        'NextMarker': __expectString,
        'Prefix': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_ListLifecycleNonCurrentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'BeforeDate': __expectString,
        'Contents': _json,
        'IsTruncated': __expectBoolean,
        'KeyMarker': __expectString,
        'MaxKeys': __expectInt32,
        'Name': __expectString,
        'NextKeyMarker': __expectString,
        'NextVersionIdMarker': __expectString,
        'Prefix': __expectString,
        'VersionIdMarker': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_ListLifecycleOrphansCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'BeforeDate': __expectString,
        'Contents': _json,
        'IsTruncated': __expectBoolean,
        'Marker': __expectString,
        'MaxKeys': __expectInt32,
        'Name': __expectString,
        'NextMarker': __expectString,
        'Prefix': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_MultipleBackendAbortMPUCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_MultipleBackendCompleteMPUCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'location': _json,
        'versionId': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_MultipleBackendDeleteObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'versionId': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_MultipleBackendDeleteObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'versionId': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_MultipleBackendHeadObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'lastModified': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_MultipleBackendInitiateMPUCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'uploadId': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_MultipleBackendPutMPUPartCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'ETag': __expectString,
        'numberSubParts': __expectInt32,
        'partNumber': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_MultipleBackendPutObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'location': _json,
        'versionId': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_MultipleBackendPutObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'versionId': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_PutBucketIndexesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
export const de_PutDataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
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
export const de_PutMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    const doc = take(data, {
        'versionId': __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context)
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode
    });
};
const throwDefaultError = withBaseException(__BaseException);
const de_Document = (output, context) => {
    return output;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then(body => context.utf8Encoder(body));
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
