/**
 * @param {number} n
 * @return {boolean}
 */

// got it in first try beats 100% :)
var isStrictlyPalindromic = function(n) {
    for(let index = 2; index <= n-2;index++){
        let inputString = n.toString(index);
        let left = 0;
        let right = inputString.length - 1;
        while(left <= Math.floor(inputString.length/2) ){
            if(inputString[left] !== inputString[right]) return false
            left++
            right--
        }
    }
    return true
};