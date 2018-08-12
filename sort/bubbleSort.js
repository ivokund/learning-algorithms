const arr = [2, 56, 234234, 2, 65, 2, 56, 75, 2, 5, 343, 25, 632, 2, -22, 432, 0, 433];

const bubbleSort = (elements) => {
    const sortedElements = elements;
    let hadReplacement;
    do {
        hadReplacement = false;
        for (let i=1; i<sortedElements.length; i++) {
            if (sortedElements[i] < sortedElements[i-1]) {
                [sortedElements[i], sortedElements[i-1]] = [sortedElements[i-1], sortedElements[i]];
                hadReplacement = true;
            }
        }
    } while (hadReplacement);
    return sortedElements;
};

console.log(bubbleSort(arr));