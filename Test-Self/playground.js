// matrix array
let farmerArea = [
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
]


function getMaxArea(matrixArr) {
    let fromToIndex = new Map()
    /**
     * '1,2': 2
     * '0,1': 2
     * '1,3': 3
     * '1,4': 4
     * '1,4': 4
     */
    function getMax(n, i) {
        let totalCounts = 0
        if (i === matrixArr.length) return;
        let singleMatrix = matrixArr[i]

        for (let j = 0; j < singleMatrix.length; j++) {

        }
        i++
        return getMax(n, i);
    }

    getMax(matrixArr.length, 0)

    return true
}

function kangaroo(x1, v1, x2, v2) {
    let result = "NO";

    if (v1 > v2) {
        let maxJump = (x1 > x2) ? x1 : x2;
        let firstKangarooJumps = new Set(), secondKangarooJumps = new Set();

        for (let i = 0; i <= maxJump; i++) {
            firstKangarooJumps.add(x1 + (v1 * i))
            secondKangarooJumps.add(x2 + (v2 * i))
        }

        // console.log(firstKangarooJumps)
        // console.log(secondKangarooJumps)

        const firstKangarooJumpsArr = Array.from(firstKangarooJumps)

        firstKangarooJumpsArr.map((jumpVal) => {
            if (secondKangarooJumps.has(jumpVal)) {
                result = 'YES'
            }
        })
    }

    return result
}

console.log(kangaroo(14, 4, 98, 2))

// console.log(kangaroo(0, 2, 5, 3))
// 0, 3, 6, 9, 12
// 0, 2, 4, 6, 8
// console.log(kangaroo(0, 3, 4, 2))

function kangarooAcc(x1, v1, x2, v2) {
    let result = "NO";

    // Check if kangaroos are moving towards each other
    if (v1 > v2) {
        // Calculate the meeting point
        let meetingPoint = (x2 - x1) / (v1 - v2);

        // Check if meeting point is a whole number
        if (meetingPoint % 1 === 0 && meetingPoint >= 0) {
            result = "YES";
        }
    }

    return result;
}

console.log(kangarooAcc(14, 4, 98, 2))