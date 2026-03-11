import { ListObjectsCommand, ListObjectsCommandInput } from '@aws-sdk/client-s3';
import { extendCommandWithExtraParametersMiddleware } from './utils';

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
