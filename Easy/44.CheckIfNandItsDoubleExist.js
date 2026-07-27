/**
 * @param {number[]} arr
 * @return {boolean}
 */

// this was my approach with a bad runtime
// TODO: try agaian ( the other approach is easy)

var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length; i++ ){
        const mutiplyTwo = arr.findIndex(a=>a===arr[i]*2)
        const divideTwo = arr.findIndex(a=> a===arr[i]/2)
        if((mutiplyTwo!==-1 || divideTwo!==-1)&& (mutiplyTwo!==i || divideTwo!==i)) return true
    }
    return false
};

// best approach:

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; ++i) {
        if (map.has(arr[i] * 2) || map.has(arr[i] / 2)) {
            return true;
        } else {
            map.set(arr[i], arr[i]);
        }
    }
    return false;
};
