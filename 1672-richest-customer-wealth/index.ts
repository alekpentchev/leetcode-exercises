export function maximumWealth(accounts: number[][]): number {
    const summedAccounts = []

    for (let index = 0; index < accounts.length; index++) {
        const account = accounts[index];
        const accountSum = account.reduce((acc, curr) => acc += curr ,0)
        summedAccounts.push(accountSum)
    }

    return Math.max(...summedAccounts)
}