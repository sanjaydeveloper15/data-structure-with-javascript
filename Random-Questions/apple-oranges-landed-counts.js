/**
 * Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
 * Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

The red region denotes the house, where  is the start point, and  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. *A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. *
Apple and orange(2).png

Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range )?

For example, Sam's house is between  and . The apple tree is located at  and the orange at . There are  apples and  oranges. Apples are thrown  units distance from , and  units distance. Adding each apple distance to the position of the tree, they land at . Oranges land at . One apple and two oranges land in the inclusive range  so we print

HackerRank: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
*/

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // console.log(s, t, a, b)
    // console.log(apples, oranges)

    // a5 -  s7   t11  - b15
    // [-2, 2, 1]
    // [5, -6]

    let applesLandedAt = [], orangesLandedAt = [];

    for (let i = 0; i < apples.length; i++) {
        applesLandedAt.push(a + apples[i])
    }

    for (let i = 0; i < oranges.length; i++) {
        orangesLandedAt.push(b + oranges[i])
    }

    // console.log(applesLandedAt, orangesLandedAt)

    let betweenRangeSumApple = 0, betweenRangeSumOrange = 0;

    for (let i = 0; i < applesLandedAt.length; i++) {
        if (applesLandedAt[i] >= s && applesLandedAt[i] <= t) {
            betweenRangeSumApple++
        }
    }

    for (let i = 0; i < orangesLandedAt.length; i++) {
        if (orangesLandedAt[i] >= s && orangesLandedAt[i] <= t) {
            betweenRangeSumOrange++
        }
    }
    console.log(betweenRangeSumApple)
    console.log(betweenRangeSumOrange)

    return [betweenRangeSumApple, betweenRangeSumOrange]
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])) // 1, 1
console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])) // 1, 2