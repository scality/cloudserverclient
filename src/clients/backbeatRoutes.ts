import {
    CloudserverBackbeatRoutesClient,
    CloudserverBackbeatRoutesClientConfig,
} from '../../build/smithy/cloudserverBackbeatRoutes/typescript-codegen';
import { CloudserverRestJsonProtocol } from '../utils';

export * from '../../build/smithy/cloudserverBackbeatRoutes/typescript-codegen';
export class BackbeatRoutesClient extends CloudserverBackbeatRoutesClient {
    constructor(config: CloudserverBackbeatRoutesClientConfig) {
        super({
            protocol: CloudserverRestJsonProtocol,
            ...config,
            signingEscapePath: false,
        });
    }
}
