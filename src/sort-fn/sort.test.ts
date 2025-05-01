import {sort} from './sort'

describe('Package Sorting', () => {
    it('should return STANDARD for non-bulky and non-heavy package', () => {
        expect(sort(50, 50, 50, 10)).toBe('STANDARD')
    })

    it('should return SPECIAL for bulky package by volume', () => {
        expect(sort(200, 200, 25, 10)).toBe('SPECIAL')
    })

    it('should return SPECIAL for bulky package by dimension', () => {
        expect(sort(151, 100, 100, 10)).toBe('SPECIAL')
    })

    it('should return SPECIAL for heavy package', () => {
        expect(sort(50, 50, 50, 25)).toBe('SPECIAL')
    })

    it('should return REJECTED for heavy and bulky package', () => {
        expect(sort(151, 151, 151, 25)).toBe('REJECTED')
    })

    it('should throw error for non-numeric input', () => {
        // @ts-expect-error
        expect(() => sort('100', 100, 100, 10)).toThrow('All inputs must be valid numbers.')
    })

    it('should throw error for NaN input', () => {
        expect(() => sort(NaN, 100, 100, 10)).toThrow('All inputs must be valid numbers.')
    })

    it('should throw error for missing arguments', () => {
        // @ts-expect-error
        expect(() => sort(100, 100, 100)).toThrow('Sort requires exactly 4 arguments.')
    })
})
