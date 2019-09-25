const splitter = (string) => {
    let output = []

    if (string.length % 2 !== 0) string += '_'

    for (let i = 0; i < string.length; i += 2) {
        output.push(string[i] + string[i + 1])
    }
    return output
}