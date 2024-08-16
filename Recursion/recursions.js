// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
console.log(`------- Question:1 --------`);
const power = (base, exp) => {
    console.log(base, exp)
    if(exp === 0) return 1;
    if(exp === 1) return base * 1;
    return base * power(base, exp - 1);
}

console.log(power(2,0)) // 1
console.log('----------------')
console.log(power(2,2)) // 4
console.log('----------------')
console.log(power(2,4)) // 16
console.log('----------------')

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
console.log(`------- Question:2 --------`);
const productOfArray = (inputArr) => {
    let result = 1;
    for(let i=0;i<inputArr.length; i++) {
        result *= inputArr[i]
    }
    return result;
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60