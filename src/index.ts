import { 
    CloudserverClient as GeneratedCloudserverClient, 
    CloudserverClientConfig
} from '../build/smithy/source/typescript-codegen';
import { createCustomErrorMiddleware, createSigningUnescapePathMiddleware } from './utils';

export * from '../build/smithy/source/typescript-codegen';
export * from './utils';

export class CloudserverClient extends GeneratedCloudserverClient {
    constructor(config: CloudserverClientConfig) {
        super(config);
        
        this.middlewareStack.add(createCustomErrorMiddleware(), {
            step: 'deserialize',
            name: 'cloudserverErrorHandler'
        });

        this.middlewareStack.add(createSigningUnescapePathMiddleware(), {
            step: 'build',
            priority: 'high',
            name: 'signingUnescapePathHandler'
        });
    }
}
