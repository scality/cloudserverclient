import {
    BucketQuotaClient,
    CloudserverBucketQuotaClientConfig,
    GetBucketQuotaCommand
} from '@scality/cloudserverclient/clients/bucketQuota';

const config: CloudserverBucketQuotaClientConfig = {
    endpoint: 'http://localhost:8000',
    credentials: {
        accessKeyId: 'accessKey1',
        secretAccessKey: 'verySecretKey1',
    },
    region: 'us-east-1',
    maxAttempts: 1,
};

const bucketQuotaClient = new BucketQuotaClient(config);
try {
    const getBucketQuotaCommand = new GetBucketQuotaCommand({
        Bucket: 'aBucketName',
    });
    
    const quotaData = await bucketQuotaClient.send(getBucketQuotaCommand);
    // {
    //     "$metadata": {
    //         "httpStatusCode": 200,
    //         "requestId": "aa0681fd844c9a2272fa",
    //         "extendedRequestId": "aa0681fd844c9a2272fa",
    //         "attempts": 1,
    //         "totalRetryDelay": 0
    //     },
    //     "Name": "aBucketName",
    //     "Quota": 42
    // }
} catch (error: any) {
    console.error(error.name); // NoSuchBucket
    console.error(error.message); // The specified bucket does not exist.
    // {
    //     httpStatusCode: 404,
    //     requestId: "0caf000bc140bb9e62e9",
    //     extendedRequestId: "0caf000bc140bb9e62e9",
    //     cfId: undefined,
    //     attempts: 1,
    //     totalRetryDelay: 0,
    // }
    console.error(error.$metadata);
}
