/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// TODO: edge case, nums = [99,99] k =2 (try again) IMP

var containsNearbyDuplicate = function(nums, k) {
    let i = 0;
    while( i + k < nums.length ){
        let left = i;
        let right = i + k;
        const newSet = new Set();
        while(left !== right){
            if(newSet.has(nums[left]) || newSet.has(nums[right])){
                return true
            }
            newSet.add(nums[left])
            newSet.add(nums[right])
            console.log(`left ${left} rihgt ${right}`)
            left++ 
            right--
        }
        i = i + k + 1
    }
    return false
};

// best answer

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();

    for (let n = 0; n < nums.length; n++){
        if (set.has(nums[n])){
            return true;
        }

        set.add(nums[n]);

        // this line is important because it automatically creates the 
        // range of numbers needed for the set
        if (n >= k){
            set.delete(nums[n - k])
        }
    }

    return false;
};