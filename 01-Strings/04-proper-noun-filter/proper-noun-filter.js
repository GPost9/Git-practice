const properNounFilter = (string) => {
    if (string === string[0].toUpperCase() + string.slice(1).toLowerCase()) {
        return true
    }
    return false
}