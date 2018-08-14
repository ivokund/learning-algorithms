describe('binarySearch', () => {
    it('should calculate correct value', () => {
        const testArray = [-500, -400, -300, -200, -100, 0, 1, 2, 3, 15, 20, 70, 90, 100, 200, 300, 500, 700];
        const fun = require('./binarySearch');
        expect(fun(testArray, 20)).toEqual(10);
        expect(fun(testArray, 999)).toEqual(undefined);
        expect(fun([], 999)).toEqual(undefined);
        expect(fun([10], 10)).toEqual(0);
        expect(fun([10, 11], 11)).toEqual(1);
    });
});