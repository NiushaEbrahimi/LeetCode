/**
 * @param {number[]} nums
 * @return {number}
 */

// my approach (runtime 100%)

var missingNumber = function(nums) {
    return ((nums.length*(nums.length+1))/2)-(nums.reduce((t,n)=>t+n,0))
};
console.log(missingNumber([3,0,1]))