import {
    GetObjectAttributesCommand,
    GetObjectAttributesCommandInput,
    GetObjectAttributesCommandOutput,
    ObjectAttributes,
} from '@aws-sdk/client-s3';
import {
    overrideObjectAttributesHeaderMiddleware,
    captureResponseBodyMiddleware,
    parseUserMetadataMiddleware,
} from './utils';

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

        this.middlewareStack.add(
            overrideObjectAttributesHeaderMiddleware('x-amz-object-attributes', input.ObjectAttributes), {
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
