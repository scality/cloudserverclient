import { 
    CloudserverClient,
    GetRaftIdInput,
    GetRaftIdCommand,
    GetRaftBucketsInput,
    GetRaftBucketsCommand,
    GetRaftLogInput,
    GetRaftLogCommand,
    GetBucketCseqInput,
    GetBucketCseqCommand
} from '../src/index';
import assert from 'assert';
import { createTestClient, testConfig } from './testSetup';
import stream from 'stream';
import JSONStream from 'JSONStream';

describe('CloudServer Raft API Tests', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        ({client} = createTestClient());
    });

    it('should test GetRaftId API', async () => {
        // Run Cloudserver with : S3VAULT=mem S3METADATA=scality S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        const getRaftIdInput: GetRaftIdInput = {
            Bucket: testConfig.bucketName,
        };
        const getRaftIdCommand = new GetRaftIdCommand(getRaftIdInput);
        const raftIdData = await client.send(getRaftIdCommand);
        assert.strictEqual(raftIdData.RaftId, '1')
    });

    it('should test GetRaftBuckets API', async () => {
        // Run Cloudserver with : S3VAULT=mem S3METADATA=mongodb S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        const getRaftBucketsInput: GetRaftBucketsInput = {
            LogId: "1",
        };
        const getRaftBucketsCommand = new GetRaftBucketsCommand(getRaftBucketsInput);
        const raftBucketsData = await client.send(getRaftBucketsCommand);
        const raftBucketsDataAny: any = raftBucketsData.Buckets as any;
        assert.ok(raftBucketsDataAny.length >= 1)
    });

    it('should test GetRaftLog API', async () => {
        class ListRecordStream extends stream.Transform {
            constructor() {
                super({ objectMode: true });
            }

            _transform(itemObj: any, encoding: any, callback: any) {
                itemObj.entries.forEach((entry: any) => {
                    // eslint-disable-next-line no-param-reassign
                    entry.type = entry.type || 'put';
                });
                this.push(itemObj);
                callback();
            }
        }
        const getRaftLogInput: GetRaftLogInput = {
            LogId: "1",
            Begin: 1,
            Limit: 2,
        };
        const getRaftLogCommand = new GetRaftLogCommand(getRaftLogInput);
        const raftLogData = await client.send(getRaftLogCommand);
        
        function getRaftLogStreaming(done: any) {
            const recordStream = new ListRecordStream();
            const body = raftLogData.Body as any;
            
            recordStream.on('error', (err: any) => {
                return done(err);
            });
            
            const jsonResponse = JSONStream.parse('log.*');
            const headerParser = JSONStream.parse('info');
            body.pipe(jsonResponse);
            body.pipe(headerParser);
            jsonResponse.pipe(recordStream);
            
            body.on('error', (err: any) => recordStream.emit('error', err));
            jsonResponse.on('error', (err: any) => recordStream.emit('error', err));
            headerParser.on('error', (err: any) => recordStream.emit('error', err));
            
            headerParser.on('data', (info: any) => {
                recordStream.removeAllListeners('error');
                return done(null, {
                    info: info,
                    log: recordStream,
                });
            });
            
            return undefined;
        }
        
        const logStats = { nbLogRecordsRead: 0, nbLogEntriesRead: 0, hasMoreLog: false };
        
        // Wrap the streaming in a Promise to make the test wait for completion
        await new Promise<void>((resolve, reject) => {
            getRaftLogStreaming((err: any, logRes: any) => {
                if (err) {
                    assert.fail(`Error initiating raft log stream: ${err}`);
                    return reject(err);
                }
                
                logRes.log.on('data', (record: any) => {
                    logStats.nbLogRecordsRead += 1;
                    if (record.entries) {
                        record.entries.forEach((_entry: any) => {
                            logStats.nbLogEntriesRead += 1;
                        });
                    }
                });
                
                logRes.log.on('error', (err: any) => {
                    assert.fail(`Error reading raft log stream: ${err}`);
                    reject(err);
                });
                
                logRes.log.on('end', () => {
                    assert.ok(logStats.nbLogRecordsRead > 0);
                    assert.ok(logStats.nbLogEntriesRead > 0);
                    resolve();
                });
            });
        });
    });

    it('should test GetBucketCseq API', async () => {
        const getBucketCseqInput: GetBucketCseqInput = {
            Bucket: testConfig.bucketName,
        };
        const getBucketCseqCommand = new GetBucketCseqCommand(getBucketCseqInput);
        const bucketCseqData = await client.send(getBucketCseqCommand);
        assert.ok(bucketCseqData.CseqInfo && Array.isArray(bucketCseqData.CseqInfo));
        assert.ok(bucketCseqData.CseqInfo.length > 0, 'CseqInfo should not be empty');
    });
});
