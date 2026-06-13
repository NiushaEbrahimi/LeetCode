/**
 * @param {number[]} nums
 * @return {number}
 */

// this is my solution and it has the best runtime, but not good in memory
// don't know why
var missingInteger = function(nums) {
    let i = 0;
    let sum = nums[i];
    while( i < nums.length && nums[i+1]===nums[i]+1) {
        sum += nums[i+1]
        i++
    }
    while(nums.indexOf(sum,i)!==-1){
        sum++
    }
    return sum
};
console.log(missingInteger([1,2,3,2,5]))
console.log(missingInteger([3,4,5,1,12,14,13]))