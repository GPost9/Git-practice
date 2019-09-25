const sumOfDigits = (digits) => {
    if (!digits) return 0
    
    let sum = 0
    let stringNum = String(digits)

    for (let i = 0; i < stringNum.length; i++) {
        let digit = stringNum[i]

        sum += Number(digit) 
    }
    return sum
}