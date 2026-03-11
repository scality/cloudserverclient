import { ListObjectVersionsCommand, ListObjectVersionsCommandInput } from '@aws-sdk/client-s3';
import { extendCommandWithExtraParametersMiddleware } from './utils';

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
