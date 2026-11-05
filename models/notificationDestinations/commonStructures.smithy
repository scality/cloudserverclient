$version: "2.0"
namespace cloudserver.notificationDestinations

/// Name of a bucket notification destination, unique in its account. The
/// server accepts 1 to 128 characters matching ^[\w+=,.@ -]+$, the grammar
/// of IAM group and policy names. The client sends the name as given.
string DestinationName

/// Secret that must not appear in logs
@sensitive
string SecretString

/// Kind of system the destination sends its messages to
enum DestinationType {
    KAFKA = "kafka"
}

/// Acknowledgments the producer waits for: all in-sync replicas (-1, the
/// server default), none (0) or the partition leader only (1)
intEnum RequiredAcks {
    ALL = -1
    NONE = 0
    LEADER = 1
}

/// Compression of the messages, none when not set
enum CompressionType {
    NONE = "none"
    GZIP = "gzip"
    SNAPPY = "snappy"
    LZ4 = "lz4"
    ZSTD = "zstd"
}

/// How the destination authenticates to its broker
enum DestinationAuthType {
    NONE = "none"
    SASL_PLAINTEXT = "sasl_plaintext"
    SASL_SSL = "sasl_ssl"
    MTLS = "mtls"
}

enum SaslMechanism {
    PLAIN = "PLAIN"
    SCRAM_SHA_256 = "SCRAM-SHA-256"
    SCRAM_SHA_512 = "SCRAM-SHA-512"
    GSSAPI = "GSSAPI"
}

/// Where the destination sends its messages
structure DestinationConnection {
    @required
    Host: String

    /// Port of the broker, 1 to 65535
    @required
    Port: Integer

    @required
    Topic: String

    RequiredAcks: RequiredAcks

    CompressionType: CompressionType
}

/// SASL credentials, for the sasl_plaintext and sasl_ssl types
structure DestinationSasl {
    @required
    Mechanism: SaslMechanism

    @required
    Username: String

    @required
    Password: SecretString
}

/// TLS settings: the CA certificate, and for mtls the client certificate
/// and key
structure DestinationTls {
    CaCertificate: String

    ClientCertificate: String

    ClientKey: SecretString

    ClientKeyPassword: SecretString
}

/// Authentication of a destination as Create and Update send it. Sasl is
/// required for the SASL types and Tls carries the certificates; a block
/// that does not match the type gets InvalidDestination.
@sensitive
structure DestinationAuth {
    @required
    Type: DestinationAuthType

    Sasl: DestinationSasl

    Tls: DestinationTls
}

/// A destination as Create and Update send it. Update replaces the whole
/// destination, so it sends every field, as Create does.
@xmlName("NotificationDestination")
structure NotificationDestinationConfiguration {
    @required
    Type: DestinationType

    @required
    Connection: DestinationConnection

    @required
    Auth: DestinationAuth
}

/// Authentication of a stored destination: its type, never its secrets
structure DestinationAuthDescription {
    Type: DestinationAuthType
}

/// A stored destination, as Get and List return it
@xmlName("NotificationDestination")
structure NotificationDestinationDescription {
    Name: DestinationName

    Arn: String

    AccountId: String

    Type: DestinationType

    Connection: DestinationConnection

    Auth: DestinationAuthDescription

    CreatedAt: Timestamp

    UpdatedAt: Timestamp
}

list NotificationDestinationList {
    member: NotificationDestinationDescription
}

// Each error is named after the code of the S3 error body, which is how the
// client finds its class.

/// A destination with this name already exists in the account
@error("client")
@httpError(409)
structure DestinationAlreadyExists {}

/// No destination has this name in the account
@error("client")
@httpError(404)
structure NoSuchDestination {}

/// The destination is not valid, for example an Auth that does not match
/// its type
@error("client")
@httpError(400)
structure InvalidDestination {}

/// The account already has as many destinations as allowed
@error("client")
@httpError(400)
structure TooManyBucketNotificationDestinations {}

@error("client")
@httpError(403)
structure AccessDenied {}

/// A query parameter is missing or out of range, such as an empty name
@error("client")
@httpError(400)
structure InvalidArgument {}

@error("client")
@httpError(400)
structure MalformedXML {}

@error("client")
@httpError(405)
structure MethodNotAllowed {}

@error("server")
@httpError(501)
structure NotImplemented {}

/// The server cannot read the stored credentials of the destination
@error("server")
@httpError(500)
structure CredentialsUnavailable {}
