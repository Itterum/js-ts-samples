import {characterArr} from './data.js'

export const sliceAndSplice = () => {
    const copyArr = [...characterArr]

    copyArr.splice(0, 1)
    console.log(copyArr)

    copyArr.splice(copyArr.length, 1, 'Wonder Woman')
    console.log(copyArr)

    const selected = characterArr.slice(0, 2)
    console.log(selected)

    console.log(characterArr)
}
