const removeZeros = (digits) => {
    if (digits === 0) return NaN

    let digitString = String(digits)
    let output = ''

    for (let i = 0; i < digitString.length; i++) {
        let char = digitString[i]

        if (char !== '0') {
            output += char
        }
    }
    return Number(output)
}