/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// TODO: one edge case is not handled ( try again )

var threeSum = function(nums) {
    let sorted = nums.sort((a,b)=>a-b);
    let result = [];
    for(let i = 0; i < sorted.length - 2; i++){
        let left = i+1;
        let right = sorted.length-1
        while(right !== left){
            if((sorted[i] * -1) < sorted[left] + sorted[right]){
                right--
            }else if((sorted[i] * -1) > sorted[left] + sorted[right]){
                left++
            }else{
                result.push([sorted[i],sorted[left],sorted[right]]);
                console.log(result)
                break;
            }
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))


// best answer

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    const res = []

    for (let p1 = 0; p1 < nums.length-2; p1++) {
        if (p1 > 0 && nums[p1] === nums[p1 - 1]) continue;
        if (nums[p1] > 0 ) break

        let left = p1 + 1
        let right = nums.length - 1

        while (left < right) {
            let sum = nums[p1] + nums[left] + nums[right]
            if (sum === 0) {
                res.push([nums[p1], nums[left], nums[right]])

                while (left < right && nums[left] === nums[left+1]) left++
                while (left < right && nums[right] === nums[right-1]) right--

                left++
                right--
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }

    return res
};