export function maxSubArray(nums: number[]): number {
    let currentSum = 0
    let largestSum = nums[0]

    for (let index = 0; index < nums.length; index++) {
        const number = nums[index];
        currentSum = Math.max(number, currentSum + number)
        largestSum = Math.max(currentSum, largestSum)
    }

    return largestSum
}