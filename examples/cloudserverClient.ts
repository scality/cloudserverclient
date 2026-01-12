// cloudserverClient is a meta client that imports all other clients.
// In this library, you can either use individual clients (like BackbeatRoutesClient or BucketQuotaClient),
// or use this global client.

import { 
    CloudserverClient, 
    CloudserverClientConfig,
    GetObjectCommand 
} from '@scality/cloudserverclient';

const command = new GetObjectCommand({
    Bucket: 'aBucketName',
    Key: 'anObjectKey',
});

const config: CloudserverClientConfig = {
    endpoint: 'http://localhost:8000',
    credentials: {
        accessKeyId: 'accessKey1',
        secretAccessKey: 'verySecretKey1',
    },
    region: 'us-east-1',
};
const client = new CloudserverClient(config);

const getData = await client.backbeatRoutes.send(command);
const bodyStr = await getData.Body.transformToString();