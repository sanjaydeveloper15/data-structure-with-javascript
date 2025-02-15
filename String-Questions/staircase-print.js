function staircase(n) {
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = 0; j < (n - i) - 1; j++) {
            str = `${str} `
        }
        for (let k = 0; k <= i; k++) {
            str = `${str}#`
        }
        console.log(str)
    }
    return true
}

console.log(staircase(5))