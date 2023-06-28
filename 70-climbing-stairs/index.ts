export function climbStairs(n: number): number {
    if (n <= 3) return n;

    
    const result = 2 * climbStairs(n-2) + climbStairs(n-3)
    return result
}