/**
 * Q. You are given a dictionary of words and a large input string. You have to find out whether the input string can 
 * be completely segmented into the words of a given dictionary. The following two examples elaborate on the problem further.
 * ['apple','pear','pie','baby','sweet']
 * babygirl = false
 * applepie = true
 * sweetapple = true
 * DP - Dynamic Programming Table
 */

function isAvailableInDict(strArr, segmentedStr) {
    const wordSet = new Set(strArr);
    const n = segmentedStr.length;
    console.log('N',n)
    const dp = [true]; // dp[0] = true, represents an empty string is always segmentable.
    const subStrSet = new Set();
    for (let i = 1; i <= n; i++) { // on which CHAR we are so we PICK from 0 Each Time
        dp[i] = false; // Initialize explicitly without fill
        for (let j = 0; j < i; j++) {
            console.log(j, i)
            const substring = segmentedStr.slice(j, i);
            subStrSet.add(substring)
            if (dp[j] && wordSet.has(substring)) {
                console.log('found:',substring)
                dp[i] = true;
                break;
            }
        }
    }
    console.log(subStrSet)
    console.log(dp)
    return dp[n];
}

// console.log(isAvailableInDict(['apple', 'pear', 'pie', 'baby', 'sweet','s', 'ca', 't'], 'cats'))
// console.log(isAvailableInDict(['apple', 'pear', 'pie', 'baby', 'sweet','a', 'ca', 't'], 'cats'))
console.log(isAvailableInDict(['c','a','t','s'], 'cats'))