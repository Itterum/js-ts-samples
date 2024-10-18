import {parentPort} from 'worker_threads';

if (parentPort) {
    parentPort.postMessage('Hello World');
}
