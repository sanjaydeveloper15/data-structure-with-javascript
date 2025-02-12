// Write a program to check if a string or word or number is palindrome?

const isPlaindrome = (inputChar) => {
    let str = inputChar.toString();
    let resultWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
        resultWord += str[i];
    }
    return resultWord == str ? true : false;
};
console.log(isPlaindrome("racecar"));
console.log(isPlaindrome("abc"));
console.log(isPlaindrome(121));


var S = "I am :IronnorI Ma, i"

function isPlaindromeCheck(str) {
    str = str.toLowerCase()
    str = str.replace(":", "")
    str = str.replace(',', '')
    let reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = `${reverseStr}${str[i]}`
    }
    return str === reverseStr 
}

console.log(isPlaindromeCheck(S))
