$version: "2.0"
namespace cloudserver.notificationDestinations

/// Deletes a bucket notification destination
@http(method: "DELETE", uri: "/?notification-destination", code: 204)
@idempotent
operation DeleteNotificationDestination {
    input := {
        @required
        @httpQuery("name")
        Name: DestinationName
    }
    output := {}
    errors: [
        NoSuchDestination
    ]
}
