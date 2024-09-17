// Custom sorting program in JS via Bubble Sort?
let unSortArr = [4, -1, 34, 9, -9, 103];

const sortArr = (inputArr) => {
    var totalIterations = 0;
    for (let i = 0; i < inputArr.length; i++) {
        totalIterations++
        for (let j = i + 1; j < inputArr.length; j++) {
            totalIterations++
            let temp = inputArr[i];
            if (inputArr[i] > inputArr[j]) {
                inputArr[i] = inputArr[j];
                inputArr[j] = temp;
            }
        }
    }
    console.log('arrayLength', inputArr.length);
    console.log('totalIterations', totalIterations)
    return inputArr;
};

console.log(sortArr(unSortArr));

console.log('---------- Optimize Version ----------')

const sortArrOpt = (inputArr) => {
    var totalIterations = 0;
    let noSwapsReq;
    for (let i = 0; i < inputArr.length; i++) {
        totalIterations++
        noSwapsReq = true
        for (let j = i + 1; j < inputArr.length; j++) {
            totalIterations++
            let temp = inputArr[i];
            if (inputArr[i] > inputArr[j]) {
                inputArr[i] = inputArr[j];
                inputArr[j] = temp;
                noSwapsReq = false
            }
        }
        if (noSwapsReq) break;
    }
    console.log('arrayLength', inputArr.length);
    console.log('totalIterations', totalIterations)
    return inputArr;
};

console.log(sortArrOpt(unSortArr));
