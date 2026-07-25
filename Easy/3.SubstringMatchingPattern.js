/**
 * You are given a string s and a pattern string p,
 * where p contains exactly one '*' character.
 * The '*' in p can be replaced with any sequence of
 * zero or more characters.
 * Return true if p can be made a substring of s, and
 * false otherwise.
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// TODO: try again

var hasMatch = function(s, p) {
    const [leftS, rightS] = [0,s.length-1];
    const [leftP, rightP] = [0,p.length-1];

    while (leftS < s.length && rightS >= 0) {
        if(s[leftS]===p[leftP]) leftP++
        if(s[rightS]===p[rightP]) rightP--
        if(p[leftP]!=="*" && s[leftS]!==p[leftP]) leftP--
        if(p[rightP]!=="*" && s[rightS]!==p[rightP]) rightP++

        leftS++
        rightS--
    }

    return false;
};
console.log(hasMatch("leleleetcode","ee*e"))