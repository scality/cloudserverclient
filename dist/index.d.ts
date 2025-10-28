import { CloudserverClient as GeneratedCloudserverClient, CloudserverClientConfig } from '../build/smithy/source/typescript-codegen';
export * from '../build/smithy/source/typescript-codegen';
export declare class CloudserverClient extends GeneratedCloudserverClient {
    constructor(config: CloudserverClientConfig);
    private createCustomErrorMiddleware;
}
