import { HttpAuthSchemeInputConfig, HttpAuthSchemeResolvedConfig } from "./auth/httpAuthSchemeProvider";
import { BatchDeleteCommandInput, BatchDeleteCommandOutput } from "./commands/BatchDeleteCommand";
import { DeleteBucketIndexesCommandInput, DeleteBucketIndexesCommandOutput } from "./commands/DeleteBucketIndexesCommand";
import { DeleteObjectFromExpirationCommandInput, DeleteObjectFromExpirationCommandOutput } from "./commands/DeleteObjectFromExpirationCommand";
import { GetBucketCseqCommandInput, GetBucketCseqCommandOutput } from "./commands/GetBucketCseqCommand";
import { GetBucketIndexesCommandInput, GetBucketIndexesCommandOutput } from "./commands/GetBucketIndexesCommand";
import { GetBucketMetadataCommandInput, GetBucketMetadataCommandOutput } from "./commands/GetBucketMetadataCommand";
import { GetMetadataCommandInput, GetMetadataCommandOutput } from "./commands/GetMetadataCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand";
import { GetObjectListCommandInput, GetObjectListCommandOutput } from "./commands/GetObjectListCommand";
import { GetRaftBucketsCommandInput, GetRaftBucketsCommandOutput } from "./commands/GetRaftBucketsCommand";
import { GetRaftIdCommandInput, GetRaftIdCommandOutput } from "./commands/GetRaftIdCommand";
import { GetRaftLogCommandInput, GetRaftLogCommandOutput } from "./commands/GetRaftLogCommand";
import { ListLifecycleCurrentsCommandInput, ListLifecycleCurrentsCommandOutput } from "./commands/ListLifecycleCurrentsCommand";
import { ListLifecycleNonCurrentsCommandInput, ListLifecycleNonCurrentsCommandOutput } from "./commands/ListLifecycleNonCurrentsCommand";
import { ListLifecycleOrphansCommandInput, ListLifecycleOrphansCommandOutput } from "./commands/ListLifecycleOrphansCommand";
import { MultipleBackendAbortMPUCommandInput, MultipleBackendAbortMPUCommandOutput } from "./commands/MultipleBackendAbortMPUCommand";
import { MultipleBackendCompleteMPUCommandInput, MultipleBackendCompleteMPUCommandOutput } from "./commands/MultipleBackendCompleteMPUCommand";
import { MultipleBackendDeleteObjectCommandInput, MultipleBackendDeleteObjectCommandOutput } from "./commands/MultipleBackendDeleteObjectCommand";
import { MultipleBackendDeleteObjectTaggingCommandInput, MultipleBackendDeleteObjectTaggingCommandOutput } from "./commands/MultipleBackendDeleteObjectTaggingCommand";
import { MultipleBackendHeadObjectCommandInput, MultipleBackendHeadObjectCommandOutput } from "./commands/MultipleBackendHeadObjectCommand";
import { MultipleBackendInitiateMPUCommandInput, MultipleBackendInitiateMPUCommandOutput } from "./commands/MultipleBackendInitiateMPUCommand";
import { MultipleBackendPutMPUPartCommandInput, MultipleBackendPutMPUPartCommandOutput } from "./commands/MultipleBackendPutMPUPartCommand";
import { MultipleBackendPutObjectCommandInput, MultipleBackendPutObjectCommandOutput } from "./commands/MultipleBackendPutObjectCommand";
import { MultipleBackendPutObjectTaggingCommandInput, MultipleBackendPutObjectTaggingCommandOutput } from "./commands/MultipleBackendPutObjectTaggingCommand";
import { PutBucketIndexesCommandInput, PutBucketIndexesCommandOutput } from "./commands/PutBucketIndexesCommand";
import { PutDataCommandInput, PutDataCommandOutput } from "./commands/PutDataCommand";
import { PutMetadataCommandInput, PutMetadataCommandOutput } from "./commands/PutMetadataCommand";
import { ClientInputEndpointParameters, ClientResolvedEndpointParameters, EndpointParameters } from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { DefaultAwsRegionalEndpointsInputConfig, DefaultAwsRegionalEndpointsResolvedConfig } from "@aws-sdk/util-endpoints";
import { RegionInputConfig, RegionResolvedConfig } from "@smithy/config-resolver";
import { EndpointInputConfig, EndpointResolvedConfig } from "@smithy/middleware-endpoint";
import { RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import { Client as __Client, DefaultsMode as __DefaultsMode, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@smithy/smithy-client";
import { AwsCredentialIdentityProvider, Provider, BodyLengthCalculator as __BodyLengthCalculator, CheckOptionalClientConfig as __CheckOptionalClientConfig, ChecksumConstructor as __ChecksumConstructor, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, SdkStreamMixinInjector as __SdkStreamMixinInjector, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@smithy/types";
export { __Client };
/**
 * @public
 */
export type ServiceInputTypes = BatchDeleteCommandInput | DeleteBucketIndexesCommandInput | DeleteObjectFromExpirationCommandInput | GetBucketCseqCommandInput | GetBucketIndexesCommandInput | GetBucketMetadataCommandInput | GetMetadataCommandInput | GetObjectCommandInput | GetObjectListCommandInput | GetRaftBucketsCommandInput | GetRaftIdCommandInput | GetRaftLogCommandInput | ListLifecycleCurrentsCommandInput | ListLifecycleNonCurrentsCommandInput | ListLifecycleOrphansCommandInput | MultipleBackendAbortMPUCommandInput | MultipleBackendCompleteMPUCommandInput | MultipleBackendDeleteObjectCommandInput | MultipleBackendDeleteObjectTaggingCommandInput | MultipleBackendHeadObjectCommandInput | MultipleBackendInitiateMPUCommandInput | MultipleBackendPutMPUPartCommandInput | MultipleBackendPutObjectCommandInput | MultipleBackendPutObjectTaggingCommandInput | PutBucketIndexesCommandInput | PutDataCommandInput | PutMetadataCommandInput;
/**
 * @public
 */
export type ServiceOutputTypes = BatchDeleteCommandOutput | DeleteBucketIndexesCommandOutput | DeleteObjectFromExpirationCommandOutput | GetBucketCseqCommandOutput | GetBucketIndexesCommandOutput | GetBucketMetadataCommandOutput | GetMetadataCommandOutput | GetObjectCommandOutput | GetObjectListCommandOutput | GetRaftBucketsCommandOutput | GetRaftIdCommandOutput | GetRaftLogCommandOutput | ListLifecycleCurrentsCommandOutput | ListLifecycleNonCurrentsCommandOutput | ListLifecycleOrphansCommandOutput | MultipleBackendAbortMPUCommandOutput | MultipleBackendCompleteMPUCommandOutput | MultipleBackendDeleteObjectCommandOutput | MultipleBackendDeleteObjectTaggingCommandOutput | MultipleBackendHeadObjectCommandOutput | MultipleBackendInitiateMPUCommandOutput | MultipleBackendPutMPUPartCommandOutput | MultipleBackendPutObjectCommandOutput | MultipleBackendPutObjectTaggingCommandOutput | PutBucketIndexesCommandOutput | PutDataCommandOutput | PutMetadataCommandOutput;
/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
    /**
     * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
     */
    requestHandler?: __HttpHandlerUserInput;
    /**
     * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
     * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
     * @internal
     */
    sha256?: __ChecksumConstructor | __HashConstructor;
    /**
     * The function that will be used to convert strings into HTTP endpoints.
     * @internal
     */
    urlParser?: __UrlParser;
    /**
     * A function that can calculate the length of a request body.
     * @internal
     */
    bodyLengthChecker?: __BodyLengthCalculator;
    /**
     * A function that converts a stream into an array of bytes.
     * @internal
     */
    streamCollector?: __StreamCollector;
    /**
     * The function that will be used to convert a base64-encoded string to a byte array.
     * @internal
     */
    base64Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a base64-encoded string.
     * @internal
     */
    base64Encoder?: __Encoder;
    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array.
     * @internal
     */
    utf8Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string.
     * @internal
     */
    utf8Encoder?: __Encoder;
    /**
     * The runtime environment.
     * @internal
     */
    runtime?: string;
    /**
     * Disable dynamically changing the endpoint of the client based on the hostPrefix
     * trait of an operation.
     */
    disableHostPrefix?: boolean;
    /**
     * Unique service identifier.
     * @internal
     */
    serviceId?: string;
    /**
     * Enables IPv6/IPv4 dualstack endpoint.
     */
    useDualstackEndpoint?: boolean | __Provider<boolean>;
    /**
     * Enables FIPS compatible endpoints.
     */
    useFipsEndpoint?: boolean | __Provider<boolean>;
    /**
     * The AWS region to which this client will send requests
     */
    region?: string | __Provider<string>;
    /**
     * Setting a client profile is similar to setting a value for the
     * AWS_PROFILE environment variable. Setting a profile on a client
     * in code only affects the single client instance, unlike AWS_PROFILE.
     *
     * When set, and only for environments where an AWS configuration
     * file exists, fields configurable by this file will be retrieved
     * from the specified profile within that file.
     * Conflicting code configuration and environment variables will
     * still have higher priority.
     *
     * For client credential resolution that involves checking the AWS
     * configuration file, the client's profile (this value) will be
     * used unless a different profile is set in the credential
     * provider options.
     *
     */
    profile?: string;
    /**
     * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
     * @internal
     */
    defaultUserAgentProvider?: Provider<__UserAgent>;
    /**
     * Default credentials provider; Not available in browser runtime.
     * @deprecated
     * @internal
     */
    credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;
    /**
     * Value for how many times a request will be made at most in case of retry.
     */
    maxAttempts?: number | __Provider<number>;
    /**
     * Specifies which retry algorithm to use.
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
     *
     */
    retryMode?: string | __Provider<string>;
    /**
     * Optional logger for logging debug/info/warn/error.
     */
    logger?: __Logger;
    /**
     * Optional extensions
     */
    extensions?: RuntimeExtension[];
    /**
     * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
     */
    defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
    /**
     * The internal function that inject utilities to runtime-specific stream to help users consume the data
     * @internal
     */
    sdkStreamMixin?: __SdkStreamMixinInjector;
}
/**
 * @public
 */
export type CloudserverClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & UserAgentInputConfig & RetryInputConfig & RegionInputConfig & HostHeaderInputConfig & EndpointInputConfig<EndpointParameters> & DefaultAwsRegionalEndpointsInputConfig & HttpAuthSchemeInputConfig & ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CloudserverClient class constructor that set the region, credentials and other options.
 */
export interface CloudserverClientConfig extends CloudserverClientConfigType {
}
/**
 * @public
 */
export type CloudserverClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RuntimeExtensionsConfig & UserAgentResolvedConfig & RetryResolvedConfig & RegionResolvedConfig & HostHeaderResolvedConfig & EndpointResolvedConfig<EndpointParameters> & DefaultAwsRegionalEndpointsResolvedConfig & HttpAuthSchemeResolvedConfig & ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CloudserverClient class. This is resolved and normalized from the {@link CloudserverClientConfig | constructor configuration interface}.
 */
export interface CloudserverClientResolvedConfig extends CloudserverClientResolvedConfigType {
}
/**
 * @public
 */
export declare class CloudserverClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, CloudserverClientResolvedConfig> {
    /**
     * The resolved configuration of CloudserverClient class. This is resolved and normalized from the {@link CloudserverClientConfig | constructor configuration interface}.
     */
    readonly config: CloudserverClientResolvedConfig;
    constructor(...[configuration]: __CheckOptionalClientConfig<CloudserverClientConfig>);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
}
