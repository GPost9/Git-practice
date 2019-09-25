const getMid = (string) => {
    let middleIndex = string.length / 2

    if (string.length % 2 === 0) {
        return string.slice(middleIndex - 1, middleIndex + 1)
    }
    return string.charAt(middleIndex)
}