import { CloudserverClientResolvedConfig } from "../CloudserverClient";
import { AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4PreviouslyResolved } from "@aws-sdk/core";
import { HandlerExecutionContext, HttpAuthScheme, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, HttpAuthSchemeProvider, Provider } from "@smithy/types";
/**
 * @internal
 */
export interface CloudserverHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
    region?: string;
}
/**
 * @internal
 */
export interface CloudserverHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<CloudserverClientResolvedConfig, HandlerExecutionContext, CloudserverHttpAuthSchemeParameters, object> {
}
/**
 * @internal
 */
export declare const defaultCloudserverHttpAuthSchemeParametersProvider: (config: CloudserverClientResolvedConfig, context: HandlerExecutionContext, input: object) => Promise<CloudserverHttpAuthSchemeParameters>;
/**
 * @internal
 */
export interface CloudserverHttpAuthSchemeProvider extends HttpAuthSchemeProvider<CloudserverHttpAuthSchemeParameters> {
}
/**
 * @internal
 */
export declare const defaultCloudserverHttpAuthSchemeProvider: CloudserverHttpAuthSchemeProvider;
/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
    /**
     * A comma-separated list of case-sensitive auth scheme names.
     * An auth scheme name is a fully qualified auth scheme ID with the namespace prefix trimmed.
     * For example, the auth scheme with ID aws.auth#sigv4 is named sigv4.
     * @public
     */
    authSchemePreference?: string[] | Provider<string[]>;
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    httpAuthSchemes?: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    httpAuthSchemeProvider?: CloudserverHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig {
    /**
     * A comma-separated list of case-sensitive auth scheme names.
     * An auth scheme name is a fully qualified auth scheme ID with the namespace prefix trimmed.
     * For example, the auth scheme with ID aws.auth#sigv4 is named sigv4.
     * @public
     */
    readonly authSchemePreference: Provider<string[]>;
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    readonly httpAuthSchemes: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    readonly httpAuthSchemeProvider: CloudserverHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export declare const resolveHttpAuthSchemeConfig: <T>(config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved) => T & HttpAuthSchemeResolvedConfig;
