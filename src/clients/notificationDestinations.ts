import {
    CloudserverNotificationDestinationsClient,
    CloudserverNotificationDestinationsClientConfig,
} from '../../build/smithy/cloudserverNotificationDestinations/typescript-codegen';

// Named exports only: the generated package also exports names, such as
// errorTypeRegistries, that the other clients export too.
export { CloudserverNotificationDestinationsClientConfig };
export {
    CreateNotificationDestinationCommand,
    UpdateNotificationDestinationCommand,
    GetNotificationDestinationCommand,
    DeleteNotificationDestinationCommand,
    ListNotificationDestinationsCommand,
    CloudserverNotificationDestinationsServiceException,
    AccessDenied,
    CredentialsUnavailable,
    DestinationAlreadyExists,
    InvalidArgument,
    InvalidDestination,
    MalformedXML,
    MethodNotAllowed,
    NoSuchDestination,
    NotImplemented,
    TooManyBucketNotificationDestinations,
    CompressionType,
    DestinationAuthType,
    DestinationType,
    RequiredAcks,
    SaslMechanism,
} from '../../build/smithy/cloudserverNotificationDestinations/typescript-codegen';
export type {
    CreateNotificationDestinationCommandInput,
    CreateNotificationDestinationCommandOutput,
    UpdateNotificationDestinationCommandInput,
    UpdateNotificationDestinationCommandOutput,
    GetNotificationDestinationCommandInput,
    GetNotificationDestinationCommandOutput,
    DeleteNotificationDestinationCommandInput,
    DeleteNotificationDestinationCommandOutput,
    ListNotificationDestinationsCommandInput,
    ListNotificationDestinationsCommandOutput,
    NotificationDestinationConfiguration,
    NotificationDestinationDescription,
    DestinationConnection,
    DestinationAuth,
    DestinationAuthDescription,
    DestinationSasl,
    DestinationTls,
} from '../../build/smithy/cloudserverNotificationDestinations/typescript-codegen';

/** Longest destination name that the server accepts */
export const destinationNameMaxLength = 128;

/** Characters that the server accepts in a destination name */
export const destinationNamePattern = /^[\w+=,.@ -]+$/;

/**
 * Check a destination name with the rules of the server. The client sends
 * any name as given and the server rejects an invalid one, so this check is
 * only for callers that want to fail before a request.
 * @param name - destination name
 * @return - true if the name has 1 to 128 allowed characters
 */
export function isValidDestinationName(name: unknown): boolean {
    return typeof name === 'string'
        && name.length <= destinationNameMaxLength
        && destinationNamePattern.test(name);
}

export class NotificationDestinationsClient extends CloudserverNotificationDestinationsClient {
    constructor(config: CloudserverNotificationDestinationsClientConfig) {
        super({
            ...config,
            signingEscapePath: false,
        });
        // Get and List share their method and path, and the server answers
        // a GET without a name with the list: a Get without a name would
        // read the list as an empty destination.
        this.middlewareStack.add(
            (next, context) => async args => {
                const { Name } = args.input as { Name?: unknown };
                if (context.commandName === 'GetNotificationDestinationCommand' && typeof Name !== 'string') {
                    throw new Error('GetNotificationDestinationCommand needs a Name: '
                        + 'without one the server lists the destinations');
                }
                return next(args);
            },
            { step: 'initialize', name: 'requireDestinationName' },
        );
    }
}
