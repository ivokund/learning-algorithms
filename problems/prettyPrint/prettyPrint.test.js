describe('prettyPrint', () => {
    it('should calculate correct value', () => {
        const print = require('./prettyPrint');

        expect(print(3)).toBe(
            '3 3 3 3 3\n' +
            '3 2 2 2 3\n' +
            '3 2 1 2 3\n' +
            '3 2 2 2 3\n' +
            '3 3 3 3 3');
    });
});