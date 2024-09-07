console.log('~~~~~~~ Sum ~~~~~~~~');

/**
 * Time Complexity : O(n)
 * Space Complexity: O(n) 
 */
const sumRange = (uptoNum) => {
    console.log('uptoNum',uptoNum);
    if(uptoNum === 1) return 1;
    return uptoNum + sumRange(uptoNum -1);
}

console.log(sumRange(2));
console.log('~~~~~~~~~~~~~~~~~~~~~')
console.log(sumRange(3));
console.log('~~~~~~~~~~~~~~~~~~~~~')
console.log(sumRange(4));
console.log('~~~~~~~~~~~~~~~~~~~~~')
console.log(sumRange(5));

console.log('~~~~~~~~~~~~~~~~~~~~~')
console.log('~~~~~~~ Factorial ~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~')

/**
 * Time Complexity : O(n)
 * Space Complexity: O(n) 
 */
const factorial = (uptoNum) => {
    console.log('uptoNum',uptoNum);
    if(uptoNum === 1) return 1;
    return uptoNum * factorial(uptoNum -1);
}

console.log(factorial(2));
console.log('~~~~~~~~~~~~~~~~~~~~~')
console.log(factorial(3));
console.log('~~~~~~~~~~~~~~~~~~~~~')
console.log(factorial(4));
console.log('~~~~~~~~~~~~~~~~~~~~~')
console.log(factorial(5));