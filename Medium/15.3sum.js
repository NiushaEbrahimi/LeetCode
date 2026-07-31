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