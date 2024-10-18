// 2629. Function Composition
/**
 * @param {Function[]} functions
 * @return {Function}
 */
export const compose = function (functions) {
    return function (x) {
        return functions.reduceRight((acc, fn) => fn(acc), x)
    }
}

// 2703. Return Length of Arguments Passed
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
export const argumentsLength = function (...args) {
    return args.length
}

// 2666. Allow One Function Call
/**
 * @param {Function} fn
 * @return {Function}
 */
export const once = function (fn) {
    let called = false

    return function (...args) {
        if (!called) {
            called = true
            return fn(...args)
        }
    }
}
