console.log(`------- Question 1: Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents? --------`);
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
console.log('------- Question 1: End ---------')

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
console.log('------- Question 2: End ---------')


console.log(`------- Question 3: Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers? --------`);
console.log('----------------')
const fib = (n) => {
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
console.log('------- Question 3: End ---------')

console.log('-------- Question 4: Write a recursive function called reverse which accepts a string and returns a new string in reverse? --------');
const reverse = (str) => {
    if (str.length <= 1) return str;
    return reverse(str.substring(1)) + str[0];
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
console.log(reverse('rececar')) // 'racecar'
console.log('------- Question 4: End ---------')

console.log('------- Question 5: Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false? ---------');
const isPalindrome = (str, firstTime = true) => {
    let tempStr = (firstTime) ? str : '';
    if (str.length <= 1) return str;
    str = isPalindrome(str.substring(1), false) + str[0];
    console.log(str, '-', tempStr);
    return (str.length === tempStr.length) ? str === tempStr : str;
}

const isPalindromeRefactored = (str) => {
    if (str.length <= 1) return true;  // Base case
    if (str[0] !== str[str.length - 1]) return false;  // Char comparison
    return isPalindrome(str.substring(1, str.length - 1));  // Recursive call
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('racecar')) // false
console.log('------- isPalindromeRefactored(): Call stack delays in CONSOLE -------')
console.log(isPalindromeRefactored('awesome')) // false
console.log(isPalindromeRefactored('racecar')) // false
console.log('------- Question 5: End ---------')

console.log('------- Question 6: Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false? -------');
// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
const someRecursive = (inputArr, fnCallaback) => {
    console.log(JSON.stringify(inputArr));
    if (inputArr.length === 0) return false;
    if (fnCallaback(inputArr[0])) return true;
    return someRecursive(inputArr.slice(1), fnCallaback);
}
console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log('----------------')
console.log(someRecursive([4, 6, 8, 10, 12, 14, 15, 18], isOdd)) // true
console.log('----------------')
console.log(someRecursive([4, 6, 8, 18, 24, 96, 1198, 10096002], isOdd)) // false
console.log('----------------')
console.log(someRecursive([4, 6, 8], val => val > 10)) // false
console.log('------- Question 6: End ---------')