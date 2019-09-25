const palindrome = (string) => {
    if (string.length <= 1) return true

    let firstChar = string[0].toLowerCase()
    let lastChar = string[string.length - 1]

    if (firstChar === lastChar) return palindrome(string.slice(1, -1))
    else return false
}