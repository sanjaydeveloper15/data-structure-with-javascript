// const arr1 = [1, 2, 3]
// const arr2 = [2, 4, 99, 101]

const arr1 = [1, 10, 50];
const arr2 = [2, 14, 99, 100, 134, 345];

const mergeSorted = ((inputArr1, inputArr2) => {
    const mergeSortedArr = [];
    let i=0, j=0;
    while(i<inputArr1.length && j<inputArr2.length) {
        if(inputArr1[i] < inputArr2[j]) {
            mergeSortedArr.push(inputArr1[i])
            i++
        } else {
            mergeSortedArr.push(inputArr2[j])
            j++
        }
    }
    while(i < inputArr1.length) {
        mergeSortedArr.push(inputArr1[i])
        i++
    }
    while(j < inputArr2.length) {
        mergeSortedArr.push(inputArr2[j])
        j++
    }
    return mergeSortedArr;
})

console.log(mergeSorted(arr2, arr1));