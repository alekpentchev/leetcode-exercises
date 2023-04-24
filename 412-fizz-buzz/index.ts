export function fizzBuzz(n: number): string[] {
    const result = [];

    for (let index = 1; index <= n; index++) {
        let el = index.toString()
        if (index % 3 === 0) {
            el = "Fizz"
            if (index % 5 === 0) {
                el += "Buzz"
            }
        } else if (index % 5 === 0) {
            el = "Buzz"
        }
        result.push(el)
    }

    return result
}