import memoize from './memoize.js'
import add from '../examples/types-d-ts/animal.js'

(() => {
    const memoizedSum = memoize((a, b) => a + b)

    console.log(memoizedSum(5, 6))
    console.log('Hello, World!')

    const result = add(2, 3)

    console.log(result)
})()
