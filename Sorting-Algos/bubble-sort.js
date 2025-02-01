// Custom sorting program in JS via Bubble Sort?
// Time Complexity O(nSquare)
// Space Complexity O(1)
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


// Time Complexity: O(nSquare)
function sortArrPlayGround(inputArr, type) {
    // Step 1: validations checks
    type = type.toLowerCase();
    const validSortTypes = ['asc', 'desc'];
    if (!Array.isArray(inputArr)) {
        return 'Input parameter should be array only.';
    }
    if (!validSortTypes.includes(type)) {
        return 'Sort type should be asc or desc only.';
    }

    // Step 2: start sorting algo
    if(type === 'asc') {
        for (let i = 0; i < inputArr.length; i++) {
            for(let j = i + 1; j < inputArr.length; j++) {
                if(inputArr[i] > inputArr[j]) {
                    const tempEleVal = inputArr[i]
                    inputArr[i] = inputArr[j];
                    inputArr[j] = tempEleVal;
                }
            }
        }
    }
    if(type === 'desc') {
        for (let i = 0; i < inputArr.length; i++) {
            for(let j = i + 1; j < inputArr.length; j++) {
                if(inputArr[i] < inputArr[j]) {
                    const tempEleVal = inputArr[i]
                    inputArr[i] = inputArr[j];
                    inputArr[j] = tempEleVal;
                }
            }
        }
    }
    return inputArr;
}