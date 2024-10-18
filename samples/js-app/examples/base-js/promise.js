export const fetchData = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people')

        if (!response.ok) new Error(response.status.toString())

        return await response.json()
    } catch (e) {
        console.log(e)
    }
}
