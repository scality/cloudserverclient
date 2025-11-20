"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContentLengthMiddleware = addContentLengthMiddleware;
exports.createSigningUnescapePathMiddleware = createSigningUnescapePathMiddleware;
exports.createCustomErrorMiddleware = createCustomErrorMiddleware;
const fast_xml_parser_1 = require("fast-xml-parser");
const typescript_codegen_1 = require("../build/smithy/source/typescript-codegen");
// From : https://github.com/smithy-lang/smithy-typescript/blob/main/packages/service-error-classification/src/constants.ts
const transientErrors = new Set([500, 502, 503, 504]);
const nodejsTimeoutErrorCodes = new Set(["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"]);
const transientErrorCodes = new Set(["TimeoutError", "RequestTimeout", "RequestTimeoutException"]);
const throttlingErrorCodes = new Set([
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
]);
/**
 * Adds middleware to manually set the Content-Length header on a command.
 *
 * This is useful when streaming data where the SDK cannot automatically determine
 * the content length, preventing it from falling back to chunked transfer encoding.
 *
 * @param command - The command to add middleware to
 * @param contentLength - The content length value (number or string)
 */
function addContentLengthMiddleware(command, contentLength) {
    if (!contentLength) {
        return;
    }
    const commandWithMiddleware = command;
    if (!commandWithMiddleware.middlewareStack) {
        throw new Error('Command does not have a middleware stack');
    }
    commandWithMiddleware.middlewareStack.add((next) => async (args) => {
        const request = args.request;
        if (request && request.headers) {
            request.headers['content-length'] = String(contentLength);
        }
        return next(args);
    }, { step: 'build', priority: 'high' });
    return;
}
function createSigningUnescapePathMiddleware() {
    return (next) => async (args) => {
        // If a key, or any argument contains a "/", our client 
        // replace it with "%2F" during signing, and the signature
        // verification fails on Arsenal.
        // Here, we replace all "%2F" back to "/", before the signing
        // step
        const request = args.request;
        request.path = request.path.replace(/%2F/g, '/');
        return next(args);
    };
}
function createCustomErrorMiddleware() {
    return (next) => async (args) => {
        try {
            return await next(args);
        }
        catch (error) {
            const parseXmlError = (xml) => {
                try {
                    const result = new fast_xml_parser_1.XMLParser({}).parse(xml);
                    return {
                        code: result.Error?.Code,
                        message: result.Error?.Message,
                        requestId: result.Error?.RequestId,
                    };
                }
                catch (parseError) {
                    return {
                        code: null,
                        message: 'Malformed XML error response',
                        requestId: null,
                    };
                }
            };
            // Set retryable flag. Logic similar to these documentations :
            // https://github.com/smithy-lang/smithy-typescript/blob/main/packages/service-error-classification/src/index.ts
            // https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html
            const isRetryable = (statusCode, errorCode) => {
                return transientErrors.has(statusCode) ||
                    nodejsTimeoutErrorCodes.has(errorCode || '') ||
                    transientErrorCodes.has(errorCode || '') ||
                    throttlingErrorCodes.has(errorCode || '');
            };
            const response = error.$response;
            const statusCode = error.$metadata?.httpStatusCode;
            const headers = response?.headers || {};
            const contentType = (headers['content-type'] || '').toLowerCase();
            if (contentType.includes('application/json')) {
                const retryable = isRetryable(statusCode, error.code);
                error.$retryable = retryable;
                error.retryable = retryable; // For backward compatibility with sdk v2
                throw error;
            }
            if (contentType.includes('application/xml') || contentType.includes('text/xml')) {
                const body = response?.body;
                const xml = body?.toString() || '';
                const errorInfo = parseXmlError(xml);
                const xmlError = new typescript_codegen_1.CloudserverServiceException({
                    name: errorInfo.code || error.name,
                    message: errorInfo.message || 'XML error response',
                    $fault: statusCode >= 500 ? 'server' : 'client',
                    $metadata: error.$metadata || {},
                    $response: error.$response,
                });
                xmlError.parsedXml = errorInfo;
                const retryable = isRetryable(statusCode, errorInfo.code);
                xmlError.$retryable = retryable;
                xmlError.retryable = retryable;
                throw xmlError;
            }
            const s3cNginxProxyResponse = contentType.includes('text/html');
            if (s3cNginxProxyResponse) {
                const body = response?.body;
                const html = body?.toString() || '';
                const title = html.match(/<title[^>]*>([^<]+)<\/title>/i);
                const message = title && title[1] || 'HTML error response';
                const htmlError = new typescript_codegen_1.CloudserverServiceException({
                    name: `HTML ${response?.reason || 'Error'}`,
                    message: message,
                    $fault: statusCode >= 500 ? 'server' : 'client',
                    $metadata: error.$metadata || {},
                    $response: error.$response,
                });
                htmlError.rawBody = html;
                throw htmlError;
            }
            throw error;
        }
    };
}
