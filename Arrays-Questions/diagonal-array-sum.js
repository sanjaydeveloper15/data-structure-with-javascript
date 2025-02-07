
// 1 2 3
// 4 5 6
// 9 8 9

let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
// O(nSquare)
const getDiagonalSums = (matrixArr) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < matrixArr.length; i++) {
        //let firstIndex = 0;
        let lastIndex = matrixArr[i].length - 1;
        for (let j = 0; j < matrixArr[i].length; j++) {
            sum1 += matrixArr[j][j];
            sum2 += matrixArr[j][lastIndex - j];
        }
        break;
    }
    return [sum1, sum2];
}
console.log(getDiagonalSums(arr))

/**
 * 1. Given a square matrix (2D array), calculate the sum of the primary diagonal and the secondary diagonal.
 * Self Optimized - O(n)
 */

function getDiagonalArraySum(inputArr) {
    let leftSum = 0; rightSum = 0, totalIterations = 0;

    for (let i = 0; i < inputArr.length; i++) {
        leftSum += inputArr[i][i]
        rightSum += inputArr[i][inputArr[i].length - i - 1]
        totalIterations++
    }

    console.log('totalIterations', totalIterations)
    return [leftSum, rightSum]
}

console.log(getDiagonalArraySum(arr));

