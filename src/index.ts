import { XMLParser } from 'fast-xml-parser';
import { 
    CloudserverClient as GeneratedCloudserverClient, 
    CloudserverClientConfig,
    CloudserverServiceException 
} from '../build/smithy/source/typescript-codegen';

export * from '../build/smithy/source/typescript-codegen';
export class CloudserverClient extends GeneratedCloudserverClient {
    constructor(config: CloudserverClientConfig) {
        super(config);
        
        this.middlewareStack.add(this.createCustomErrorMiddleware(), {
            step: 'deserialize',
            name: 'cloudserverErrorHandler'
        });
    }

    private createCustomErrorMiddleware = () => {
        return (next: any) => async (args: any) => {
            const parseXmlError = (xml: string) => {
                try {
                    const result = new XMLParser({}).parse(xml);
                    return {
                        code: result.Error?.Code,
                        message: result.Error?.Message,
                        requestId: result.Error?.RequestId,
                    };
                } catch (parseError) {
                    return {
                        code: null,
                        message: 'Malformed XML error response',
                        requestId: null,
                    };
                }
            }

            try {
                return await next(args);
            } catch (error: any) {
                const response = error.$response;
                const statusCode = error.$metadata?.httpStatusCode;
                const headers = response?.headers || {};
                const contentType = (headers['content-type'] || '').toLowerCase();

                if (contentType.includes('application/xml') || contentType.includes('text/xml')) {
                    const body = response?.body;
                    const xml = body?.toString() || '';
                    const errorInfo = parseXmlError(xml);
                    
                    const xmlError: any = new CloudserverServiceException({
                        name: errorInfo.code || error.name,
                        message: errorInfo.message || 'XML error response',
                        $fault: statusCode >= 500 ? 'server' : 'client',
                        $metadata: error.$metadata || {},
                        $response: error.$response,
                    });
                    xmlError.parsedXml = errorInfo;

                    throw xmlError;
                }

                const s3cNginxProxyResponse = contentType.includes('text/html');
                if (s3cNginxProxyResponse) {
                    const body = response?.body;
                    const html = body?.toString() || '';
                    const title = html.match(/<title[^>]*>([^<]+)<\/title>/i);
                    const message = title && title[1] || 'HTML error response';

                    const htmlError: any = new CloudserverServiceException({
                        name: `HTML ${response?.reason || 'Error'}`,
                        message: message,
                        $fault: statusCode >= 500 ? 'server' : 'client',
                        $metadata: error.$metadata || {},
                        $response: error.$response,
                    });
                    htmlError.rawBody = html;
                    
                    throw htmlError;
                }
                throw error;
            }
        };
    }
}
