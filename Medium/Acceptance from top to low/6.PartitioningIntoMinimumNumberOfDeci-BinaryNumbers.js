/**
 * @param {string} n
 * @return {number}
 */

// my solution
var minPartitions = function(n) {
    let max = 0;
    for(let char of n){
        Number(char) > max ? max = Number(char) : max = max
    }
    return max
};

// best solution
var minPartitions = function (n) {
    for (let i = 9; i > 0; i--)
        if (n.includes(i.toString()))
            return i
};