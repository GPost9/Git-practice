const myMap = (array, callback) => {
    let mappedArray = []

    for (let i = 0; i < array.length; i++) {
        let value = array[i]
        let newValue = callback(value)
        mappedArray.push(newValue)
    }
    return mappedArray
}