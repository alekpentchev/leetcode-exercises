export function isValidSudoku(board: string[][]): boolean {
    const columns: { [key: number]: Set<string> } = {}
    const rows: { [key: number]: Set<string> } = {}
    const squares: { [key: string]: Set<string> } = {}

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        if (!rows.hasOwnProperty(rowIndex)) {
            rows[rowIndex] = new Set()
        }
        for (let colIndex = 0; colIndex < board.length; colIndex++) {

            if (!columns.hasOwnProperty(colIndex)) {
                columns[colIndex] = new Set()
            }

            const cell = board[rowIndex][colIndex];
            const squareKey = [Math.floor(rowIndex / 3), Math.floor(colIndex / 3)].join('')

            if (!squares.hasOwnProperty(squareKey)) {
                squares[squareKey] = new Set()
            }

            if (cell === '.') {
                continue
            }

            if (columns[colIndex].has(cell) || rows[rowIndex].has(cell) || squares[squareKey].has(cell)) {
                return false
            }

            rows[rowIndex].add(cell)
            columns[colIndex].add(cell)
            squares[squareKey].add(cell)
        }

    }

    return true
}