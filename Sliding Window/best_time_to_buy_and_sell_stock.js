const prices = [7, 1, 5, 3, 6, 4]

const max_profit = (prices) => {
    let l = 0
    let r = 1
    let maxP = 0

    while (r < prices.length) {
        if (prices[l] > prices[r]) {
            l = r
        } else {
            profit = prices[r] - prices[l]
            maxP = profit > maxP ? profit : maxP
        }
        r++
    }

    return maxP
}

console.log(max_profit(prices));