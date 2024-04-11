// Given 2 strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const validAnagram = (str1, str2) => {
    let result = true
    //validations
    // if(!str1 || !str2) {
    //     result = 'both input parameters are required'
    // }
    if (typeof str1 != 'string' || typeof str2 != 'string') {
        result = 'both input parameters should be string only'
    }
    if (str1.length != str2.length) {
        result = 'both input parameters char count should be same'
    }

    // get frequencies
    let strOneFrequency = {}, strTwoFrequency = {}
    for (let char of str1) {
        strOneFrequency[char] = (strOneFrequency[char]) ? strOneFrequency[char] + 1 : 1;
    }
    for (let char of str2) {
        strTwoFrequency[char] = (strTwoFrequency[char]) ? strTwoFrequency[char] + 1 : 1;
    }

    // compare frequencies and get final result
    Object.keys(strOneFrequency).forEach((k) => {
        // key should be exists in both objects
        if (!strOneFrequency[k] || !strTwoFrequency[k]) {
            result = false
        }
        // key frequency should be match
        if (strOneFrequency[k] != strTwoFrequency[k]) {
            result = false
        }
    })

    console.log(result)
    return result
}


validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('qwerty', 'qeywrs') // false


//  Time Complexity O(n)