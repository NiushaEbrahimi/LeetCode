/**
 * You are given a 0-indexed string word, consisting of
 * lowercase English letters. You need to select one index 
 * and remove the letter at that index from word so that the frequency
 *  of every letter present in word is equal.
 * Return true if it is possible to remove one letter 
 * so that the frequency of all letters in word are equal, and 
 * false otherwise.
 * @param {string} word
 * @return {boolean}
 */

// my solution
// Runtime 1ms Beats: 84.21%

var equalFrequency = function(word) {
    const charFreq = new Map();

    for (let char of word) {
        charFreq.set(char, (charFreq.get(char) || 0) + 1);
    }

    const freqGroups = new Map();

    for (let [char, freq] of charFreq) {
        if (freqGroups.size > 2) return false;
        if (!freqGroups.has(freq)) {
            freqGroups.set(freq, []);
        }

        freqGroups.get(freq).push(char);
    }

    if (freqGroups.size > 2) return false;

    if (freqGroups.size === 1) {
        const [[freq, chars]] = freqGroups;

        return freq === 1 || chars.length === 1;
    }

    const [[freq1, chars1], [freq2, chars2]] = freqGroups;

    if (freq1 === 1 && chars1.length === 1) return true;
    if (freq2 === 1 && chars2.length === 1) return true;

    if (Math.abs(freq1 - freq2) === 1) {
        if (freq1 > freq2 && chars1.length === 1) return true;
        if (freq2 > freq1 && chars2.length === 1) return true;
    }

    return false;
};

// best runtime answers:
var equalFrequency = function (word) {

    let freq = new Map()
    let map = new Map()

    for (let char of word) {
        freq.set(char, (freq.get(char) || 0) + 1)
    }

    for (let [char, count] of freq) {
        map.set(count, (map.get(count) || 0) + 1)
    }
    if (map.size > 2) return false

    if (map.size === 1) {
        let [fr, ct] = [...map][0]
        return fr === 1 || ct == 1
    }

    if (map.size === 2) {
        let [[fr1, ct1], [fr2, ct2]] = [...map]
        if (fr1 === 1 && ct1 === 1) return true
        if (fr2 === 1 && ct2 === 1) return true


       //
        if (fr1 + 1 === fr2 && ct2 === 1) return true
        if (fr2 + 1 === fr1 && ct1 === 1) return true

    }

    return false
};
// ai solution:
var equalFrequency = function(word) {
    for (let i = 0; i < word.length; i++) {
        const map = new Map();

        // Build frequency map after removing character at index i
        for (let j = 0; j < word.length; j++) {
            if (i === j) continue;

            const char = word[j];
            map.set(char, (map.get(char) || 0) + 1);
        }

        // Check if all frequencies are equal
        const frequencies = [...map.values()];

        let isEqual = true;
        for (let k = 1; k < frequencies.length; k++) {
            if (frequencies[k] !== frequencies[0]) {
                isEqual = false;
                break;
            }
        }

        if (isEqual) return true;
    }

    return false;
};

// console.log(equalFrequency("abcc"))
// console.log(equalFrequency("abccddddd"))
// console.log(equalFrequency("abbcc"))
// console.log(equalFrequency("aazz"))