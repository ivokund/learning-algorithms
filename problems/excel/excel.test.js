describe('excel', () => {
    it('should calculate correct value', () => {
        const getColumn = require('./excel');

        expect(getColumn('A')).toBe(1);
        expect(getColumn('Z')).toBe(26);
        expect(getColumn('AA')).toBe(27);
        expect(getColumn('AAA')).toBe(703);
    });
});