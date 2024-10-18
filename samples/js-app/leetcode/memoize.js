/*
Данная функция fn должна вернуть memoized-версию самой функции.

Memoized-функция - это функция, которая никогда не будет вызываться дважды с одинаковыми аргументами. Вместо этого, она вернёт кешированное значение.

Можно предположить, что существуют три возможных функции: sum, fib и factorial.

Sum принимает на вход два целых числа a и b и возвращает a + b. Предполагается, что если значение было уже кешировано для аргументов (b, a) где a != b, то оно не может быть использовано для аргументов (a, b). Например, если аргументы (3, 2) и (2, 3), функция должна быть вызвана дважды.
Fib принимает на вход единственное целое число n и возвращает 1, если n <= 1 или fib(n - 1) + fib(n - 2) в противном случае.
Factorial принимает на вход единственное целое число n и возвращает 1, если n <= 1 или factorial(n - 1) * n в противном случае.

https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript
*/

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map()

    return function (...args) {
        const key = JSON.stringify(args)
        const result = !cache.has(key) ? cache.set(key, fn(...args)) : cache.get(key)

        return result && cache.get(key)
    }
}

export default memoize
