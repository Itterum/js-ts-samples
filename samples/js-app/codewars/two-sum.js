function twoSum(numbers, target) {
    const numToIndex = new Map()

    for (let i = 0;i < numbers.length;i++) {
        const complement = target - numbers[i]
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i]
        }
        numToIndex.set(numbers[i], i)
    }

    return []
}

console.log(twoSum([1, 2, 3], 4))
