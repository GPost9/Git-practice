const myJoin = (array, delimiter) => {
    let outputString = ''

    if (delimiter === undefined) {
        delimiter = ','
    }

    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            outputString += array[i]
        } else if (array[i] !== undefined && array[i] !== null) {
            outputString += delimiter + array[i]
        }
    }
    return outputString
}