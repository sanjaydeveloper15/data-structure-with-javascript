const n = 10;

/**
 * 
 * @param {*} n Integer
 * Time complexity = O(n)
 * Space complexity = O(1)
 */
const addUpTo = (n) => {
    if (typeof n != 'number') {
        console.warn('Only numbers allowed')
    }
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    console.log(`Result: ${sum}`);
}
console.info(`------------ Program with O(n) ------------`)
addUpTo(n)

const addUpToOpt = (n) => {
    if (typeof n != 'number') {
        console.warn('Only numbers allowed')
    }
    const sum = n*(n+1)/2
    console.log(`Result: ${sum}`);
}
console.info(`------------ Program with O(1) ------------`)
addUpToOpt(n)