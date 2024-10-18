import {DATA} from './data.js'

export const mapAndFilter = () => {
    const upperData = DATA.map(el => el.title.toUpperCase())
    console.table(upperData)

    const moduloData = DATA.filter(el => el.id % 2 === 0)
    console.table(moduloData)

    console.table(DATA)
}
