/**
 * Binary search a sorted array, O(n) space complexity
 *
 * @param haystack {Array}
 * @param needle {number}
 */
module.exports = (haystack, needle) => {
    // remember element count cut from left
    let cutIndex = 0;

    const arr = [...haystack]; // shallow clone the array
    while (arr.length > 0) {

        const middleIndex = Math.floor(arr.length / 2);
        if (arr[middleIndex] === needle) {
            return cutIndex + middleIndex;
        }

        if (needle > arr[middleIndex]) {
            // remove everything before middle point
            cutIndex += arr.splice(0, middleIndex + 1).length;
        } else {
            // remove everything after middle point
            arr.splice(middleIndex, arr.length - middleIndex)
        }
    }
};


