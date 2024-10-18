import {name, jedi} from './data.js'

export const destructuring = () => {
    const [firstName, lastName] = name
    console.log(firstName, lastName)

    const {name: jediName, species, ...rest} = jedi
    console.log(jediName)
    console.group(species)
    console.log(rest)
}
