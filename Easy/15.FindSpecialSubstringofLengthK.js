/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */

// this is what i wrote and it is wrong
var hasSpecialSubstring = function(s, k) {
    let i = 0;
    while(i < s.length){
        if(s[i]!==s[i+1]){
            i++
            continue
        }
        j=i+1
        while(j<s.length){
            if( s[j]!==s[j+1]){
                break
            }
            j++
        }
        if(j-i+1===k){
            return true
        }
        i=j+1
    }
    return false
};

// this is the right version of it(and also is the best solution with runtime 100%)
var hasSpecialSubstring = function(s, k) {
    let i = 0;

    while (i < s.length) {
        let j = i;

        while (j + 1 < s.length && s[j] === s[j + 1]) {
            j++;
        }

        if (j - i + 1 === k) {
            return true;
        }

        i = j + 1;
    }

    return false;
};

console.log(hasSpecialSubstring("aaabaaa",3));
console.log(hasSpecialSubstring("abc", 2));
console.log(hasSpecialSubstring("aabbcc", 2));
console.log(hasSpecialSubstring("aaaaa", 3));