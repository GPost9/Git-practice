const myLastIndexOf = (array, searchValue, fromIndex) => {
    if (fromIndex === undefined) {
        fromIndex = array.length - 1
    }

    for (let i = fromIndex; i >= 0; i--) {
        let element = array[i]

        if (searchValue === element) {
            return i
        }
    }
    return -1
}