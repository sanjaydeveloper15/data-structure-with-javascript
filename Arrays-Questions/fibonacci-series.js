/**
 * The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
 * Formula: F(n)=F(n−1)+F(n−2)
 * Example: 0,1,1,2,3,5,8,13,21,34,55,…
 * Time Complexity O(n)
 */

const getFibbonaciSeries = ((tillNum) => {
    const series = [0, 1]
    for (let i = 2; i < tillNum; i++) {
        series.push(series[series.length-1] + series[series.length-2])
    }
    return series
});

console.log(getFibbonaciSeries(10))
