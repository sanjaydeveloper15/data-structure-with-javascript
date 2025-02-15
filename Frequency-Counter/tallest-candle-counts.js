/** 
 * Complete the 'birthdayCakeCandles' function below.
 * 
 * Q. You are in charge of the cake for a child's birthday. 
 * It will have one candle for each year of their total age. 
 * They will only be able to blow out the tallest of the candles. 
 * Your task is to count how many candles are the tallest.
 * 
 * Example: [4, 4, 1, 3]
 * The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.
 * 
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    let maxVal = 0
    let frequencyObj = {}
    for(let i=0; i<candles.length; i++) {
        if(frequencyObj[candles[i]]) {
            frequencyObj[candles[i]] = frequencyObj[candles[i]] + 1
        } else {
            frequencyObj[candles[i]] = 1
        }
        if(maxVal < candles[i]) {
            maxVal = candles[i]
        }
    }
    console.log(maxVal, frequencyObj)
    return frequencyObj[maxVal]
}

console.log(birthdayCakeCandles([3, 2, 1, 1, 3, 3, 7]))