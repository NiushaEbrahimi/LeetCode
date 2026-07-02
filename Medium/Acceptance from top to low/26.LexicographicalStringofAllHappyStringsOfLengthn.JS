/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

// TODO: need to practice backtracking

var getHappyString = function(n, k) {
    let i=0;
    let results =[];
    const s = ['a', 'b', 'c'];
    while((i < n)&&(s[i] != s[i + 1])){


        i++
    }
    return results[k-1]
};