/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */


// TODO: try again, this approach fails at (sequence="aaaaaa"word="aa")

var maxRepeating = function(sequence, word) {
    let total = 0;
    let maxTotal = 0;
    let start = 0;
    let prev = -word.length;
    while (true) {
        start = sequence.indexOf(word, start);
        if (start === -1) break;
        total = (start - prev === word.length) ? total + 1 : 1;
        maxTotal = Math.max(maxTotal, total);
        prev = start;
        start += 1;
    }
    return maxTotal;
};

// right/best answer ( needs dp)

var maxRepeating = function(sequence, word) {
    const n = sequence.length, m = word.length;
    const dp = new Array(n).fill(0);
    let maxK = 0;
    for (let i = 0; i + m <= n; i++) {
        if (sequence.startsWith(word, i)) {
            dp[i] = (i - m >= 0 ? dp[i - m] : 0) + 1;
            maxK = Math.max(maxK, dp[i]);
        }
    }
    return maxK;
};