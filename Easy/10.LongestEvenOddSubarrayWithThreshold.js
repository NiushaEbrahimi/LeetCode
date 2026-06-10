/**
 * You are given a 0-indexed integer array nums
 *  and an integer threshold.
 * Find the length of the longest subarray of nums 
 * starting at index l and ending at index r 
 * (0 <= l <= r < nums.length) that satisfies the following conditions:
 * nums[l] % 2 == 0
 * For all indices i in the range [l, r - 1], nums[i] % 2 != nums[i + 1] % 2
 * For all indices i in the range [l, r], nums[i] <= threshold
 * Return an integer denoting the length of the longest such subarray.
 * Note: A subarray is a contiguous non-empty sequence of elements within an array.
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

// my solution
var longestAlternatingSubarray = function(nums, threshold) {
    let i = 0
    let maxLength = 0
    while( i < nums.length){
        if(nums[i]%2!==0 || nums[i] > threshold){
            i++
            continue
        }
        let currentLenght = 1
        let j = i
        while(
            nums[j] % 2 !== nums[j + 1] % 2 &&
            nums[j+1] <= threshold &&
            j+1 < nums.length
        ){
            currentLenght++
            j++
        }
        maxLength = maxLength < currentLenght ? currentLenght : maxLength
        i = j + 1
    }
    return maxLength
};
// best solution ( don't know why tho)
var longestAlternatingSubarray = function(nums, threshold) {
    let maxLen = 0;     
    let currLen = 0;     
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > threshold) {
            currLen = 0;             
            continue;         
        }         
        if (currLen === 0) {             
            if (nums[i] % 2 === 0) currLen = 1;         
        } else {             
            if ((nums[i] % 2) !== (nums[i - 1] % 2)) {
                currLen++;             
            } else {                 
                currLen = (nums[i] % 2 === 0) ? 1 : 0;             
            }         
        }         
        if (currLen > maxLen) maxLen = currLen;     
    }     
    return maxLen; 
};
console.log(longestAlternatingSubarray([3,2,5,4],5))
console.log(longestAlternatingSubarray([1,2],2))
console.log(longestAlternatingSubarray([2,3,4,5],4))