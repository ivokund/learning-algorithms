describe('reverseCharacters', () => {
    it('should calculate correct value', () => {
        const fun = require('./reverseWords');
        expect(fun('Hello world test'.split(''))).toEqual('test world Hello'.split(''));
    });
});