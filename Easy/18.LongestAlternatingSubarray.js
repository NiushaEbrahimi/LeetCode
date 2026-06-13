/**
 * @param {number[]} nums
 * @return {number}
 */
// this is my solution and it was the best :)
// beats 100& runtime and 85% in memory :)
var alternatingSubarray = function(nums) {
    let maxLength = -1;
    let i = 0;
    while(i < nums.length){

        let sign = 1;
        let j = i;
        while( j < nums.length && nums[j+1]-nums[j]===sign ){
            j++
            sign*=-1
        }
        if( j-i+1 > 1) maxLength < j-i+1 ? maxLength= j-i+1 : maxLength = maxLength
        i++
    }
    return maxLength
};
console.log(alternatingSubarray([2,3,4,3,4]))
console.log(alternatingSubarray([4,5,6]))