import {Worker} from 'worker_threads';

function runWorker(path, callback, workerData = null) {
    const worker = new Worker(path, {workerData});

    worker.on('message', callback.bind(null, null));
    worker.on('error', callback);
    worker.on('exit', exitCode => {
        if (exitCode === 0) {
            return null;
        }

        return callback(new Error(`Worker exited with code ${exitCode}`));
    });

    return worker;
}

(() => {
    runWorker('./worker.js', (err, result) => {
        if (err) {
            console.error('Worker error: ', err);
            return;
        }

        console.log('Worker running');
        console.log('Result from worker: ', result);
    });
})();
