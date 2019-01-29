
const arr = Array.from({length: 7000000}, () => (Math.random() * 10000 | 0) + 1);
const maxThreads = 4;

const quickSort = require('./quickSortParallel.js');

console.time();
quickSort(arr, maxThreads)
    .then((res) => {
        console.timeEnd();
        // console.log(res.join(' '));
    });

