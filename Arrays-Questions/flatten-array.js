/**
 * Flatten the below given array without using array.flat() method.
 * @param {Array} inputArr 
 * @param {Array} flattenArray 
 * @returns {Array}
 */


function customFlattenArray(inputArr, flattenArray = []) {
    if (!Array.isArray(inputArr)) return 'Input array is required.';
    if (inputArr.length === 0) return flattenArray;
    if (Array.isArray(inputArr[0])) {
        for (let i = 0; i < inputArr[0].length; i++) {
            if (Array.isArray(inputArr[0][i])) {
                return customFlattenArray(inputArr[0][i], flattenArray)
            } else {
                flattenArray.push(inputArr[0][i])
            }
        }
    } else {
        flattenArray.push(inputArr[0])
    }
    inputArr.splice(0, 1)
    return customFlattenArray([...inputArr], flattenArray);
}

let inputArr = [1, [2, 3], [4, 5, 6, [7, 8]]];
console.log(customFlattenArray(inputArr))
