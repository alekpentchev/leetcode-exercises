export function lengthOfLIS(nums: number[]): number {
    // 1. create a dp array of length equal to nums and filled with 1s. it will store the LIS for each number
    const dp = new Array<number>(nums.length).fill(1);

    // 2. start the iteration from the end. so we'll start with the last index which LIS=1
    for (let i = nums.length - 1; i >= 0; i--) {
        // 3. start an iteration from the i index and go forward until the end of the nums array
        for (let j = i + 1 ; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }

    return Math.max(...dp);
};