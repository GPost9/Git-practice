const evenOdd = (array) => {
    let output = []
    let evens = array.filter((val) => val % 2 === 0)
    let odds = array.filter((val) => val % 2 !== 0)
    output.push(evens, odds)

    return output
}