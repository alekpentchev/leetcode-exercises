/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export const canConstruct = function(ransomNote: string, magazine: string): boolean {
    const magazineCopy = [...magazine]
    const res = Array.from(ransomNote).every(char => {
        if (magazineCopy.includes(char)) {
            const idx = magazineCopy.findIndex(el => el === char )
            magazineCopy.splice(idx, 1)
            return true
        }
        return false
    })
    return res
};