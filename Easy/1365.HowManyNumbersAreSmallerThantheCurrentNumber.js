/**
 * @param {number[]} nums
 * @return {number[]}
 */

// TODO: try again

var smallerNumbersThanCurrent = function(nums) {

    nums = nums.sort()
    let prev = nums[0];
    let output = [0];
    for(let i = 1; i< nums.length; i++){
        nums[i]===prev ? output.push(nums[i-1]) : output.push(i)
        prev = nums[i-1]
    }
    return output
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

// best answer:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const freq = new Array(101).fill(0);
    const result = new Array(nums.length).fill(0);
    for(let i = 0; i<nums.length; i++){
        freq[nums[i]]++
    }
    for(let i = 1; i<freq.length; i++){
        freq[i] += freq[i-1];
    }
    for(let i =0; i<nums.length; i++){
        result[i] = nums[i] === 0 ? 0 : freq[nums[i] - 1];
    }
    return result
};