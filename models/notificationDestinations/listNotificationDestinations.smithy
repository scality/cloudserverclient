$version: "2.0"
namespace cloudserver.notificationDestinations

/// Lists the bucket notification destinations of the account of the caller,
/// in ascending byte order of their names. The x-id literal tells this
/// request from a Get, which has the same method and path.
@http(method: "GET", uri: "/?notification-destination&x-id=ListNotificationDestinations", code: 200)
@readonly
operation ListNotificationDestinations {
    input := {
        /// Most destinations to return, 1 to 1000, 100 when not set
        @httpQuery("max-items")
        MaxItems: Integer

        /// Name to start after: the list returns the names that sort after it
        @httpQuery("marker")
        Marker: DestinationName
    }
    output := @xmlName("ListNotificationDestinationsResult") {
        /// Always present, false on the last page: the client rejects an
        /// answer without it
        IsTruncated: Boolean

        /// Last name returned, set only when the list is truncated: pass it
        /// as Marker to get the next page
        NextMarker: DestinationName

        @xmlFlattened
        @xmlName("NotificationDestination")
        NotificationDestinations: NotificationDestinationList
    }
}
