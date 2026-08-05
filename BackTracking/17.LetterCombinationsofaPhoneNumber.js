/**
 * @param {string} digits
 * @return {string[]}
 */

// TODO: try again

var letterCombinations = function(digits) {
    const map = {"2":"abc","3":"def","4":"ghi","5":"jkl","6":"mno","7":"pqrs","8":"tuv","9":"wxyz"}
    let string = [];
    let result = [];
    function dfs(num,index){
        if(!map[num][index]){
            result.push()
            return null
        }

        // do sth
        string.push(map[num][index])
        // dfs

        // undo
        string.pop()
        
    }
    dfs(digits[0],0)
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        const letters = map[digits[index]];

        for (const letter of letters) {
            backtrack(index + 1, current + letter);
        }
    }

    backtrack(0, "");
    return result;
};