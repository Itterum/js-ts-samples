import { data } from './generate-data.js'

function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        if (array[middle] === target) {
            return middle
        } else if (array[middle] > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
}

console.log(binarySearch(data, 75))
