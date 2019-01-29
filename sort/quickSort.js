const arr = [2, 56, 234234, 2, 65, 2, 56, 75, 2, 5, 343, 25, 632, 2, -22, 432, 0, 433];
const arr2 = Array.from({length: 7000000}, () => (Math.random() * 10000 | 0) + 1);

const quickSort = (elements) => {
    if (elements.length < 2) {
        return elements;
    }
    const sortedList = elements;

    const pivot = elements.pop();

    const smaller = [];
    const larger = [];

    sortedList.forEach((item) => (pivot > item ? smaller : larger).push(item));

    return [...quickSort(smaller), pivot, ...quickSort(larger)];
};

console.time();
const res = quickSort(arr);
console.timeEnd();
console.log(res.join(' '));
