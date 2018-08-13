describe('reverseCharacters', () => {
    it('should calculate correct value', () => {
        const fun = require('./reverseCharacters');
        expect(fun('Hello world'.split(''))).toEqual('olleH dlrow'.split(''));
    });
});