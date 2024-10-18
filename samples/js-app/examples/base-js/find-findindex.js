import {DATA} from './data.js'

export const findAndFindIndex = () => {
    const itemIdx = DATA.findIndex(el => el.id === 2)
    console.log(itemIdx)

    const item = DATA.find(el => el.id === 2)
    console.log(item)
}
