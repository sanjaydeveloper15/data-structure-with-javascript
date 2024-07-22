// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

function averagePair(inputSortedArray, pairAverage) {
    // validations
    if (!Array.isArray(inputSortedArray)) {
        return 'Input parameter should be array only'
    }
    const arrCounts = inputSortedArray.length
    let resultArr = []
    if (arrCounts > 0) {
        let leftIndex = 0, rightIndex = arrCounts - 1
        while (leftIndex < rightIndex) {
            // console.log(leftIndex, rightIndex)
            const leftIndexVal = inputSortedArray[leftIndex]
            const rightIndexVal = inputSortedArray[rightIndex]
            const sum = (leftIndexVal + rightIndexVal)/2
            if (sum === pairAverage) {
                resultArr.push(leftIndexVal, rightIndexVal)
                break
            } else if (sum < pairAverage) {
                leftIndex++
            } else {
                rightIndex--
            }
        }

    }
    console.log('---------------------------------------------')
    return resultArr.length > 0 ? resultArr : undefined
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
