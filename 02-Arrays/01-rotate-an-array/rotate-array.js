const rotate = (array, rotateNum) => {
    let front = array.slice(-rotateNum)
    let end = array.slice(0, -rotateNum)

    return front.concat(end)
}