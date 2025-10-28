"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudserverClient = void 0;
const fast_xml_parser_1 = require("fast-xml-parser");
const typescript_codegen_1 = require("../build/smithy/source/typescript-codegen");
__exportStar(require("../build/smithy/source/typescript-codegen"), exports);
class CloudserverClient extends typescript_codegen_1.CloudserverClient {
    constructor(config) {
        super(config);
        this.createCustomErrorMiddleware = () => {
            return (next) => async (args) => {
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
                try {
                    return await next(args);
                }
                catch (error) {
                    const response = error.$response;
                    const statusCode = error.$metadata?.httpStatusCode;
                    const headers = response?.headers || {};
                    const contentType = (headers['content-type'] || '').toLowerCase();
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
                        throw xmlError;
                    }
                    // S3C has an nginx proxy that can return HTML error responses
                    // For example a 400 Request Header Or Cookie Too Large
                    // That would be converted to UnknownError: BadRequest
                    if (contentType.includes('text/html')) {
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
        };
        this.middlewareStack.add(this.createCustomErrorMiddleware(), {
            step: 'deserialize',
            name: 'cloudserverErrorHandler'
        });
    }
}
exports.CloudserverClient = CloudserverClient;
