/**
 * Binary search a sorted array, O(1) space complexity
 *
 * @param haystack {Array}
 * @param needle {number}
 */
module.exports = (haystack, needle) => {
    let left = 0;
    let right = haystack.length;
    while (right > left) {
        const middle = left + Math.floor((right - left) / 2);
        const item = haystack[middle];
        if (item === needle) {
            return middle;
        }

        if (needle > item) {
            // add 1 because we're flooring and otherwise might not get to the end
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return undefined;
};