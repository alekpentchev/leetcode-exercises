export function maxProduct(nums: number[]): number {
    let largestProduct = -Infinity
    let currentProduct = 1

    for (let index = 0; index < nums.length; index++) {
        currentProduct *= nums[index]
        largestProduct = Math.max(largestProduct, currentProduct)
        if (currentProduct === 0) {
            currentProduct = 1
        }
    }

    currentProduct = 1
    for (let index = nums.length - 1; index >= 0; index--) {
        currentProduct *= nums[index]
        largestProduct = Math.max(largestProduct, currentProduct)
        if (currentProduct === 0) {
            currentProduct = 1
        }
    }

    return largestProduct
}