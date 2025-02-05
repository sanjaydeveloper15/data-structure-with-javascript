/**
 * Q. Determine if the sum of two integers is equal to the given value
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time complexiy O(n²)
 */
var twoSum = function (nums, target) {
    const indexResultPair = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                indexResultPair.push(i, j)
                break;
            }
        }
        if (indexResultPair.length > 0) break;
    }
    return indexResultPair;
};

console.log(twoSum([2, 7, 11, 15], 9))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time complexiy O(n)
 */
var twoSumOpt = function (nums, target) {
    const sortedNums = nums.map((value, index) => ({ value, index }));
    sortedNums.sort((a, b) => a.value - b.value);

    let left = 0, right = nums.length - 1;
    while (left < right) {
        const sum = sortedNums[left].value + sortedNums[right].value;
        if (sum === target) {
            return [sortedNums[left].index, sortedNums[right].index];
        }
        sum < target ? left++ : right--;
    }

    return [];

};

console.log(twoSumOpt([2, 7, 11, 15], 9))

let arr = [5, 7, 1, 2, 8, 4, 3]

function hasPairWithSum(arr, target) {
    const seen = new Set(); //2, 7

    for (const num of arr) {
        const complement = target - num;
          console.log(complement)
        //   console.log(seen)
        if (seen.has(complement)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}

console.log(hasPairWithSum(arr, 10)); // true 
console.log(hasPairWithSum([2, 8, 11, 14], 20));    // false
