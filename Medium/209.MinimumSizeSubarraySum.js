/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//  IMP your code is not sliding window TODO: try again

var minSubArrayLen = function(target, nums) {
    let left = 0;
    let min = Infinity;

    while (left < nums.length) {

        if (nums[left] === target) return 1;

        let sum = nums[left];
        let count = 1;
        let pointer = left + 1;

        while (sum < target && pointer < nums.length) {
            sum += nums[pointer];
            pointer++;
            count++;
        }

        if (sum >= target) {
            min = Math.min(min, count);
        }

        left++;
    }

    return min === Infinity ? 0 : min;
};
console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(1, [1,4,4]))
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))