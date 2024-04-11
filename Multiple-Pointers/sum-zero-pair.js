// Write a function called sumZero which accepts a sorted array of integers. The function should find he first Pair where the SUM is 0. Returns an array that includes both values that sum to zero OR undefined if a pair Does not exist.

const sumZero = (inputSortedArray) => {
    // validations
    if (!Array.isArray(inputSortedArray)) {
        return 'Input parameter should be array only'
    }
    const arrCounts = inputSortedArray.length
    let resultArr = []
    if (arrCounts > 0) {
        let leftIndex = 0, rightIndex = arrCounts - 1
        while (leftIndex < rightIndex) {
            console.log(leftIndex, rightIndex)
            const leftIndexVal = inputSortedArray[leftIndex]
            const rightIndexVal = inputSortedArray[rightIndex]
            const sum = leftIndexVal + rightIndexVal
            if (sum === 0) {
                resultArr.push(leftIndexVal, rightIndexVal)
                break
            } else if (sum < 0) {
                leftIndex++
            } else {
                rightIndex--
            }
        }

    }
    console.log('---------------------------------------------')
    return resultArr.length > 0 ? resultArr : undefined
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
console.log(sumZero([1, 2, 3])) // undefined
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero('hello')) // error
console.log(sumZero([-3, -2, -1, -1, 0, 1, 4, 5, 34, 98])) // [-1,1]