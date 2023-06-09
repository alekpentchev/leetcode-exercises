export function maxProfit(prices: number[]): number {
    let lowestPrice = prices[0]
    let highestProfit = 0

    for (let index = 0; index < prices.length; index++) {
        const currentPrice = prices[index];
        if (currentPrice < lowestPrice) {
            lowestPrice = currentPrice
        } else if (currentPrice - lowestPrice > highestProfit) {
             highestProfit = currentPrice - lowestPrice
        }
    }

    return highestProfit
}