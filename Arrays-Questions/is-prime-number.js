// Write a program for check number is prime or not ?
const isPrime = (inputNum) => {
    let result = true;
    for(let i=2; i<inputNum; i++)
    {
        if(inputNum%i === 0)
            result = false;
            break;
    }
    return result;
}
console.log(isPrime(17));
console.log(isPrime(18));