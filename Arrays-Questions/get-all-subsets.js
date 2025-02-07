let case1Arr = [2, 3, 4]
let case2Arr = [2, 3, 4, 5]

/**
 * Q. Find all subsets of a given set of integers
 * Time Complexity: O(2powerN) , 3 elements 2 x 2 x 2 = 8 Sets, 4 elements 2 x 2 x 2 x 2 = 16
 * Space Complexity: O(1)
 * @param {Array} inputArr 
 * @returns {Set}
 */
function getAllSubset(inputArr) {
    const resultSubset = new Set();
    // const resultArr = [];

    // for (let i = 0; i < inputArr.length; i++) {
    //     for (let j = i; j < inputArr.length; j++) {
    //         resultSubset.add(`${inputArr[i]}`)
    //         resultSubset.add(`${inputArr[j]}`)
    //         resultSubset.add(`${[inputArr[i],inputArr[j]]}`)
    //         resultSubset.add(`${inputArr.slice(i, j+1)}`)
    //     }
    // }
    
    function backtracking(start, currentArr) {
        // resultArr.push([...currentArr])
        resultSubset.add([...currentArr])
        for(let i = start; i < inputArr.length; i++) {
            currentArr.push(inputArr[i])
            backtracking(i + 1, currentArr)
            // console.log(currentArr, currentArr.pop())
            currentArr.pop()
        }
    }

    backtracking(0, []);

    return resultSubset;
    // return new Set(resultArr);
}

/**
 * 2
 * 3
 * 4
 * 2 3
 * 2 4
 * 3 4
 * 2 3 4
 */

console.log(getAllSubset(case1Arr))
console.log(getAllSubset(case2Arr))