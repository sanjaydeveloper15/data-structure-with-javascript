console.log(`------- Q1: Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array? -------`);

const capitalizeFirst = (inputStrArr, resultStrArr = []) => {
    console.log(inputStrArr)
    if (inputStrArr.length === 0) return resultStrArr;
    const firstLetterUpper = inputStrArr[0].charAt(0).toUpperCase();
    console.log(firstLetterUpper);
    const capitalizeWord = firstLetterUpper + inputStrArr[0].slice(1);
    console.log(capitalizeWord)
    resultStrArr.push(capitalizeWord)
    return capitalizeFirst(inputStrArr.slice(1), resultStrArr);
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']


console.log(`------- Q1: End -------`);

console.log(`------- Q2: Write a recursive function called nestedEvenSum. Return the sum of all EVEN Numbers in an object which may contain nested objects? -------`);
const nestedEvenSum = (nestedObj) => {
    let totalEvenNumSum = 0;
    const objKeys = Object.keys(nestedObj)
    objKeys.map((k) => {
        if (typeof nestedObj[k] === 'object') {
            totalEvenNumSum += nestedEvenSum(nestedObj[k]);
        } else {
            if (nestedObj[k] % 2 === 0) {
                totalEvenNumSum += nestedObj[k];
            }
        }
    })
    return totalEvenNumSum;
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

console.log(`------- Q2: End -------`);

console.log(`------- Q3: Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized? -------`);

const capitalizeWords = (inputStrArr, resultStrArr = []) => {
    if (inputStrArr.length === 0) return resultStrArr;
    const upperCaseWord = inputStrArr[0].toUpperCase();
    resultStrArr.push(upperCaseWord);
    return capitalizeWords(inputStrArr.slice(1), resultStrArr);
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(`------- Q3: End -------`);

console.log(`-------- Q4: Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged. -------`);

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


const stringifyNumbers = (inputObj) => {
    const objKeys = Object.keys(inputObj);
    objKeys.map((k) => {
        if (typeof inputObj[k] === 'object' && !Array.isArray(inputObj[k])) {
            inputObj[k] = stringifyNumbers(inputObj[k]);
        } else {
            if (typeof inputObj[k] === 'number') {
                inputObj[k] = inputObj[k].toString();
            }
        }
    })
    return inputObj;
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
console.log(`------- Q4: End -------`);

console.log(`------- Q5: Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string? -------`);
const obj_1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const collectStrings = (inputObj, strArr = []) => {
    const objKeys = Object.keys(inputObj);
    objKeys.map((k) => {
        if (typeof inputObj[k] === 'object' && !Array.isArray(inputObj[k])) {
            inputObj[k] = collectStrings(inputObj[k], strArr);
        } else {
            console.log(`k:${k}`);
            if (typeof inputObj[k] === 'string') {
                strArr.push(inputObj[k]);
            }
        }
    });
    return strArr;
}

console.log(collectStrings(obj_1)); // ["foo", "bar", "baz"])
console.log(`------- Q5: End -------`);