/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// my approach (runtime 69%)

var twoSum = function(nums, target) {
    let newMap = new Map();
    for(let i =0; i < nums.length; i++){
        if(newMap.has(nums[i])){
            return [i,newMap.get(nums[i])]
        }
        if(!newMap.has(target-nums[i])) newMap.set(target-nums[i],i)
    }
};


// best runtime 

var twoSum = function(nums, target) {
    const targetMap = new Map();
    for(let i=0; i<nums.length; i++){
        const targetIndex = targetMap.get(target-nums[i])
        if(targetIndex !== undefined){
            return [i, targetIndex];
        } else { 
            targetMap.set(nums[i],i);
        }
    }
};