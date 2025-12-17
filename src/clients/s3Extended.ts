import { 
    ListObjectsCommand,
    ListObjectsCommandInput,
    ListObjectsV2Command, 
    ListObjectsV2CommandInput,
    ListObjectVersionsCommand,
    ListObjectVersionsCommandInput
} from '@aws-sdk/client-s3';

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
