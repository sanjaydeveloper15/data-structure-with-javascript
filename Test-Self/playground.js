// inputArr[
//     2, 3, 4, 4, 5, 9, 7,
//     8, 6, 10, 4, 5, 10, 10,
//     8, 4, 6, 4, 10, 1
// ]

// inputArr[
//     8, 34, 40, 2, 2, 22, 32, 22, 3, 32, 7, 31,
//     16, 29, 22, 46, 45, 10, 45, 46, 45, 23, 16, 4,
//     45, 12, 5, 39, 45, 4, 47, 31, 1, 7, 35, 12,
//     27, 8, 46, 47, 50, 27, 14, 26, 11, 20, 45, 15,
//     38, 24, 10, 13, 6, 6, 9, 17, 13, 28, 43, 41,
//     33, 46, 17, 21, 25, 4, 9, 3, 32, 33, 4, 50,
//     24, 30, 37, 27, 34, 13, 15, 9, 37, 26, 38, 16,
//     19, 47, 3, 43, 22, 13, 28, 17, 23, 35, 44, 17,
//     32
// ]

// 5, 4, 2, 4, 1, 2 = 4, 5
// 3, 7, 5, 6, 2 = 6, 7
// 4, 2, 5, 1, 6 = 5, 6



/*
 * Complete the 'minimalHeaviestSetA' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimalHeaviestSetA(arr) {
    // Write your code here
    // 6, 9, 5, 10
    // 7, 3, 8
    // 6, 11
    // 7
    // const pairSumMap = new Map()
    console.log('inputArr', arr)
    function getArrSumExpectValues(completeArr, expectIndexArr) {
        let bSum = 0;
        for (let i = 0; i < completeArr.length; i++) {
            if (!expectIndexArr.includes(i)) {
                bSum += completeArr[i]
            }
        }
        return bSum
    }

    // let resultPairSet = new Set()
    let resultPairArr = []
    let maxPairSum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let left = arr[i]
            let right = arr[j]
            const currentPairSum = left + right
            const expectValuesSum = getArrSumExpectValues(arr, [i, j]);
            console.log(`${left}, ${right}`, currentPairSum, expectValuesSum)
            if (currentPairSum > expectValuesSum && currentPairSum > maxPairSum) {
                [left, right] = (left > right) ? [right, left] : [left, right];
                // resultPairSet.add(`${left}, ${right}`)
                // resultPairArr.push(left, right)
                console.log(left, right)
                resultPairArr[0] = left
                resultPairArr[1] = right
                maxPairSum = currentPairSum
            }
        }
    }
    // let resultPairArr = Array.from(resultPairSet)
    // resultPairArr = resultPairArr.flat(2)
    // let finalResultArr = []
    // resultPairArr.map((pair) => {
    //     let singlePairArr = pair.split(',')
    //     finalResultArr.push(parseInt(singlePairArr[0]), parseInt(singlePairArr[1]))
    //     // console.log(singlePairArr[0])
    //     // console.log(singlePairArr[1])
    // })
    // console.log(finalResultArr)
    return resultPairArr
}

function minimalHeaviestSet(A) {
    // Sort the array in descending order to consider the largest numbers first
    A.sort((a, b) => b - a);

    let totalSum = A.reduce((sum, num) => sum + num, 0);
    let subsetSum = 0;
    let subset = [];

    // Loop through the sorted array and pick elements for the heaviest set
    for (let i = 0; i < A.length; i++) {
        subsetSum += A[i];
        subset.push(A[i]);
        if (subsetSum > totalSum - subsetSum) {
            break;
        }
    }

    return subset;
}

console.log(minimalHeaviestSet([8, 34, 40, 2, 2, 22, 32, 22, 3, 32, 7, 31,]));  // Output: [5, 4]
// console.log(minimalHeaviestSet([10, 20, 30, 40, 50])); // Output: [50, 40]


// console.log(minimalHeaviestSetA([2, 3, 4, 4, 5, 9, 7, 8, 6, 10, 4, 5, 10, 10, 8, 4, 6, 4, 10, 1]))
// console.log(minimalHeaviestSetA([1, 2, 3, 4, 5]))


// ===========================

// |||||******|**|****|******|*|*||*|******|*||**|***|***|**||*|**|***|*|*|**||***|******|*|||*****||||
// *|*|*| = 1,6
// *|*| = 1,3
// |**|*|* = 1,1 OR 5,6



/*
 * Complete the 'numberOfItems' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndices
 *  3. INTEGER_ARRAY endIndices
 */

function numberOfItems(s, startIndices, endIndices) {
    console.log(s, startIndices, endIndices)
    let substringArrSet = new Set()
    for (let i = 0; i < startIndices.length; i++) {
        let leftIndex = startIndices[i] - 1; // as generally comes 1
        let rightIndex = endIndices[i];
        // console.log('indexes values', leftIndex, rightIndex)
        // console.log('s length', s.length)
        substringArrSet.add(s.slice(leftIndex, rightIndex))
    }
    let resultArr = []
    for (const substring of substringArrSet) {
        let compartment, totalCompartment = 0;
        // console.log('substring',substring)
        for (const char of substring) {
            if (substring[0] === '|') { //if a 0 index pipe so already open
                compartment = 'open'
            }
            if (char === '|') {
                compartment = (compartment === 'open') ? 'close' : 'open';
            }
            if (compartment === 'close') {
                totalCompartment++
                compartment = 'open'
            }
        }
        resultArr.push(totalCompartment)
    }
    return resultArr
}


// ============== Subset

// 2
// 3
// 2 3
// 4
// 2 4
// 3 4
// 2 3 4

// ----------

// 2 3 4 5

// 2
// 3
// 2 3
// 2 4
// 2 5
// 3 4
// 3 5
// 4
// 4 5
// 5
// 2 3 4
// 3 4 5
// 2 3 4 5
console.log('...........................')

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = 0; j < (n - i) - 1; j++) {
            str = `${str} `
        }
        for (let k = 0; k <= i; k++) {
            str = `${str}#`
        }
        console.log(str)
    }
    return true
}

console.log(staircase(5))