//Write a program to Multiply two numbers without using * sign.
const multiplyTwoNums = (x,y) => {
    //Theory: Multiply is nothing but equal to SUM
    x = parseFloat(x);
    y = parseFloat(y);
    let result = 0;
    for(let i=0; i<y; i++)
    {
        result += x;
    }
    return result;
}

let x = process.argv[2];
let y = process.argv[3];
if(x == '' || x == null)
{
    console.error('x value is required');
    return false;
}
if(y == '' || y == null)
{
    console.error('y value is required');
    return false;
}
console.log('Result:',multiplyTwoNums(x,y));

