const sum = require('./sum.js');

describe('test the sum function', () => {
    it('return sum', () => {
        expect(sum(4,5)).toBe(9);
        expect(sum(0,0)).toBe(0);
    });
    it('return error when it inst a number', () => {
        expect(() => sum(4,'5')).toThrowError();
        expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
    })
});
