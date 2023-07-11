export function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = new Array(s.length + 1)
    dp[0] = true

    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.slice(j, i))) {
                dp[i] = true
                break
            }
        }
        
    }

    return dp[dp.length-1] ? true : false
}