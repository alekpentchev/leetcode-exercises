export function combinationSum4(nums: number[], target: number): number {
    const memo = new Map<number,number>()
    const dp = (nums: number[], target: number, sum: number): number => {
        if (sum === target) {
            return 1
        }

        if (sum > target) {
            return 0
        }

        if (memo.has(sum)) {
            return memo.get(sum) as number
        }

        let res = 0
        for (let i = 0; i < nums.length; i++) {
            res += dp(nums, target, sum + nums[i])
        }
        memo.set(sum, res)
        return res
    }

    return dp(nums, target, 0)
};