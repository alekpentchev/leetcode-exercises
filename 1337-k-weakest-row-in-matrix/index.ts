export const kWeakestRows = (mat: number[][], k: number) => {
    const rows: {[key: number]: number} = {}
    let resultOrder: number[] = []

    for (let rindex = 0; rindex < mat.length; rindex++) {
        rows[rindex] = 0
        for (let index = 0; index < mat[rindex].length; index++) {
            if (mat[rindex][index] === 1) {
                rows[rindex]++
            }
        }
        resultOrder.push(rindex)

    }
    resultOrder = resultOrder.sort((a,b) => rows[a] - rows[b])
    return resultOrder.slice(0, k)
}