
// 1 2 3
// 4 5 6
// 9 8 9

let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];

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