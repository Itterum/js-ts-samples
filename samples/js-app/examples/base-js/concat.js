export const concat = () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [10, 20, 30, 40]
    const arr3 = [100, 200, 300, 400]

    const mergedArr = arr1.concat(arr2, arr3)
    console.log(mergedArr)
}
