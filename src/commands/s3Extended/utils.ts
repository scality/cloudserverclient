import { Readable } from 'stream';
import { streamCollector } from '@smithy/node-http-handler';
import { XMLParser } from 'fast-xml-parser';

export const USER_METADATA_PREFIX = 'x-amz-meta-';

 
export function extendCommandWithExtraParametersMiddleware(query: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (next: any) => async (args: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const request = args.request as any;
        if (request.query) {
            request.query.search = query;
        } else {
            request.query = { search: query };
        }
        return next(args);
    };
}

 
export function overrideObjectAttributesHeaderMiddleware(headerName: string, attributes: string[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (next: any) => async (args: any) => {
        const request = args.request;
        request.headers[headerName] = attributes.join(',');
        return next(args);
    };
}

export function captureResponseBodyMiddleware(captured: { xml: string }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (next: any) => async (args: any) => {
        const { response } = await next(args);

        if (response?.body) {
            const collected = await streamCollector(response.body);
            const buffer = Buffer.from(collected);
            // eslint-disable-next-line no-param-reassign
            captured.xml = buffer.toString('utf-8');
            // Re-create the body stream so the SDK deserializer can still consume it
            response.body = Readable.from([buffer]);
        }

        return { response };
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractUserMetadata(source: Record<string, any>, target: Record<string, string>): void {
    for (const [key, value] of Object.entries(source)) {
        if (key.startsWith(USER_METADATA_PREFIX)) {
            // eslint-disable-next-line no-param-reassign
            target[key] = String(value);
        }
    }
}

export function parseUserMetadataMiddleware(captured: { xml: string }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (next: any) => async (args: any) => {
        const result = await next(args);
        const parsed = new XMLParser().parse(captured.xml);
        const response = parsed?.GetObjectAttributesResponse;
        if (response) {
            extractUserMetadata(response, result.output);
        }
        return result;
    };
}

 
export function parseListObjectsUserMetadataMiddleware(captured: { xml: string }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (next: any) => async (args: any) => {
        const result = await next(args);
        const parsed = new XMLParser().parse(captured.xml);
        const xmlContents = parsed?.ListBucketResult?.Contents;
        if (result.output.Contents && xmlContents) {
            for (let i = 0; i < result.output.Contents.length; i++) {
                extractUserMetadata(xmlContents[i], result.output.Contents[i]);
            }
        }
        return result;
    };
}
