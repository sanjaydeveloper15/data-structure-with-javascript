/** 
 * Write a program to get total vowel count from String ?
 * Vowels: a, e , i, o, u
 * Consonants: excluded Vowels (B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z)
 * Smile: "S," "M," "L" are consonants.
 * Cat: "C" and "T" are consonants.
 * Dog: "D" and "G" are consonants.
 * */

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
