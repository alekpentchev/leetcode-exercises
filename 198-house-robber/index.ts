export function rob(nums: number[]): number {
    if (nums.length === 0) return 0

    const memo: number[] = new Array(nums.length).fill(0);

    const dp = (nums: number[], i: number): number => {
        if (i < 0) return 0
        if (memo[i] !== 0) return memo[i]
        const result = Math.max(dp(nums, i - 2) + nums[i], dp(nums, i - 1))
        memo[i] = result
        return result
    }


    const result = dp(nums, nums.length - 1)
    return result
}

export function rob2(nums: number[]): number {
    if (nums.length === 0) return 0
    let prev1 = 0
    let prev2 = 0
    for (let index = 0; index < nums.length; index++) {
        const val = nums[index];
        const tmp = prev1
        prev1 = Math.max(prev2 + val, prev1)
        prev2 = tmp
        
    }
    return prev1
}

