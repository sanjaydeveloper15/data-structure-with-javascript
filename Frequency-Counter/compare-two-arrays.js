// Write a function called the same. Which accepts 2 arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

const arr1 = [1, 2, 3]
const arr2 = [1, 9, 4]


const arr3 = [4, 5, 4]
const arr4 = [16, 25, 25]


const arr5 = [1, 2, 3, 2]
const arr6 = [9, 1, 4, 4]


// validations
// loop first array
// square each each
// check includes in second array
// remove that matched element for frequency check

const sameFrequency = (firstArr, secondArr) => {
    if (Array.isArray(firstArr) && Array.isArray(firstArr)) {
        let result;
        for (let i = 0; i < firstArr.length; i++) {
            result = false;
            const ele = firstArr[i];
            const eleSquare = ele * ele;
            const foundIndex = secondArr.indexOf(eleSquare); // another loop
            if (foundIndex != -1) {
                secondArr.splice(foundIndex, 1); // delete the element
                console.log(secondArr)
                result = true;
            } else {
                break;
            }
        }
        return result;
    } else {
        return 'both element should be array only.'
    }
}


console.log(sameFrequency(arr1, arr2))


// Time Complexity O(n^2)