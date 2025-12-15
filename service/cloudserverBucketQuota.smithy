$version: "2.0"

namespace cloudserver.bucketquota

use aws.protocols#restXml
use aws.auth#sigv4
use aws.api#service

@restXml(noErrorWrapping: true)
@sigv4(name: "s3")
@service(sdkId: "cloudserverBucketQuota")
service CloudserverBucketQuota {
    version: "2018-07-11",
    operations: [
        GetBucketQuota,
        UpdateBucketQuota,
        DeleteBucketQuota,
    ]
}
