/**
 * @param {number[]} deck
 * @return {boolean}
 */

// TODO: try again

var hasGroupsSizeX = function(deck) {
    const freq = new Map();

    for (const card of deck) {
        freq.set(card, (freq.get(card) || 0) + 1);
    }

    let result = 0;

    for (const count of freq.values()) {
        result = gcd(result, count);
    }

    return result > 1;
};

function gcd(a, b) {
    console.log(`a: ${a} b: ${b} a%b ${(a%b)}`)
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    console.log(`a: ${a} b: ${b} a%b ${(a%b)}`)
    return a;
}
hasGroupsSizeX([1,1,1,1,2,2,2,2,2])