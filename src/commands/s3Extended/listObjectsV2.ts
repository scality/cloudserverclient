import {
    ListObjectsV2Command,
    ListObjectsV2CommandInput,
    ListObjectsV2CommandOutput,
    OptionalObjectAttributes,
    _Object,
} from '@aws-sdk/client-s3';
import {
    extendCommandWithExtraParametersMiddleware,
    overrideObjectAttributesHeaderMiddleware,
    captureResponseBodyMiddleware,
    parseListObjectsUserMetadataMiddleware,
} from './utils';

export interface ListObjectsV2ExtendedInput extends ListObjectsV2CommandInput {
    Query?: string;
    ObjectAttributes?: (OptionalObjectAttributes | `x-amz-meta-${string}`)[];
}

export interface ListObjectsV2ExtendedContentEntry extends _Object {
    [key: `x-amz-meta-${string}`]: string;
}

export interface ListObjectsV2ExtendedOutput extends ListObjectsV2CommandOutput {
    Contents?: ListObjectsV2ExtendedContentEntry[];
}

export class ListObjectsV2ExtendedCommand extends ListObjectsV2Command {
    constructor(input: ListObjectsV2ExtendedInput) {
        super(input);

        if (input.Query) {
            this.middlewareStack.add(
                extendCommandWithExtraParametersMiddleware(input.Query),
                { step: 'build', name: 'extendCommandWithExtraParameters' }
            );
        }

        if (input.ObjectAttributes?.length) {
            const captured = { xml: '' };

            this.middlewareStack.add(
                overrideObjectAttributesHeaderMiddleware(
                    'x-amz-optional-object-attributes', input.ObjectAttributes), {
                    step: 'build',
                    name: 'overrideObjectAttributesHeader',
                });

            this.middlewareStack.add(captureResponseBodyMiddleware(captured), {
                step: 'deserialize',
                name: 'captureResponseBody',
                priority: 'low',
            });

            this.middlewareStack.add(parseListObjectsUserMetadataMiddleware(captured), {
                step: 'deserialize',
                name: 'parseUserMetadata',
                priority: 'high',
            });
        }
    }
}
