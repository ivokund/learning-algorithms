/**
 * Reverse words in a sentence (using a stack)
 *
 * @param input Character array
 * @returns {Array} Character array
 */
module.exports = (input) => {

    const tempStack = [];
    const out = [];

    const emptyStack = () => {
        while (tempStack.length) {
            out.unshift(tempStack.pop());
        }
    };

    for (let i=0; i<input.length; i++) {
        const char = input[i];
        if (char === ' ') {
            emptyStack();
            out.unshift(char);
        } else {
            tempStack.push(char);
        }
    }
    emptyStack();

    return out;
};
