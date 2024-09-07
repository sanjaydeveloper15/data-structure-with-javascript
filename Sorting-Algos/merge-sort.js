const { sortedMergeSort } = require("./sorted-merge-sort");

const mergeSort = (inputUnsortedArr) => {
    if (inputUnsortedArr.length <= 1) return inputUnsortedArr;
    let mid = Math.round(inputUnsortedArr.length / 2),
        leftArr = mergeSort(inputUnsortedArr.slice(0, mid)),
        rightArr = mergeSort(inputUnsortedArr.slice(mid));
    console.log(`mid: ${mid}, leftArr: ${leftArr}, rightArr: ${rightArr}`);
    return sortedMergeSort(leftArr, rightArr);
}

console.log(mergeSort([10, 53, 0, 34]));