import { 
    CloudserverProxyBackbeatApisClient, 
    CloudserverProxyBackbeatApisClientConfig,
} from '../../build/smithy/cloudserverProxyBackbeatApis/typescript-codegen';

export { CloudserverProxyBackbeatApisClientConfig };
export {
    CheckConnectionCommand,
    GetFailedObjectCommand,
    GetLocationsIngestionStatusCommand,
    GetLocationsStatusCommand,
    ListFailedCommand,
    PauseAllIngestionSitesCommand,
    PauseAllSitesCommand,
    PauseIngestionSiteCommand,
    PauseSiteCommand,
    ResumeAllIngestionSitesCommand,
    ResumeAllSitesCommand,
    ResumeIngestionSiteCommand,
    ResumeSiteCommand,
    RetryFailedObjectsCommand,
    ScheduleIngestionSiteResumeCommand,
    ScheduleSiteResumeCommand,
} from '../../build/smithy/cloudserverProxyBackbeatApis/typescript-codegen';
export type {
    CheckConnectionCommandInput,
    CheckConnectionCommandOutput,
    GetFailedObjectCommandInput,
    GetFailedObjectCommandOutput,
    GetLocationsIngestionStatusCommandInput,
    GetLocationsIngestionStatusCommandOutput,
    GetLocationsStatusCommandInput,
    GetLocationsStatusCommandOutput,
    ListFailedCommandInput,
    ListFailedCommandOutput,
    PauseAllIngestionSitesCommandInput,
    PauseAllIngestionSitesCommandOutput,
    PauseAllSitesCommandInput,
    PauseAllSitesCommandOutput,
    PauseIngestionSiteCommandInput,
    PauseIngestionSiteCommandOutput,
    PauseSiteCommandInput,
    PauseSiteCommandOutput,
    ResumeAllIngestionSitesCommandInput,
    ResumeAllIngestionSitesCommandOutput,
    ResumeAllSitesCommandInput,
    ResumeAllSitesCommandOutput,
    ResumeIngestionSiteCommandInput,
    ResumeIngestionSiteCommandOutput,
    ResumeSiteCommandInput,
    ResumeSiteCommandOutput,
    RetryFailedObjectsCommandInput,
    RetryFailedObjectsCommandOutput,
    ScheduleIngestionSiteResumeCommandInput,
    ScheduleIngestionSiteResumeCommandOutput,
    ScheduleSiteResumeCommandInput,
    ScheduleSiteResumeCommandOutput,
} from '../../build/smithy/cloudserverProxyBackbeatApis/typescript-codegen';

export class ProxyBackbeatApisClient extends CloudserverProxyBackbeatApisClient {
    constructor(config: CloudserverProxyBackbeatApisClientConfig) {
        super({
            ...config,
            signingEscapePath: false,
        });
    }
}
