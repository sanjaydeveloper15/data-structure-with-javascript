/**
 * Q. Reverse the order of words in a given sentence (a string of words).
 * Hello World > World Hello
 * Should be TC: O(n) and SC: O(1)
 */

let sentance = "Hello Darling, How are you today?"

// Time Complexity - O(n)
// Space Complexity - O(n) because pushing in result array each time.
function reverseWord(sentance) {
    let wordArr = sentance.split(' ');
    const reverseWordArr = [];
    for (let i = wordArr.length - 1; i >= 0; i--) {
        reverseWordArr.push(wordArr[i])
    }
    return reverseWordArr
}

console.log(reverseWord("Hello World"));
console.log(reverseWord(sentance));


// Time Complexity - O(n)
// Space Complexity - O(1) because not using extra variable to push
function reverseWordOpt(sentence) {
    let words = sentence.split(' ');
    let left = 0, right = words.length - 1;

    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]];
        left++;
        right--;
    }

    return words;
}

console.log(reverseWordOpt("Hello World"));
console.log(reverseWordOpt(sentance));