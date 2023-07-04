export function coinChange(coins: number[], amount: number): number {
    const cache = {}
    const answer = dp(cache, coins, amount)
    return answer !== +Infinity ? answer : -1
}

function dp(cache: {[key: number]: number}, coins: number[], amount: number): number {
    if (amount === 0) return 0
    if (cache[amount]) return cache[amount]

    let ans = +Infinity
    for (let index = 0; index < coins.length; index++) {
        const coin = coins[index];
        
        if (amount >= coin) {
            ans = Math.min(ans, dp(cache, coins, amount - coin) + 1)
            cache[amount] = ans
        }
    }

    return ans
}