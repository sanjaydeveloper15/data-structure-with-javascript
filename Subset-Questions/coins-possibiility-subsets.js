/**
 * [1,2,5], 7
 * 1 1 1 1 1 1 1
 * 1 1 1 1 1 2
 * 1 1 1 2 2
 * 1 2 2 2
 * 1 1 5
 * 2 5
 * Q. How many ways can you make change with coins and a total amount
 * Suppose we have coin denominations of [1, 2, 5] and the total amount is 7. We can make changes in the above 6 ways
 * @param {Array} coinsArr 
 * @param {Number} totalAmount 
 * @returns {Set}
 */
function getAllPossibilityCoinsChange(coinsArr, totalAmount) {
    const resultSet = new Set()
    let totalIterations = 0;

    // function backtracking(start, remainingCoinsArr) {
    //     totalIterations++
    //     resultSet.add([...remainingCoinsArr])

    //     for (let i = start; i < coinsArr.length; i++) {
    //         remainingCoinsArr.push(coinsArr[i])
    //         backtracking(i + 1, remainingCoinsArr)
    //         remainingCoinsArr.pop()
    //     }
    // }

    
    function backtracking(start, current, currentSum) {
        totalIterations++
        // If the current sum matches the target, add the combination to the result
        if (currentSum === totalAmount) {
            resultSet.add([...current]);
            return;
        }
        
        // If the current sum exceeds the target, stop exploring this path
        if (currentSum > totalAmount) {
            return;
        }

        // Explore further by considering each number in the array
        for (let i = start; i < coinsArr.length; i++) {
            current.push(coinsArr[i]);                      
            backtracking(i, current, currentSum + coinsArr[i]); // always start with current index
            current.pop();                              
        }
    }

    backtracking(0, [], 0)

    console.log('totalIterations', totalIterations)
    return resultSet;
}

console.log(getAllPossibilityCoinsChange([1, 2, 5], 7));