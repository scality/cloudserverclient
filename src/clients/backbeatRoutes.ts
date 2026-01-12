import { 
    CloudserverBackbeatRoutesClient, 
    CloudserverBackbeatRoutesClientConfig,
} from '../../build/smithy/cloudserverBackbeatRoutes/typescript-codegen';
import { createCustomErrorMiddleware } from '../utils';

export * from '../../build/smithy/cloudserverBackbeatRoutes/typescript-codegen';
export class BackbeatRoutesClient extends CloudserverBackbeatRoutesClient {
    constructor(config: CloudserverBackbeatRoutesClientConfig) {
        super(config);
        
        this.middlewareStack.add(createCustomErrorMiddleware(), {
            step: 'deserialize',
            name: 'cloudserverErrorHandler',
            priority: 'normal',
        });
    }
}
