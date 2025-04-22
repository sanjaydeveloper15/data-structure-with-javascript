console.info(`----- Random Questions ------`)

// [2, 7, 11, 15], 9 = 2+7
// [2, 8, 11, 14], 20 = Not found, should be false
// [5, 7, 1, 2, 8, 4, 3], 10 = 2+8
const isTargetFound = (inputArr: number[], target: number):number[] => {
    const resultArr:number[] = []
    for(let i=0; i<inputArr.length; i++) {

    }
    console.info(`Target Found Result:`)
    return [1];
}

// console.log(isTargetFound([2, 7, 11, 15], 9));

const bubbleSort = (inputArr: number[]): number[] => {
    for(let i:number=0; i<inputArr.length; i++) {
        for(let j:number=i+1; j<inputArr.length; j++) {
            if(inputArr[i] > inputArr[j]) {
                const temp:number = inputArr[i]
                inputArr[i] = inputArr[j]
                inputArr[j] = temp
            }
        }
    }
    console.info(`Bubble Sort Result:`)
    return inputArr
}

// console.log(bubbleSort([34, 1, -3, 25, 10092, 4]))

const fibonacci = (tillNum: number): number[] => {
    const resultArr: number[] = [0,1]
    for(let i=0; i<tillNum-2; i++) {
        const currentLength = resultArr.length
        resultArr.push(resultArr[currentLength-1] + resultArr[currentLength-2]);
    }
    console.info(`Fibonacci Result:`)
    return resultArr
}

// console.log(fibonacci(10));

const isPlaindrome = (input: string | number): boolean => {
    let reverseStr = '';
    input = typeof input === 'number' ? input.toString() : input
    for(let i = input.length-1; i >= 0; i--) {
        reverseStr += input[i]
    }
    console.info(`Plaindrome Result:`)
    return input === reverseStr
}

// console.log(isPlaindrome(151))

const binarySearch = (sortedArr: number[], targetVal: number): boolean => {
    let result = false;
    let leftIndex = 0, rightIndex = sortedArr.length - 1;
    while(rightIndex > leftIndex) {
        let midIndex = Math.round((leftIndex + rightIndex)/2)
        console.log(leftIndex, midIndex, rightIndex)
        if(targetVal === sortedArr[leftIndex] || targetVal === sortedArr[rightIndex] || targetVal === sortedArr[midIndex]) {
            result = true;
            break;
        }
        if(leftIndex === midIndex || rightIndex === midIndex) {
            break;
        }
        if(targetVal < sortedArr[midIndex]) {
            rightIndex = midIndex
        } else {
            leftIndex = midIndex
        }
    }
    return result;
}

// console.log(binarySearch([1,3,4,6,10,11,15,21,34,46,63], 2))

const duplicateList = (inputArr: number[]): Set<number> => {
    const duplicateSet: Set<number> = new Set()
    const seenSet: Set<number> = new Set()
    inputArr.map((num) => {
        if(seenSet.has(num)) {
            duplicateSet.add(num)
        } else {
            seenSet.add(num)
        }
    })
    console.info('Duplicate Set Result:')
    return duplicateSet
}

// console.log(duplicateList([1,2,1,6,7,34,6]))

const targetSumPairs = (inputArr: number[], targetVal: number): Set<string> => {
    const totalEle = inputArr.length;
    const resultSet: Set<string> = new Set();
    let totalIterations = 0;
    for(let i=0; i<totalEle; i++) {
        totalIterations++
        for(let j=i+1; j<totalEle; j++) {
            totalIterations++
            const pairValLeft = inputArr[i];
            const pairValRight = inputArr[j];
            if(
                pairValLeft + pairValRight === targetVal && 
                !resultSet.has(`${pairValLeft},${pairValRight}`) &&
                !resultSet.has(`${pairValRight},${pairValLeft}`)
            ) {
                resultSet.add(`${pairValLeft},${pairValRight}`);
            }
        }
    }
    console.info(`Total Array Element: ${totalEle}, Total Loop Iterations: ${totalIterations}, Ele Square: ${totalEle*totalEle}`);
    return resultSet;
}

// console.log(targetSumPairs([1,3,4,6,10,11,2,21,34,3,63,1,3,4,6,10,11,2,21,34,3,63], 6))

const targetSumPairsOptimized = (inputArr: number[], targetVal: number): Set<string> => {
    const seenSet: Set<number> = new Set();
    const resultSet: Set<string> = new Set();
    // HastSet Approach
    for (const num of inputArr) {
        const complement = targetVal - num;
        if (seenSet.has(complement)) {
            resultSet.add(`${complement},${num}`);
        }
        seenSet.add(num);
    }
    console.info(`targetSumPairsOptimized Result: `);
    return resultSet;
};

// console.log(targetSumPairs([1,3,4,6,10,11,2,21,34,3,63,1,3,4,6,10,11,2,21,34,3,63], 6))

console.info(`----- Frequency Counter ------`)

const validAnagram = (str1: string, str2: string) : boolean => {
    let result = true;
    const strOneFrequency: Record<string, number> = {}
    const strTwoFrequency: Record<string, number> = {}

    for(const char of str1) {
        if(strOneFrequency[char]) {
            strOneFrequency[char] = strOneFrequency[char] + 1;
        } else {
            strOneFrequency[char] = 1;
        }
    }

    for(const char of str2) {
        if(strTwoFrequency[char]) {
            strTwoFrequency[char] = strTwoFrequency[char] + 1;
        } else {
            strTwoFrequency[char] = 1;
        }
    }
    // console.log(strOneFrequency, strTwoFrequency)

    for(const k of Object.keys(strOneFrequency)) {
        if(strTwoFrequency[k] !== strOneFrequency[k]) {
            result = false;
            break;
        }
    }

    console.info(`Valid Anagram Result: ${str1}, ${str2}`)
    return result;
}

// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'zza')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('qwerty', 'qeywrs')) // false

const highestBirthdayCandleCounts = (inputArr: number[]): number => {
    if(!inputArr || inputArr.length === 0) return 0
    const candleFrequencies: Record<string, number> = {}
    let maxVal = 0;
    for(const candle of inputArr) {
        candleFrequencies[candle] = candleFrequencies[candle] ? candleFrequencies[candle] + 1 : 1
        maxVal = (candleFrequencies[candle] > maxVal) ? candleFrequencies[candle] : maxVal
    }
    console.log('highestBirthdayCandleCounts:',candleFrequencies, maxVal)
    return maxVal
}

// console.log(highestBirthdayCandleCounts([4,1,1,3,1,4]));
// console.log(highestBirthdayCandleCounts([4,4,1,3]));

console.info(`----- Multiple Pointers ------`)

const isSubsequence = (str1: string, str2: string): boolean => {
    if(str1.length === 0 || str2.length === 0) return false;
    let i: number = 0, j: number = 0;
    while(j < str2.length) {
        if(str1[i] === str2[j]) i++;
        if(i === str1.length) return true;
        j++;
    }
    return false
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)