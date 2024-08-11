//Write a program to flat Matrix array [1,[2,3],[4,5,6,[7,8]]] = [1,2,3,4,5,6,7,8]

const flatArray = (matrixArray, innerArray = [], startFrom = 0, resultArr = []) => {
    let count = 0;
    let loopArray = (innerArray.length === 0) ? matrixArray : innerArray;
    let tempStartFrom = startFrom;
    startFrom = (innerArray.length === 0) ? tempStartFrom : 0;
    for (let i = startFrom; i < loopArray.length; i++) {
        if (Array.isArray(loopArray[i])) {
            return flatArray(matrixArray, matrixArray[i], i, resultArr);
        }
        else {
            resultArr.push(loopArray[i]);
        }
    }


    count++;

    if (count == 3) return false;

    if (tempStartFrom != 0 && tempStartFrom < matrixArray.length - 1) {
        console.log(matrixArray, [], tempStartFrom, resultArr)
        return flatArray(matrixArray, [], tempStartFrom, resultArr);
    }


    return resultArr;
}

let inputArr = [1, [2, 3], [4, 5, 6, [7, 8]]];

console.log(flatArray(inputArr));