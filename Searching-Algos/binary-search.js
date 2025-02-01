// Write a program to check if value/target exists or not in ascending array in O(log n) time complexity?

const customInArray = (sortedArray, key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArray[middle] === key) {
            return true;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return false;
}

console.log(customInArray([1, 3, 5, 6, 9, 14, 29, 57, 89], 29));


// get index number or return -1 via binary search
const binarySearch = (sortedNumArr, findVal) => {
    if (!sortedNumArr || sortedNumArr.length < 1) return -1;
    console.log(`----- Total Array Length: ${sortedNumArr.length} -----`);
    let leftIndex = 0;
    let rightIndex = sortedNumArr.length - 1;
    let midIndex = Math.round((leftIndex + rightIndex) / 2);
    let i = 0;
    while (leftIndex < rightIndex) {
        i++;
        console.log('i:',i);
        if (findVal === sortedNumArr[leftIndex]) return leftIndex;
        if (findVal === sortedNumArr[rightIndex]) return rightIndex;
        if (findVal === sortedNumArr[midIndex]) return midIndex;

        if (findVal > sortedNumArr[midIndex]) {
            leftIndex = midIndex;
            midIndex = Math.round((leftIndex + rightIndex) / 2);
        } else {
            rightIndex = midIndex;
            midIndex = Math.round((leftIndex + rightIndex) / 2);
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([1, 3, 5, 6, 9, 14, 29, 57, 89], 29)); // 1

let arr = [1, 2, 3, 4, 10, 20, 31, 43, 51]

function inArray(val) {
    let result = false;
    let leftIndex = 0, rightIndex = arr.length - 1, midIndex;
    let count = 0;
    while(leftIndex < rightIndex) {
        midIndex = Math.round((leftIndex + rightIndex)/2)
        if(arr[leftIndex] === val || arr[midIndex] === val || arr[rightIndex] === val) return true
        if(midIndex === rightIndex) return false
        if(val > arr[midIndex]) {
            leftIndex = midIndex
        } else {
            rightIndex = midIndex
        }
        count ++
        console.log(count)
    }
    return result;
}

console.log(inArray(43));