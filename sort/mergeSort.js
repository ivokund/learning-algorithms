const arr = [2, 56, 234234, 2, 65, 2, 56, 75, 2, 5, 343, 25, 632, 2, -22, 432, 0, 433];

const mergeSortBottomUp = (elements) => {
    let sortedList = elements;

    const merge = (list1, list2) => {
        const finalList = [];
        while (list1.length && list2.length) {
            finalList.push((list1[0] < list2[0] ? list1 : list2).shift())
        }
        return finalList.concat(list1).concat(list2);
    };

    for (let batchSize = 1; batchSize < elements.length; batchSize *= 2) {
        for (let cursor = 0; cursor < elements.length; cursor += batchSize * 2) {

            sortedList =
                sortedList.slice(0, cursor) // items before
                    .concat(merge(
                        sortedList.slice(cursor, cursor + batchSize), // first batch
                        sortedList.slice(cursor + batchSize, cursor + batchSize * 2), // second batch
                    ))
                    .concat(sortedList.slice(cursor + batchSize * 2)); // items after
        }
    }
    return sortedList;
};

console.log(mergeSortBottomUp(arr));