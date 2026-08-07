/**
 * @param {number[]} nums
 * @return {number}
 */

// TODO: try again ( this is gpt's answer)

var subsetXORSum = function(nums) {
    let sum = 0;
    function dfs(index, currentXor){
        if (index === nums.length) {
            sum += currentXor;
            return;
        }

        dfs(index + 1, currentXor ^ nums[index]);

        dfs(index + 1, currentXor);
    }
    dfs(0,0)
    return sum
};
console.log(subsetXORSum([1,3]))
console.log(subsetXORSum([5,1,6]))