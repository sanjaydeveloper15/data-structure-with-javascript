console.log(`------- Question 1: Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents? --------`);
console.log('----------------')
const power = (base, exp) => {
    console.log(base, exp)
    if (exp === 0) return 1;
    if (exp === 1) return base * 1;
    return base * power(base, exp - 1);
}

console.log(power(2, 0)) // 1
console.log('----------------')
console.log(power(2, 2)) // 4
console.log('----------------')
console.log(power(2, 4)) // 16
console.log('----------------')

console.log(`------- Question 2: Write a function called productOfArray which takes in an array of numbers and returns the product of them all? --------`);
console.log('----------------')
const productOfArray = (inputArr) => {
    let result = 1;
    for (let i = 0; i < inputArr.length; i++) {
        result *= inputArr[i]
    }
    return result;
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60


console.log(`------- Question 3: Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
    Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
 and where every number thereafter is equal to the sum of the previous two numbers? --------`);
console.log('----------------')
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(4)) // 3
console.log('----------------')
console.log(fib(10)) // 55
console.log('----------------')
console.log(fib(28)) // 317811
console.log('----------------')
console.log(fib(35)) // 9227465
console.log('----------------')