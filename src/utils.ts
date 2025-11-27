import { XMLParser } from 'fast-xml-parser';
import { CloudserverServiceException } from '../build/smithy/source/typescript-codegen';

/**
 * Adds middleware to manually set the Content-Length header on a command.
 * 
 * This is useful when streaming data where the SDK cannot automatically determine
 * the content length, preventing it from falling back to chunked transfer encoding.
 * 
 * @param command - The command to add middleware to
 * @param contentLength - The content length value (number or string)
 */
export function addContentLengthMiddleware<TCommand>(
    command: TCommand,
    contentLength: number | string | undefined
): void {
    if (!contentLength) {
        return;
    }

    const commandWithMiddleware = command as any;
    if (!commandWithMiddleware.middlewareStack) {
        throw new Error('Command does not have a middleware stack');
    }

    commandWithMiddleware.middlewareStack.add(
        (next: any) => async (args: any) => {
            const request = args.request as any;
            if (request?.headers && !request.headers['content-length']) {
                request.headers['content-length'] = String(contentLength);
            }
            return next(args);
        },
        { step: 'build', priority: 'high' }
    );

    return;
}

export function createCustomErrorMiddleware() {
    return (next: any) => async (args: any) => {
        try {
            return await next(args);
        } catch (error: any) {
            const parseXmlError = (xml: string) => {
                try {
                    const result = new XMLParser({}).parse(xml);
                    return {
                        code: result.Error?.Code,
                        message: result.Error?.Message,
                        requestId: result.Error?.RequestId,
                    };
                } catch (parseError) {
                    return {
                        code: null,
                        message: 'Malformed XML error response',
                        requestId: null,
                    };
                }
            };

            const response = error.$response;
            const statusCode = error.$metadata?.httpStatusCode;
            const headers = response?.headers || {};
            const contentType = (headers['content-type'] || '').toLowerCase();
            if (contentType.includes('application/xml') || contentType.includes('text/xml')) {
                const body = response?.body;
                const xml = body?.toString() || '';
                const errorInfo = parseXmlError(xml);
                
                const xmlError: any = new CloudserverServiceException({
                    name: errorInfo.code || error.name,
                    message: errorInfo.message || 'XML error response',
                    $fault: statusCode >= 500 ? 'server' : 'client',
                    $metadata: error.$metadata || {},
                    $response: error.$response,
                });
                xmlError.parsedXml = errorInfo;
                xmlError.code = errorInfo.code;

                throw xmlError;
            }

            const s3cNginxProxyResponse = contentType.includes('text/html');
            if (s3cNginxProxyResponse) {
                const body = response?.body;
                const html = body?.toString() || '';
                const title = html.match(/<title[^>]*>([^<]+)<\/title>/i);
                const message = title && title[1] || 'HTML error response';

                const htmlError: any = new CloudserverServiceException({
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
