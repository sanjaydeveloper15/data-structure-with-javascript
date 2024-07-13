// Write a function called maxSubarraySum which accepts an array of Integers and a number called N. 
// The function should calculate the maximum sum of N **Consecutive** elements in the array.
console.log('--------------------- Method 1: Basic ----------------------')
const maxSubarraySum = (inputArr, subArrEle) => {
    const fnStartTime = Date.now()
    // validations
    if (!inputArr) {
        return 'ERROR: Input sorted array is required'
    }
    if (!Array.isArray(inputArr)) {
        return `ERROR: Input parameter should be sorted array only currently it is ${typeof inputArr}`
    }
    console.log('inputArr length:',inputArr?.length)
    let result = 0;
    let totalLoopRuns = 0;
    for(let i=0; i<inputArr.length-subArrEle+1; i++) {
        let subArrEleSum = 0;
        totalLoopRuns++
        for(let j=i; j<i+subArrEle; j++) {
            totalLoopRuns++
            subArrEleSum += inputArr[j];
        }
        result = (result < subArrEleSum) ? subArrEleSum : result;
    }
    console.log('totalLoopRuns:',totalLoopRuns)
    const fnEndTime = Date.now();
    console.log('Total Time Taken:', fnEndTime - fnStartTime);
    console.log('result:',result)
    console.log('<------------------------------------------------->');
    return '';
}


console.log(maxSubarraySum([1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,
    1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0
    ,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,
    1,2,5,2,8,1,5,1,2,1,2,4,5,14,0
],2)) // 19
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum('Sanjay')) // error
console.log(maxSubarraySum()) // error

console.log('--------------------- Method 2: Optimized ----------------------')

const maxSubarraySum2 = (inputArr, subArrEle) => {
    // validations
    if (!inputArr) {
        return 'Input sorted array is required'
    }
    if (!Array.isArray(inputArr)) {
        return `Input parameter should be sorted array only currently it is ${typeof inputArr}`
    }
    console.log('inputArr length:',inputArr?.length)
    let maxSum = 0;
    let totalLoopRuns = 0;
    // first subEleSum
    for(let i=0; i<subArrEle; i++) {
        maxSum += inputArr[i]
        totalLoopRuns++
    }
    for(let j = subArrEle; j<inputArr.length; j++) {
        const sumWithNext = Number(maxSum) + Number(inputArr[j]);
        console.log(sumWithNext)
        const currentSubArrEleSum = Number(sumWithNext) - Number(inputArr[j - subArrEle]);
        maxSum = (maxSum < currentSubArrEleSum) ? currentSubArrEleSum : maxSum;
        totalLoopRuns++
    }
    console.log('totalLoopRuns:',totalLoopRuns)
    console.log('result:',maxSum);
    console.log('<------------------------------------------------->');
    return '';
}

console.log(maxSubarraySum2([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum2([1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,
    1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0
    ,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,1,2,5,2,8,1,5,1,2,1,2,4,5,14,0,
    1,2,5,2,8,1,5,1,2,1,2,4,5,14,0
],2)) // 19
console.log(maxSubarraySum2([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum2([4,2,1,6],1)) // 6
console.log(maxSubarraySum2('Sanjay')) // error
console.log(maxSubarraySum2()) // error
