export const romanToInt = function(s) {
    const translations = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const letters = s.split('')
    let result = 0;

    // iterating from right to left for easies subtraction
    // we need to focus on the subtraction and that's why right-left dir is easier
    for (let i=letters.length; i--; i>-1) {
        let current = letters[i]
        let previous = letters[i+1]
        
        if (result === 0) {
            result += translations[current]
            continue;
        }

        // check if the roman number to the right of the current one higher
        // if so, subtract the current roman number int value from the result
        if (translations[current] - translations[previous] < 0) {
            result -= translations[current]
            continue
        }

        result += translations[current]
    }

    return result
};