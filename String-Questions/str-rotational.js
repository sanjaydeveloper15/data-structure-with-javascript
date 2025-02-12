const s1 = 'mightandmagic', s2 = 'andmagicmight'

function isRotational(str1, str2) {
    if (str1.length != str2.length) {
        return false
    }
    let isMatching = true
    let indexOfVal = s1.indexOf(s2[0])
    for (let i = 0; i < s2.length; i++) {
        let completeAt = s1.length - indexOfVal
        if (completeAt === i) {
            checkAgain(completeAt, indexOfVal)
            break
        }
        console.log(s1.length, indexOfVal, s1[indexOfVal + i], s2[i], i)
        if (s1[indexOfVal + i] != s2[i]) {
            console.log('break at', i)
            isMatching = false
            break
        }
    }

    function checkAgain(s2Index, tillIndex) {
        console.log('check again', s2Index, tillIndex)
        for (let i = 0; i < tillIndex; i++) {
            console.log(s1[i], s2[s2Index + i], s2Index + i)
            if (s1[i] != s2[s2Index + i]) {
                console.log('breaked')
                isMatching = false
                break
            }
        }
    }
    return isMatching
}

console.log(isRotational(s1, s2))

console.log('......................')

function isRotation(s1, s2) {
    // Check if both strings have the same length and are not empty
    if (s1.length !== s2.length || s1.length === 0) {
        return false;
    }

    // Concatenate s2 with itself and check if s1 is a substring of this new string
    return (s2 + s2).includes(s1);
}

console.log(isRotation(s1, s2))