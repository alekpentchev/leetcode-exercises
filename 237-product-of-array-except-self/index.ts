export function productExceptSelf(nums: number[]): number[] {
    const result = Array(nums.length).fill(1)
    const numsLength = nums.length
    const curr = Array(2).fill(1)
    for (let i = 1; i < numsLength; i++) {
        curr[0] *= nums[i - 1]
        curr[1] *= nums[numsLength - i]
        result[i] *= curr[0]
        result[numsLength - i - 1] *= curr[1]
    }
    return result
}