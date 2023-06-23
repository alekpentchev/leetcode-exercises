export function threeSum(nums: number[]): number[][] {
    const TARGET = 0
    const result: number[][] = []
    nums.sort((a,b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        
        if (i > 0 && nums[i] === nums[i-1]) continue

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum > TARGET) {
                right--
            } else if (sum < TARGET) {
                left++
            } else {
                result.push([nums[i], nums[left], nums[right]])

                left++
                while (nums[left] === nums[left-1]) {
                    left++
                }

                right--
                while (nums[right] === nums[right+1]) {
                    right++
                }
            }


        }
    }


    return result
}