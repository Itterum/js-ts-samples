import {introduction} from './data.js'

export const restAndSpread = () => {
    const copyArr2 = [...introduction]
    console.log(copyArr2)
    console.log(...copyArr2)

    const getSize = (...args) => {
        return args.length
    }

    console.log(getSize(1, 5, 10))
    console.log(getSize(10, 20, 40, 50, 60))
}
