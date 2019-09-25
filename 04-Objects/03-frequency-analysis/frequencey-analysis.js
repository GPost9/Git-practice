const frequencyAnalysis = (string) => {
    let frequency = {}

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i]

        if (!frequency[currentChar]) {
            frequency[currentChar] = 1
        } else {
            frequency[currentChar]++
        }
    }
    return frequency
}
