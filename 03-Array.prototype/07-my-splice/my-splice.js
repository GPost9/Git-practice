const mySplice = (array, start, deleteCount) => {
    if (!deleteCount) {
        deleteCount = array.length - start
    }

    let keep = []
    let remove = []

    for (let i = 0; i < start; i++) {
        let element = array[i]
        keep.push(element)
    }

    for (let i = start; i < start + deleteCount; i++) {
        let element = array[i]
        remove.push(element)
    }

    for (let i = start + deleteCount; i < array.length; i++) {
        let element = array[i]
        keep.push(element)
    }

    while (array.length) {
        array.pop()
    }

    for (let i = 0; i < keep.length; i++) {
        let element = keep[i]
        array.push(element)
    }

    return remove
}