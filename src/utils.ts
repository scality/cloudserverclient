import { addExpectContinueMiddleware } from '@aws-sdk/middleware-expect-continue';
import { MiddlewareStack, RequestHandler, StreamCollector } from '@smithy/types';
import { XMLParser } from 'fast-xml-parser';
import {
    CloudserverBackbeatRoutesServiceException
} from '../build/smithy/cloudserverBackbeatRoutes/typescript-codegen';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithMiddlewareStack = { middlewareStack?: MiddlewareStack<any, any> };

/**
 * Attach the AWS SDK Expect: 100-continue middleware to a single command.
 *
 * Use this on commands whose target route honors 100-continue server-side.
 * Pass the client's requestHandler so the underlying middleware can skip
 * the header when running on FetchHttpHandler.
 *
 * @param command - The command to attach the middleware to.
 * @param requestHandler - The client's requestHandler, used by the AWS SDK
 *   middleware to detect FetchHttpHandler and skip the header in that case.
 * @param expectContinueHeader - Controls when the header is set:
 *   - `true` (default): always set the header on body-carrying requests.
 *   - `false`: never set the header (middleware no-op).
 *   - `number`: only set the header when the body's Content-Length is
 *     greater than or equal to this threshold (in bytes). Useful to skip
 *     the handshake cost on small payloads.
 */
export function attachExpectContinueMiddleware<TCommand>(
    command: TCommand & WithMiddlewareStack,
    requestHandler?: RequestHandler<unknown, unknown>,
    expectContinueHeader: boolean | number = true,
): TCommand {
    if (!command.middlewareStack) {
        throw new Error('Command does not have a middleware stack');
    }

    command.middlewareStack.add(
        addExpectContinueMiddleware({
            runtime: 'node',
            requestHandler,
            expectContinueHeader,
        }),
        { step: 'build', name: 'expectContinue' },
    );

    return command;
}

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

function parseXmlError(xml: string) {
    try {
        const result = new XMLParser({}).parse(xml);
        return {
            code: result.Error?.Code,
            message: result.Error?.Message,
            requestId: result.Error?.RequestId,
        };
    } catch (_parseError) {
        return {
            code: null,
            message: 'Malformed XML error response',
            requestId: null,
        };
    }
}

/**
 * Turns XML and HTML error responses into service exceptions, as cloudserver
 * and the S3C nginx proxy may return them regardless of the service protocol.
 *
 * Must run after (inside) the deserializer, on the raw HTTP response: errors
 * thrown by the deserializer no longer carry the response body.
 */
export function createCustomErrorMiddleware(config: { streamCollector: StreamCollector }) {
    return (next: any) => async (args: any) => {
        const result = await next(args);
        const response = result?.response;
        const statusCode = response?.statusCode;
        if (!statusCode || statusCode < 300) {
            return result;
        }

        const headers = response.headers || {};
        const contentType = (headers['content-type'] || '').toLowerCase();
        const isXml = contentType.includes('application/xml') || contentType.includes('text/xml');
        const s3cNginxProxyResponse = contentType.includes('text/html');
        if (!isXml && !s3cNginxProxyResponse) {
            return result;
        }

        const body = new TextDecoder().decode(await config.streamCollector(response.body));
        response.body = body;
        const $fault = statusCode >= 500 ? 'server' : 'client';
        const $metadata = {
            httpStatusCode: statusCode,
            requestId: headers['x-amz-request-id'],
            extendedRequestId: headers['x-amz-id-2'],
        };

        if (isXml) {
            const errorInfo = parseXmlError(body);
            const xmlError: any = new CloudserverBackbeatRoutesServiceException({
                name: errorInfo.code || 'UnknownError',
                message: errorInfo.message || 'XML error response',
                $fault,
                $metadata,
            });
            Object.defineProperty(xmlError, '$response', { value: response, enumerable: false });
            xmlError.parsedXml = errorInfo;
            xmlError.code = errorInfo.code;
            throw xmlError;
        }

        const title = body.match(/<title[^>]*>([^<]+)<\/title>/i);
        const htmlError: any = new CloudserverBackbeatRoutesServiceException({
            name: `HTML ${response.reason || 'Error'}`,
            message: title && title[1] || 'HTML error response',
            $fault,
            $metadata,
        });
        Object.defineProperty(htmlError, '$response', { value: response, enumerable: false });
        htmlError.rawBody = body;
        throw htmlError;
    };
}

export function attachReqUids(s3req, uuid: string) {
    s3req.middlewareStack.add(
        next => async args => {
            if (args.request && args.request.headers) {
                // eslint-disable-next-line no-param-reassign
                args.request.headers['X-Scal-Request-Uids'] = uuid;
            }
            return next(args);
        },
        {
            step: 'build',
            name: 'attachReqUids',
        }
    );
}
