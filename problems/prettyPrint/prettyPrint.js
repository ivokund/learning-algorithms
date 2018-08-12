/**
 * Print concentric rectangular pattern in a 2d matrix.
 * Source: https://www.interviewbit.com/problems/prettyprint/
 *
 * Input: 4
 * Output:
 *   4 4 4 4 4 4 4
 *   4 3 3 3 3 3 4
 *   4 3 2 2 2 3 4
 *   4 3 2 1 2 3 4
 *   4 3 2 2 2 3 4
 *   4 3 3 3 3 3 4
 *   4 4 4 4 4 4 4
 *
 * @param num
 * @returns {string}
 */
module.exports = (num) => {
    const out = [];
    const rectLength = num * 2 - 1;

    const write = (offset, value) => {
        for (let row = offset; row < rectLength - offset; row++) {
            out[row] = out[row] || [];
            for (let col = offset; col < rectLength - offset; col++) {
                out[row][col] = value;
            }
        }
    };

    for (let i = num; i > 0; i--) {
        write(num - i, i);
    }

    return out.map((col) => col.join(' ')).join('\n');
};