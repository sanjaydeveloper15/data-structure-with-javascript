// |||||******|**|****|******|*|*||*|******|*||**|***|***|**||*|**|***|*|*|**||***|******|*|||*****||||
// *|*|*| = 1,6
// *|*| = 1,3
// |**|*|* = 1,1 OR 5,6


/*
 * Complete the 'numberOfItems' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndices
 *  3. INTEGER_ARRAY endIndices
 */

function numberOfItems(s, startIndices, endIndices) {
    console.log(s, startIndices, endIndices)
    let substringArrSet = new Set()
    for (let i = 0; i < startIndices.length; i++) {
        let leftIndex = startIndices[i] - 1; // as generally comes 1
        let rightIndex = endIndices[i];
        // console.log('indexes values', leftIndex, rightIndex)
        // console.log('s length', s.length)
        substringArrSet.add(s.slice(leftIndex, rightIndex))
    }
    let resultArr = []
    for (const substring of substringArrSet) {
        let compartment, totalCompartment = 0;
        // console.log('substring',substring)
        for (const char of substring) {
            if (substring[0] === '|') { //if a 0 index pipe so already open
                compartment = 'open'
            }
            if (char === '|') {
                compartment = (compartment === 'open') ? 'close' : 'open';
            }
            if (compartment === 'close') {
                totalCompartment++
                compartment = 'open'
            }
        }
        resultArr.push(totalCompartment)
    }
    return resultArr
}

console.log(numberOfItems('*|*|*|**|*|', [1, 6], [6, 10]))