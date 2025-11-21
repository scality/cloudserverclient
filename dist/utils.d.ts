/**
 * Adds middleware to manually set the Content-Length header on a command.
 *
 * This is useful when streaming data where the SDK cannot automatically determine
 * the content length, preventing it from falling back to chunked transfer encoding.
 *
 * @param command - The command to add middleware to
 * @param contentLength - The content length value (number or string)
 */
export declare function addContentLengthMiddleware<TCommand>(command: TCommand, contentLength: number | string | undefined): void;
export declare function createCustomErrorMiddleware(): (next: any) => (args: any) => Promise<any>;
