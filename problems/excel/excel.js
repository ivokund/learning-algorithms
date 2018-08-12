/**
 * Given a column title as appears in an Excel sheet, return its corresponding column number.
 * Source: https://www.interviewbit.com/problems/excel-column-number/
 *
 * @param {string} col Excel column name
 * @returns {number}
 */
module.exports = (col) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let sum = 0;
    const input = col.split('');
    while (input.length > 0) {
        const letter = input.shift();
        const remainingDigits = input.length;

        const numValue = letters.indexOf(letter) + 1;
        sum += numValue * Math.pow(26, remainingDigits);
    }
    return sum;
};
