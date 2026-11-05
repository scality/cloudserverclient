$version: "2.0"
namespace cloudserver.notificationDestinations

/// Returns a bucket notification destination, with the type of its
/// authentication but none of its secrets
@http(method: "GET", uri: "/?notification-destination", code: 200)
@readonly
operation GetNotificationDestination {
    input := {
        @required
        @httpQuery("name")
        Name: DestinationName
    }
    output := {
        @httpPayload
        NotificationDestination: NotificationDestinationDescription
    }
    errors: [
        NoSuchDestination
    ]
}
