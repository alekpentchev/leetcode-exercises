export function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>()
    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index]

        if (numMap.has(diff)) {
            return [numMap.get(diff) ?? 0, index]
        }

        numMap.set(nums[index], index)
    }

    // No matching pair found
    return [];
}