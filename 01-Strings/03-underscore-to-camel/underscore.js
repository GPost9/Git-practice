const underToCamel = (string) => {
    return string.replace(/_[a-z 0-9]/gi, ($1) => {
        return $1.toUpperCase().replace('_', '')
    })
}