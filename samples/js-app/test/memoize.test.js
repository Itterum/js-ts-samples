const memoize = require('../leetcode/memoize.js')

describe('memoize tests', () => {
    test('sum function', () => {
        let callCount = 0

        const sum = memoize((a, b) => {
            callCount += 1
            return a + b
        })

        expect(sum(2, 3)).toBe(5)
        expect(sum(2, 3)).toBe(5)
        expect(callCount).toBe(1)

        callCount = 0
        expect(sum(0, 0)).toBe(0)
        expect(sum(0, 0)).toBe(0)
        expect(callCount).toBe(1)
    })

    test('fib function', () => {
        let callCount = 0

        const fib = memoize(n => {
            callCount += 1
            return n <= 1 ? 1 : fib(n - 1) + fib(n - 2)
        })

        expect(fib(5)).toBe(8)
        expect(fib(5)).toBe(8)
        expect(callCount).toBeLessThan(15)
    })

    test('factorial function', () => {
        let callCount = 0

        const factorial = memoize(n => {
            callCount += 1
            return n <= 1 ? 1 : factorial(n - 1) * n
        })

        expect(factorial(5)).toBe(120)
        expect(factorial(5)).toBe(120)
        expect(callCount).toBe(5)
    })
})
