describe('maxSumSubarray', () => {
    it('should calculate correct value', () => {
        const maxSum = require('./maxSumSubarray');

        expect(maxSum([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    });
});