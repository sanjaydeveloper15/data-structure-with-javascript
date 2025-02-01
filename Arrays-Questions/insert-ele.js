/**
 * Q. Insert new element at 3rd position
 * Time complexity O(n), cause using slice and splice methods due to element shifting
 * Ideally linear search
 */

let arr = [1,2,4,5,6];
let leftArr = arr.slice(0,2);
let middleArr = [3]
let rightArr = arr.slice(2)
let resultArr = [];

resultArr.push(...leftArr)
resultArr.push(...middleArr)
resultArr.push(...rightArr);

console.log('slice',resultArr)

// With splice
arr.splice(2,0,3);
console.log('splice one liner',arr)
