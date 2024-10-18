import {parentPort, workerData} from 'worker_threads';

const parseElement = async (element) => {
    const title = await element.$eval('.title > span > a', el => el.textContent.trim());
    const url = await element.$eval('.title > span > a', el => el.getAttribute('href'));

    return {
        title: title,
        url: url,
    };
};

const parse = async () => {
    const elementsData = workerData;
    const result = await Promise.all(elementsData.map(el => parseElement(el)));
    parentPort.postMessage(result);
};

parse().then(r => console.log(r));
