const vowelsCount = (string) => {
    let vowels = 'aeiouAEIOU'
    let count = 0

    for (let i = 0; i < string.length; i++) {
        let char = string[i]

        if (vowels.indexOf(char) !== -1) {
            count++
        }
    }
    return count
}