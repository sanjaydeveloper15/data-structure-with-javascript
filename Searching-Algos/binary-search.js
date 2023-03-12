// Write a program to check if value/target exists or not in ascending array in O(log n) time complexity ?
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

console.log(customInArray([1,3,5,6,9,14,29,57,89],29));