let arr = [1, 2, 1, 3, 2, 1, 2, 3, 4, 5];

// O(nSquare) due to .includes
const getDuplicateFromArr = (inputArr) => {
    let resultArr = [];
    let obj = {};
    for (let i = 0; i < inputArr.length; i++) {
        if (obj[inputArr[i]]) {
            if (!resultArr.includes(inputArr[i])) {
                resultArr.push(inputArr[i]);
            }
        } else {
            obj[inputArr[i]] = 1;
        }
    }
    return resultArr;
}

console.log(getDuplicateFromArr(arr));

// O(n) due to Set has O(1)
function getDuplicateFromArrOpt(inputArr) {
    const duplicateSet = new Set();
    const uniqueSet = new Set();
    for (let i = 0; i < inputArr.length; i++) {
        if (uniqueSet.has(inputArr[i])) {
            duplicateSet.add(inputArr[i]);
        } else {
            uniqueSet.add(inputArr[i])
        }
    }
    return duplicateSet;
}

console.log(getDuplicateFromArrOpt(arr))