// Kadane's algorithm - time complexity O(1), space O(n)
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

// divide and concquer approach
// space complexity O(nlogn), slower and more complicated than Kadane's algorithm in this case
export const maxSubArray2 = (nums: number[]) => {
    const leftIndex = 0;
    const rightIndex = nums.length - 1;

    return findMaxSubArraySum(nums, leftIndex, rightIndex);
};

function findMaxSubArraySum(nums: number[], left: number, right: number): number {
    if (left > right) {
        return 0;
    }

    const middle = Math.floor((left + right) / 2);
    let currSum = 0;
    let maxLeftSum = 0;
    let maxRightSum = 0;

    for (let i = middle - 1; i >= left; i--) {
        currSum += nums[i];
        maxLeftSum = Math.max(maxLeftSum, currSum);
    }

    currSum = 0;
    for (let i = middle + 1; i <= right; i++) {
        currSum += nums[i];
        maxRightSum = Math.max(maxRightSum, currSum);
    }

    // maxSum contains the middle element + highest sums from both halves
    let maxSum = nums[middle] + maxLeftSum + maxRightSum;

    // recursion - find max subarray for both halves and so on...
    const leftHalf = findMaxSubArraySum(nums, left, middle - 1);
    const rightHalf = findMaxSubArraySum(nums, middle + 1, right);

    return Math.max(maxSum, Math.max(leftHalf, rightHalf));
}