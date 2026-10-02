import { AwsRestJsonProtocol } from '@aws-sdk/core/protocols';
import { addExpectContinueMiddleware } from '@aws-sdk/middleware-expect-continue';
import { collectBody } from '@smithy/core/protocols';
import {
    HandlerExecutionContext,
    HttpResponse,
    MetadataBearer,
    MiddlewareStack,
    OperationSchema,
    RequestHandler,
    SerdeFunctions,
} from '@smithy/types';
import { XMLParser } from 'fast-xml-parser';

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

function parseXmlError(body: string) {
    try {
        const { Error: error } = new XMLParser({}).parse(body);
        return {
            code: error?.Code || 'UnknownError',
            message: error?.Message || 'XML error response',
        };
    } catch (_parseError) {
        return {
            code: 'UnknownError',
            message: 'Malformed XML error response',
        };
    }
}

function parseHtmlError(body: string, response: HttpResponse) {
    const title = body.match(/<title[^>]*>([^<]+)<\/title>/i);
    return {
        code: `HTML ${response.reason || 'Error'}`,
        message: title?.[1] || 'HTML error response',
        rawBody: body,
    };
}

/**
 * restJson1 protocol that also understands the XML and HTML error responses
 * that cloudserver and the S3C nginx proxy may return regardless of the
 * service protocol. These bodies would otherwise fail JSON parsing: they are
 * parsed here and handed to the regular error handling, so they map to the
 * modeled error classes or to the service base exception, like JSON errors.
 */
export class CloudserverRestJsonProtocol extends AwsRestJsonProtocol {
    async deserializeResponse<Output extends MetadataBearer>(
        operationSchema: OperationSchema,
        context: HandlerExecutionContext & SerdeFunctions,
        response: HttpResponse,
    ): Promise<Output> {
        if (response.statusCode >= 300) {
            const contentType = String(response.headers['content-type'] || '').toLowerCase();
            const isXml = contentType.includes('application/xml') || contentType.includes('text/xml');
            const isHtml = contentType.includes('text/html');
            if (isXml || isHtml) {
                const body = (await collectBody(response.body, context)).transformToString();
                // Keep the raw body readable on the error's $response
                // eslint-disable-next-line no-param-reassign
                response.body = body;
                const errorData = isXml ? parseXmlError(body) : parseHtmlError(body, response);
                return this.handleError(operationSchema, context, response, errorData,
                    this.deserializeMetadata(response));
            }
        }
        return super.deserializeResponse(operationSchema, context, response);
    }
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
