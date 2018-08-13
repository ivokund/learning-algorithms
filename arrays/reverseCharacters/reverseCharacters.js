/**
 * Reverse characters in every word (using a stack)
 *
 * @param input Character array
 * @returns {Array} Character array
 */
module.exports = (input) => {
    const wordStack = [];
    const output = [];

    const emptyWordStack = () => {
        while (wordStack.length) {
            output.push(wordStack.pop());
        }
    };

    input.forEach((char) => {
        if (char === ' ') {
            emptyWordStack();
            output.push(char);
        } else {
            wordStack.push(char);
        }
    });
    emptyWordStack();

    return output;
};
