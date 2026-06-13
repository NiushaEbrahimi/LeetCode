/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let set = new Set();
    for(let char of s){
        set.add(char)
    }
    return set.size
};