const arr = [2, 56, 234234, 2, 65, 2, 56, 75, 2, 5, 343, 25, 632, 2, -22, 432, 0, 433];

const insertionSort = (elements) => {
    const sortedList = elements;

    for (let currentIndex = 1; currentIndex < sortedList.length; currentIndex++) {
        const [ value ] = sortedList.splice(currentIndex, 1);
        let newIndex = currentIndex;

        for (let previousIndex = currentIndex-1; previousIndex >= 0; previousIndex--) {
            if (value < sortedList[previousIndex]) {
                newIndex = previousIndex;
            }
        }
        sortedList.splice(newIndex, 0, value);
    }
    return sortedList;
};

console.log(insertionSort(arr));