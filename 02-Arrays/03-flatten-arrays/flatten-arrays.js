const flatten = (array) => {
    let output = []

    for (let i = 0; i < array.length; i++) {
        let element = array[i]

        if (Array.isArray(element)) {
            for (let j = 0; j < element.length; j++) {
                let nestedElement = element[j]

                output.push(nestedElement)
            }
        } else {
            output.push(element)
        }
    }
    return output
}