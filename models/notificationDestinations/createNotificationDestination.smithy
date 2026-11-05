$version: "2.0"
namespace cloudserver.notificationDestinations

/// Creates a bucket notification destination in the account of the caller
@http(method: "PUT", uri: "/?notification-destination", code: 200)
operation CreateNotificationDestination {
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
        DestinationAlreadyExists
        InvalidDestination
        TooManyBucketNotificationDestinations
    ]
}
