## Steps to reproduce
run `node ./speech.js`

error:
```text
Error: 2 UNKNOWN: Getting metadata from plugin failed with error: Deadline is too far in the future
    at Object.callErrorFromStatus (/Users/jamescharlesworth/Downloads/demo/node_modules/@grpc/grpc-js/build/src/call.js:30:26)
    at Http2CallStream.<anonymous> (/Users/jamescharlesworth/Downloads/demo/node_modules/@grpc/grpc-js/build/src/client.js:96:33)
    at Http2CallStream.emit (events.js:215:7)
    at /Users/jamescharlesworth/Downloads/demo/node_modules/@grpc/grpc-js/build/src/call-stream.js:98:22
    at processTicksAndRejections (internal/process/task_queues.js:75:11) {
  code: 2,
  details: 'Getting metadata from plugin failed with error: Deadline is too far in the future',
  metadata: Metadata { internalRepr: Map {}, options: {} },
  note: 'Exception occurred in retry method that was not classified as transient'

```
