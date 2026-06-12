/**
 * @param {number[]} arr
 * @return {boolean}
 */


// my soltion (if i added arr.length<3 it beats 60%)
var validMountainArray = function(arr) {
    let i= 0;
    while(i < arr.length && arr[i] < arr[i+1]){
        i++
    }
    if(arr[i] === arr[i+1] || i===0 || i===arr.length-1) return false
    while(i < arr.length && arr[i] > arr[i+1]){
        i++
    }
    if(arr[i] === arr[i+1] || i < arr.length - 1 || i===0) return false
    return true
};


// best solution
var validMountainArray = function(arr) {
    let n = arr.length;
    if (n < 3) return false;

    let i = 0;

    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    if (i === 0 || i === n - 1) return false;

    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === n -1;
};

console.log(validMountainArray([0,3,2,1]))
