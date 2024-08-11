// Write a function called the same. Which accepts 2 arrays. The function should return true if every value in the array
// has its corresponding value squared in the second array. The frequency of values must be the same.

const arr1 = [1, 2, 3] // Frequency {"1":1, "2":1, "3":1}
const arr2 = [1, 9, 4] // Frequency {"1":1, "9":1, "4":1}

const arr3 = [4, 5, 4]
const arr4 = [16, 25, 25]


const arr5 = [1, 2, 3, 2]
const arr6 = [9, 1, 4, 4]


const arr7 = [1, 2, 2]
const arr8 = [1, 4, 1]


const isSameFrequency = (inputArr1, inputArr2) => {
    // validations a) isArray() b) frequencyCheck
    if (!inputArr1 || !inputArr2) {
        return 'Both input arrays are required';
    }
    if (!Array.isArray(inputArr1) || !Array.isArray(inputArr2)) {
        return 'Both input should be array only';
    }
    if (inputArr1.length != inputArr2.length) {
        return 'Both input arrays element frequency should be same';
    }

    // get the letter wise frequency of both array
    let arrOneFrequencyCount = {};
    for (let ele of inputArr1) {
        arrOneFrequencyCount[ele] = (arrOneFrequencyCount[ele]) ? arrOneFrequencyCount[ele] + 1 : 1;
    }
    // console.log(arrOneFrequencyCount)
    let arrTwoFrequencyCount = {};
    for (let ele of inputArr2) {
        arrTwoFrequencyCount[ele] = (arrTwoFrequencyCount[ele]) ? arrTwoFrequencyCount[ele] + 1 : 1;
    }
    // console.log(arrTwoFrequencyCount)

    // 1*1 = 1  val = !freq[1] = false
    // (val1 != val2) ? false : true
    let result = true;
    Object.keys(arrOneFrequencyCount).forEach((k) => {
        if (result) {
            const eleSquareVal = k * k;
            // squared value not exists
            const objTwoKeyVal = arrTwoFrequencyCount[eleSquareVal];
            if (!objTwoKeyVal) {
                // console.log(`Squared value not found for ${k}`)
                result = false;
            }
            // check element frequency
            if (objTwoKeyVal != arrOneFrequencyCount[k]) {
                // console.log(`Frequency for 1st ele is ${arrOneFrequencyCount[k]} and 2nd ele is ${objTwoKeyVal}, which is not same.`);
                result = false;
            }
        }
    })
    return result;
}
console.log(isSameFrequency(arr3, arr4))
console.log(isSameFrequency(arr5, arr6))

// Time Complexity O(n)