export function numberOfSteps(num: number): number {
    let value = num
    let steps = 0

    while (value !== 0) {
        if (value % 2 === 0) {
            value = value / 2
            steps++
        } else {
            value--
            steps++
        }
    }
    return steps
}