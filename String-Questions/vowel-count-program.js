// Write a program to get total vowel count from String ?

const getVowelCount = (inputStr) => {
    let totalVowelCount = 0;
    for (let i = 0; i < inputStr.length; i++) {
        let char = inputStr[i];
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
            totalVowelCount++;
    }
    return totalVowelCount;
};
console.log(getVowelCount("hello how are you today programiz website?"));
