$version: "2.0"
namespace cloudserver.notificationDestinations

/// Replaces a bucket notification destination: the body is the whole new
/// destination, as for Create
@http(method: "POST", uri: "/?notification-destination", code: 200)
operation UpdateNotificationDestination {
    input := {
        @required
        @httpQuery("name")
        Name: DestinationName

        @required
        @httpPayload
        NotificationDestination: NotificationDestinationConfiguration
    }
    output := {}
    errors: [
        NoSuchDestination
        InvalidDestination
    ]
}
