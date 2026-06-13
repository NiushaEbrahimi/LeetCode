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
    const [left, right] = p.split("*");
    console.log(left)

    let start = s.indexOf(left);
    console.log(`start ${start}`)

    while (start !== -1) {
        if (s.indexOf(right, start + left.length) !== -1) {
            console.log(s.indexOf(right, start + left.length))
            return true;
        }

        start = s.indexOf(left, start + 1);
    }

    return false;
};
console.log(hasMatch("leetcode","ee*e"))