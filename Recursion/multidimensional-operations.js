console.log('---- Multidimensional Arrays --------');
let multiArr = [1, 2, [3, 4, [5, 6], 7], 8, 9, [10], 11];

const arrSum = (inputMultiArr) => {
    let totalSum = 0;
    inputMultiArr = inputMultiArr.flat(10);
    for (let i = 0; i < inputMultiArr.length; i++) {
        totalSum += inputMultiArr[i];
    }
    return totalSum;
}

console.log('arrSum() Result:', arrSum(multiArr));

console.log(`--------------------------`);

const arrSumRecursion = (inputMultiArr) => {
    let totalSum = 0;
    for (let i = 0; i < inputMultiArr.length; i++) {
        if (Array.isArray(inputMultiArr[i])) {
            totalSum += arrSumRecursion(inputMultiArr[i]);
        } else {
            totalSum += inputMultiArr[i];
        }
    }
    return totalSum;
}

console.log('arrSumRecursion() Result:', arrSumRecursion(multiArr));

console.log(`--------------------------`)

const arrMultiplyRecursion = (inputMultiArr) => {
    let totalMultiplyVal = 1;
    for (let i = 0; i < inputMultiArr.length; i++) {
        if (Array.isArray(inputMultiArr[i])) {
            totalMultiplyVal *= arrMultiplyRecursion(inputMultiArr[i]);
        } else {
            totalMultiplyVal *= inputMultiArr[i];
        }
    }
    console.log(typeof totalMultiplyVal, Number(totalMultiplyVal))
    return totalMultiplyVal;
}

console.log('arrMultiplyRecursion() Result:', arrMultiplyRecursion(multiArr).toLocaleString());