$version: "2.0"

namespace cloudserver.notificationDestinations

use aws.protocols#restXml
use aws.auth#sigv4
use aws.api#service

@restXml(noErrorWrapping: true)
@sigv4(name: "s3")
@service(sdkId: "CloudserverNotificationDestinations")
service CloudserverNotificationDestinations {
    version: "2026-11-05",
    operations: [
        CreateNotificationDestination,
        UpdateNotificationDestination,
        GetNotificationDestination,
        DeleteNotificationDestination,
        ListNotificationDestinations,
    ]
    errors: [
        AccessDenied,
        InvalidArgument,
        MalformedXML,
        MethodNotAllowed,
        NotImplemented,
        CredentialsUnavailable,
    ]
}
