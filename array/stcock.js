// Best Time to Buy and Sell Stock

const prices = [7, 4, 5, 6, 7, 1, 2, 4, 2, 3, 4, 5, 6, 7, 2, 3]

const maxProfit = function (prices) {
    let l = 0
    let r = 1
    let profit = 0
    let min = Number.POSITIVE_INFINITY
    let max = Number.NEGATIVE_INFINITY

    while (r < prices.length) {
        if (min > prices[l]) {
            min = prices[l]
            max = Number.NEGATIVE_INFINITY
        }

        if (max < prices[r]) {
            max = prices[r]
        }

        if (profit < max - min) {
            profit = max - min
        }

        console.log(prices[l], prices[r], 'profit: ', profit)

        if (prices[l] <= prices[r]) {
            r++
        }

        if (prices[r - 1] > prices[r]) {
            l = r
            r++
        }
    }

    return profit
}

console.log(maxProfit(prices))
