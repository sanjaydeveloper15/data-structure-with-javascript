// At Concentrix R1
var a = [1, [2, [3, 4], [10, 7], 5], [9]]

const findNumbers = (inputArr, low, high) => {
    // const betweenNums = new Set();
    const betweenNumsArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        const ele = inputArr[i]
        if (Array.isArray(ele)) {
            betweenNumsArr.push(...findNumbers(ele, low, high))
        } else {
            if (ele >= low && ele <= high) {
                betweenNumsArr.push(ele)
            }
        }
    }

    return betweenNumsArr;

}

console.log(findNumbers(a, 5, 12))