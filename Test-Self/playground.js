/**
 * Q. 9. How many ways can you make change with coins and a total amount?
 * Suppose we have coin denominations of [1, 2, 5] and the total amount is 7. We can make changes in the following 6 ways:
 * 1, 1, 1, 1, 1, 1, 1
 * 1, 1, 1, 1, 1, 2
 * 1, 1, 1, 2, 2
 * 1, 2, 2, 2
 * 1, 1, 5
 * 2, 5
 * Total Methods 6 Possible
 */

function changePossibility(coinsArr, totalAmount) {
    const resultMap = new Map()
    for (let i = 0; i < coinsArr.length; i++) {
        let arr = []
        for (let j = totalAmount; j > i; j--) {
            let isPrevVal = coinsArr[i - 1]
            if (isPrevVal) {
                if ((getArrSum(arr) + coinsArr[i]) === totalAmount) {
                    arr.push(coinsArr[i])
                } else {
                    arr.push(coinsArr[i - 1])
                }
            } else {
                arr.push(coinsArr[i])
            }
            // console.log(arr)
            if (getArrSum(arr) === totalAmount) {
                resultMap.set(`set ${i + 1}`, [...arr]) // when SAME variable using so SPREAD is so IMPORTANT to COPY otherwise it takes Reference
                // console.log('pushed')
            }
        }
    }
    return resultMap
}

function getArrSum(inputArr) {
    return inputArr.reduce((p, c) => {
        return p + c;
    }, 0)
}

console.log(changePossibility([1, 2, 3], 5));
console.log(changePossibility([3, 2, 1], 5));

console.log('...............................')

function changePossibilityOpt(coinsArr, totalAmount) {
    const result = [];

    function backtrack(remaining, start, combination) {
        if (remaining === 0) {
            result.push([...combination]); // Store a copy of the valid combination
            return;
        }

        for (let i = start; i < coinsArr.length; i++) {
            if (coinsArr[i] <= remaining) {
                combination.push(coinsArr[i]); // Choose the coin
                backtrack(remaining - coinsArr[i], i, combination); // Allow using the same coin
                combination.pop(); // Undo the choice (backtrack)
            }
        }
    }

    backtrack(totalAmount, 0, []);
    return result;
}

console.log(changePossibilityOpt([1, 2, 3], 5));
