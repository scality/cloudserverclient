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
import { createTestClient, testConfig } from './testSetup';
const stream = require('stream');
const JSONStream = require('JSONStream');

describe('CloudServer Raft API Tests', () => {
    let client: CloudserverClient;

    beforeAll(() => {
        client = createTestClient();
    });

    it('should test GetRaftId API', async () => {
        // Run Cloudserver with : S3VAULT=mem S3METADATA=scality S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        try {
            const getRaftIdInput: GetRaftIdInput = {
                Bucket: testConfig.bucketName,
            };
            const getRaftIdCommand = new GetRaftIdCommand(getRaftIdInput);
            const raftIdData = await client.send(getRaftIdCommand);
            console.log('GetRaftId succeeded:', raftIdData);
            console.log('Raft ID:', raftIdData.RaftId);
            if (raftIdData.RaftId) {
                console.log('Raft ID:', raftIdData.RaftId[0]);
            }
        } catch (err: any) {
            console.log('GetRaftId failed:', err);
            console.log('GetRaftId failed:', err.$metadata.httpStatusCode);
        }
    });

    it('should test GetRaftBuckets API', async () => {
        // Run Cloudserver with : S3VAULT=mem S3METADATA=mongodb S3DATA=mem REMOTE_MANAGEMENT_DISABLE=true yarn start
        try {
            const getRaftBucketsInput: GetRaftBucketsInput = {
                LogId: "1",
            };
            const getRaftBucketsCommand = new GetRaftBucketsCommand(getRaftBucketsInput);
            const raftBucketsData = await client.send(getRaftBucketsCommand);
            console.log('GetRaftBuckets succeeded:', raftBucketsData);
        } catch (err) {
            console.log('GetRaftBuckets failed:', err);
        }
    });

    it('should test GetRaftLog API', async () => {
        try {
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
                    console.error('Error processing raft log stream:', err.message);
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
                    console.log('Header received, returning stream:', info);
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
                        console.error('Error getting raft log stream:', err);
                        return reject(err);
                    }
                    
                    logRes.log.on('data', (record: any) => {
                        logStats.nbLogRecordsRead += 1;
                        console.log(`Processing log record ${logStats.nbLogRecordsRead}:`, record);
                        
                        if (record.entries) {
                            record.entries.forEach((entry: any) => {
                                logStats.nbLogEntriesRead += 1;
                                console.log(`Entry ${logStats.nbLogEntriesRead}:`, entry.type || 'put');
                            });
                        }
                    });
                    
                    logRes.log.on('error', (err: any) => {
                        console.error('Error fetching entries from log:', err);
                        reject(err);
                    });
                    
                    logRes.log.on('end', () => {
                        console.log('Ending record stream', logRes.info);
                        console.log(`Processed ${logStats.nbLogRecordsRead} records, ${logStats.nbLogEntriesRead} entries`);
                        
                        if (logRes.info.start + logStats.nbLogRecordsRead <= logRes.info.cseq) {
                            console.log('There is more log to read');
                        }
                        resolve();
                    });
                });
            });
        } catch (err: any) {
            console.log('GetRaftLog failed:', err);
            console.log('GetRaftLog failed:', err.$metadata.httpStatusCode);
        }
    });

    it('should test GetBucketCseq API', async () => {
        try {
            const getBucketCseqInput: GetBucketCseqInput = {
                Bucket: testConfig.bucketName,
            };
            const getBucketCseqCommand = new GetBucketCseqCommand(getBucketCseqInput);
            const bucketCseqData = await client.send(getBucketCseqCommand);
            console.log('GetBucketCseq succeeded:', bucketCseqData);
            if (bucketCseqData.CseqInfo) {
                console.log('Cseq info first item:', (bucketCseqData.CseqInfo as any)[0].cseq);
            }
        } catch (err) {
            console.log('GetBucketCseq failed:', err);
        }
    });
});
