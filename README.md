# cloudserverclient

This repository contains the Smithy-based TypeScript/JavaScript client for Cloudserver's custom internal APIs. The client is generated from the .smithy model files that we defined in the /models folder.

If you need to work on it, install Smithy first : https://smithy.io/2.0/guides/smithy-cli/cli_installation.html

## Architecture

Each .smithy file in /models defines one api, and we have the Cloudserver service defined in service/cloudserver.smithy using these apis.
The client generation is performed this way :

```bash
# Generate TypeScript from .smithy model files, and compile TypeScript to JavaScript
yarn build
```

### Local testing

1. Install test dependencies: `cd localTests && yarn install`
2. Start CloudServer: `S3VAULT=mem S3METADATA=mem S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start`
Some tests require different cloudserver setup :
For example : testIndexes : `S3METADATA=mongodb`
You may change the credentials and endpoint in testSetup.ts to target your Artesca lab.
Others (Raft apis) need Metadata to run :
In cloudserver, you can start metadata-standalone from
.github/docker/docker-compose.sse.yaml :
`docker compose -f docker-compose.sse.yaml up metadata-standalone`. In that case, Cloudserver should be run with `S3METADATA=scality`
3. Run :
- All tests: `yarn test`
- From a specific file `yarn test testLifecycleApis`
- A specific test `yarn test testLifecycleApis -t "should test ListLifecycleCurrents"`
