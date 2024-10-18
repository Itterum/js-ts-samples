import {parentPort, workerData} from 'worker_threads';
import fs from 'fs';

const writeDataToFile = (data) => {
    try {
        fs.writeFileSync('data.json', JSON.stringify(data));
        parentPort?.postMessage('Success');
    } catch (error) {
        parentPort?.postMessage(`Error: ${error}`);
    }
};

writeDataToFile(workerData);
