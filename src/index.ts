import { 
    CloudserverClient as GeneratedCloudserverClient, 
    CloudserverClientConfig
} from '../build/smithy/source/typescript-codegen';
import { createCustomErrorMiddleware } from './utils';

export * from '../build/smithy/source/typescript-codegen';
export * from './utils';

export class CloudserverClient extends GeneratedCloudserverClient {
    constructor(config: CloudserverClientConfig) {
        super(config);
        
        this.middlewareStack.add(createCustomErrorMiddleware(), {
            step: 'deserialize',
            name: 'cloudserverErrorHandler',
            priority: 'normal',
        });
    }
}
