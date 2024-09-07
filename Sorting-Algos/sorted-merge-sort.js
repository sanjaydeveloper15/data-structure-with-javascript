const sortedArr1 = [1, 10, 50];
const sortedArr2 = [2, 14, 99, 100, 134, 345];

const args = process.argv.slice(1);

const sortedMergeSort = (inputSortArr1, inputSortArr2) => {
    let totalIterations = 0, resultArr = [];

    if (!Array.isArray(inputSortArr1) || !Array.isArray(inputSortArr2)) return 'WARN: Both input arrays should be data type array only';
    if (inputSortArr1.length === 0) return inputSortArr2;
    if (inputSortArr2.length === 0) return inputSortArr1;
    let i = 0, j = 0;
    while (i < inputSortArr1.length && j < inputSortArr2.length) {
        if (inputSortArr1[i] > inputSortArr2[j]) {
            resultArr.push(inputSortArr2[j]);
            j++;
        } else {
            resultArr.push(inputSortArr1[i]);
            i++;
        }
        totalIterations++;
    }

    while (i < inputSortArr1.length) {
        totalIterations++
        resultArr.push(inputSortArr1[i])
        i++
    }

    while (j < inputSortArr2.length) {
        totalIterations++
        resultArr.push(inputSortArr2[j])
        j++
    }

    console.log(`totalIterations: ${totalIterations}, inputSortArr1: ${inputSortArr1.length}, inputSortArr2: ${inputSortArr2.length}, resultArr: ${resultArr.length}`)
    return resultArr;
}

const runTestCases = () => {
    console.log(sortedMergeSort(sortedArr1, sortedArr2))
    console.log('==============================================')

    console.log(sortedMergeSort([3, 7, 12, 19, 25, 31, 42, 56, 68, 77], [2, 5, 9, 14, 22, 30, 41, 53, 67, 80]))
    console.log('==============================================')

    console.log(sortedMergeSort([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 54], [4, 8, 15, 23, 31, 37, 42, 50, 58, 64]))
    console.log('==============================================')

    console.log(sortedMergeSort([3, 6, 109], []))
    console.log('==============================================')

    console.log(sortedMergeSort([], []))
    console.log('==============================================')

    console.log(sortedMergeSort('array', [2, 3]))
    console.log('==============================================')
}

if (args.includes('test')) { runTestCases() }

module.exports = {
    sortedMergeSort
}