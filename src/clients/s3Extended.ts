import { Readable } from 'stream';
import {
    GetObjectAttributesCommand,
    GetObjectAttributesCommandInput,
    GetObjectAttributesCommandOutput,
    ListObjectsCommand,
    ListObjectsCommandInput,
    ListObjectsV2Command,
    ListObjectsV2CommandInput,
    ListObjectVersionsCommand,
    ListObjectVersionsCommandInput,
    ObjectAttributes
} from '@aws-sdk/client-s3';
import { streamCollector } from '@smithy/node-http-handler';
import { XMLParser } from 'fast-xml-parser';

const extendCommandWithExtraParametersMiddleware = (query: string) =>
    (next: any) => async (args: any) => {
        const request = args.request as any;
        if (request.query) {
            request.query.search = query;
        } else {
            request.query = { search: query };
        }
        return next(args);
    };

export interface ListObjectsExtendedInput extends ListObjectsCommandInput {
    Query: string;
}

export class ListObjectsExtendedCommand extends ListObjectsCommand {
    constructor(input: ListObjectsExtendedInput) {
        super(input);
        
        this.middlewareStack.add(
            extendCommandWithExtraParametersMiddleware(input.Query),
            { step: 'build', name: 'extendCommandWithExtraParameters' }
        );
    }
}

export interface ListObjectsV2ExtendedInput extends ListObjectsV2CommandInput {
    Query: string;
}

export class ListObjectsV2ExtendedCommand extends ListObjectsV2Command {
    constructor(input: ListObjectsV2ExtendedInput) {
        super(input);
        
        this.middlewareStack.add(
            extendCommandWithExtraParametersMiddleware(input.Query),
            { step: 'build', name: 'extendCommandWithExtraParameters' }
        );
    }
}

export interface ListObjectVersionsExtendedInput extends ListObjectVersionsCommandInput {
    Query: string;
}

export class ListObjectVersionsExtendedCommand extends ListObjectVersionsCommand {
    constructor(input: ListObjectVersionsExtendedInput) {
        super(input);

        this.middlewareStack.add(
            extendCommandWithExtraParametersMiddleware(input.Query),
            { step: 'build', name: 'extendCommandWithExtraParameters' }
        );
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const overrideObjectAttributesHeaderMiddleware = (attributes: string[]) => (next: any) => async (args: any) => {
    const request = args.request;
    request.headers['x-amz-object-attributes'] = attributes.join(',');
    return next(args);
};

const USER_METADATA_PREFIX = 'x-amz-meta-';

function parseUserMetadataFromXml(xml: string): Record<string, string> {
    const parsed = new XMLParser().parse(xml);
    const response = parsed?.GetObjectAttributesResponse;
    if (!response) {
        return {};
    }

    const metadata: Record<string, string> = {};
    for (const [key, value] of Object.entries(response)) {
        if (key.startsWith(USER_METADATA_PREFIX)) {
            metadata[key] = String(value);
        }
    }

    return metadata;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const captureResponseBodyMiddleware = (captured: { xml: string }) => (next: any) => async (args: any) => {
    const { response } = await next(args);

    if (response?.body) {
        const collected = await streamCollector(response.body);
        const buffer = Buffer.from(collected);
        // eslint-disable-next-line no-param-reassign
        captured.xml = buffer.toString('utf-8');
        response.body = Readable.from([buffer]);
    }

    return { response };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseUserMetadataMiddleware = (captured: { xml: string }) => (next: any) => async (args: any) => {
    const result = await next(args);
    Object.assign(result.output, parseUserMetadataFromXml(captured.xml));
    return result;
};

export interface GetObjectAttributesExtendedInput extends Omit<GetObjectAttributesCommandInput, 'ObjectAttributes'> {
    ObjectAttributes: (ObjectAttributes | `x-amz-meta-${string}`)[];
}

export interface GetObjectAttributesExtendedOutput extends GetObjectAttributesCommandOutput {
    [key: `x-amz-meta-${string}`]: string;
}

export class GetObjectAttributesExtendedCommand extends GetObjectAttributesCommand {
    constructor(input: GetObjectAttributesExtendedInput) {
        super(input as GetObjectAttributesCommandInput);

        const captured = { xml: '' };

        this.middlewareStack.add(overrideObjectAttributesHeaderMiddleware(input.ObjectAttributes), {
            step: 'build',
            name: 'overrideObjectAttributesHeader',
        });

        this.middlewareStack.add(captureResponseBodyMiddleware(captured), {
            step: 'deserialize',
            name: 'captureResponseBody',
            priority: 'low', // runs before SDK deserializer
        });

        this.middlewareStack.add(parseUserMetadataMiddleware(captured), {
            step: 'deserialize',
            name: 'parseUserMetadata',
            priority: 'high', // runs after SDK deserializer
        });
    }
}
