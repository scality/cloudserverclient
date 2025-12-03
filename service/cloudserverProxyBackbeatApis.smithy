$version: "2.0"

namespace cloudserver.proxyBackbeatApis

use aws.protocols#restJson1
use aws.auth#sigv4
use aws.api#service

@restJson1
@sigv4(name: "s3")
@service(sdkId: "CloudserverProxyBackbeatApis")
service CloudserverProxyBackbeatApis {
    version: "2017-07-01",
    operations: [
        CheckConnection,
        GetFailedObject,
        GetLocationsIngestionStatus,
        GetLocationsStatus,
        ListFailed,
        PauseAllIngestionSites,
        PauseAllSites,
        PauseIngestionSite,
        PauseSite,
        ResumeAllIngestionSites,
        ResumeAllSites,
        ResumeIngestionSite,
        ResumeSite,
        RetryFailedObjects,
        ScheduleIngestionSiteResume,
        ScheduleSiteResume,
    ]
}
