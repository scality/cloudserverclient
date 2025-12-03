enum BackendType {
    MONGO = 'mongo',
    METADATA = 'metadata',
}

export function describeForMongoBackend(name: string, fn: () => void): void {
    if (process.env.BACKEND_TYPE === BackendType.METADATA) {
        describe.skip(`${name} (tests skipped: mongo backend only)`, fn);
    } else {
        describe(name, fn);
    }
}

export function describeForMetadataBackend(name: string, fn: () => void): void {
    if (process.env.BACKEND_TYPE === BackendType.METADATA) {
        describe(name, fn);
    } else {
        describe.skip(`${name} (tests skipped: metadata backend only)`, fn);
    }
}

export function describeForBackbeatSetup(name: string, fn: () => void): void {
    if (process.env.BACKBEAT_SETUP === 'true') {
        describe(name, fn);
    } else {
        describe.skip(`${name} (tests skipped: backbeat setup required)`, fn);
    }
}
