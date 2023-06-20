export function search(nums: number[], target: number): number {
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }

    let left = 0
    let right = nums.length - 1

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)

        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    // left is the smallest number so it's index is the number of rotations
    const rotationCount = left
    left = 0
    right = nums.length - 1

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const actualMid =(mid + rotationCount) % nums.length
        
        if (nums[actualMid] === target) {
            return actualMid
        } else if (nums[actualMid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}


export function search2(nums: number[], target: number): number {
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }

    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) return mid

        if (nums[mid] >= nums[0]) {
            if (target >= nums[0] && target <= nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target >= nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
}
