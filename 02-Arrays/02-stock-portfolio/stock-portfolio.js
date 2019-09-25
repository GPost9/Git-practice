const totalPortfolioValue = (stockTicker, portfolio) => {
    let value = 0

    for (let i = 0; i < portfolio.length; i++) {
        let indexTracker = stockTicker.indexOf(portfolio[i][0])

        if (indexTracker > -1) {
            value += stockTicker[indexTracker + 1] * portfolio[i][1]
        }
    }
    return value
}