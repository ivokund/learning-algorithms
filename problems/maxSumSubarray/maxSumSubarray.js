/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum
 * Source: https://www.interviewbit.com/problems/max-sum-contiguous-subarray/
 *
 * @todo Should be able to do this in O(n) time instead of O(n^2)
 * @param arr
 * @returns {number}
 */
module.exports = (arr) => {
    let largestSum = -Infinity;
    for (let start = 0; start < arr.length; start++) {

        if (largestSum > 0 && arr[start] < 0) {
            continue;
        }

        let end = start;
        let currentSum = arr[start];

        while (end < arr.length && currentSum >= arr[end]) {
            if (currentSum > largestSum) {
                largestSum = currentSum;
            }
            end++;
            currentSum += arr[end];
        }
    }

    return largestSum;
};