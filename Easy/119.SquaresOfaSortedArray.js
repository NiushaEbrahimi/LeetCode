/**
 * @param {number[]} nums
 * @return {number[]}
 */

// well this is definatly cheeting =)

var sortedSquares = function(nums) {
    nums = nums.map((value)=>(value*value))
    return nums.sort((a,b)=>a-b)
};

// IMP this didn't came into my mind in the first place

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let right = nums.length - 1
    let left = 0;
    let counter = 0;
    const result = new Array(nums.length)
    while ( counter <= nums.length-1){
        if(Math.abs(nums[left]) < nums[right]){
            result[nums.length-1-counter] = nums[right] * nums[right] 
            right--
        }else{
            result[nums.length-1-counter] = Math.abs(nums[left]) * Math.abs(nums[left])
            left++
        }
        counter++
    }
    return result
};
