const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

/**
 * This brings a lot of overhead, using workers here makes only sense with very large arrays.
 * Run this by running "quickSortParallel.js" entry point
 */

const parallelSorterFactory = (maxThreads, threadCount) => {
    threadCount++;
    return (data) => new Promise((resolve, reject) => {
        console.log({ threadCount });
        const worker = new Worker(__filename, {
            workerData: { maxThreads, threadCount, data }
        });
        worker.on('message', (msg) => resolve(msg));
        worker.on('error', (err) => reject(err));
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
};

const quickSort = async (elements, maxThreads, threadCount = 1) => {
    if (elements.length < 2) {
        return elements;
    }
    const sortedList = elements;

    const pivot = elements.pop();

    const smaller = [];
    const larger = [];

    sortedList.forEach((item) => (pivot > item ? smaller : larger).push(item));

    if (threadCount < maxThreads) {
        const sorter = parallelSorterFactory(maxThreads, threadCount);
        return Promise.all([sorter(smaller), sorter(larger)])
            .then(([smallerSorted, largerSorted]) => {
                return [...smallerSorted, pivot, ...largerSorted]
            })
    } else {
        return [...await quickSort(smaller), pivot, ...await quickSort(larger)];
    }
};


if (!isMainThread) {
    // If in child thread, calculate what's needed and post result to parent thread
    const { data, maxThreads, threadCount } = workerData;
    quickSort(data, maxThreads, threadCount).then((res) => {
        parentPort.postMessage(res);
    })
} else {
    // If in main thread, export the main sort function
    module.exports = quickSort;
}