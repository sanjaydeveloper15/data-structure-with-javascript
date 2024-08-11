// Implement a Fn called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.
console.log('--------------------- Method 1: ----------------------')
const countUniqueValues = (sortedArr) => {
    // validations
    if (!sortedArr) {
        return 'Input sorted array is required'
    }
    if (!Array.isArray(sortedArr)) {
        return `Input parameter should be sorted array only currently it is ${typeof sortedArr}`
    }
    const uniqueSet = new Set()
    for (let ele of sortedArr) {
        uniqueSet.add(ele)
    }
    return (Array.from(uniqueSet)).length
}

console.log(countUniqueValues([-3, -3, 0, 1, 3, 5, 6, 7, 10, 10, 10, 11])) // 9
console.log(countUniqueValues([-2, 1, 1, 1, 1, 2])) // 3
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 90, 1006, 1006, 998865])) // 5
console.log(countUniqueValues('Sanjay')) // error
console.log(countUniqueValues()) // error

console.log('--------------------- Method 2: ----------------------')
const countUniqueValues2 = (sortedArr) => {
    // validations
    if (!sortedArr) {
        return 'Input sorted array is required'
    }
    if (!Array.isArray(sortedArr)) {
        return `Input parameter should be sorted array only currently it is ${typeof sortedArr}`
    }
    let leftIndex = 0, rightIndex = (sortedArr.length > 0) ? 1 : 0
    let uniqueValues = 1
    let loopCount = 0
    let lastEleVal = sortedArr[sortedArr.length - 1]
    while (leftIndex < rightIndex) {
        loopCount++
        // console.log(leftIndex, rightIndex)
        const leftIndexVal = sortedArr[leftIndex], rightIndexVal = sortedArr[rightIndex]
        if (leftIndexVal != rightIndexVal) {
            uniqueValues++
        }
        leftIndex = rightIndex
        rightIndex = leftIndex + 1
        if (rightIndex >= sortedArr.length || lastEleVal === rightIndexVal) {
            break
        }
    }
    console.log(`Loop Count; ${loopCount} & Array Length: ${sortedArr.length}`)
    return uniqueValues
}

console.log(countUniqueValues2([-3, -3, 0, 1, 3, 5, 6, 7, 10, 10, 10, 11])) // 9
console.log(countUniqueValues2([-2, 1, 1, 1, 1, 2])) // 3
console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues2([1, 1, 1, 1, 1, 2, 90, 1006, 1006, 998865, 998865, 998865, 998865, 998865, 998865, 998865, 998865, 998865, 998865, 998865, 998865, 998865, 998865])) // 5
console.log(countUniqueValues2('Sanjay')) // error
console.log(countUniqueValues2()) // error