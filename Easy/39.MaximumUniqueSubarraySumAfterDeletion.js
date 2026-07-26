/**
 * @param {number[]} nums
 * @return {number}
 */

//this is my approach

var maxSum = function(nums) {
    let sorted = nums.sort((a,b)=>a-b)
    let i=0;
    let sum = 0;
    while(sorted[i]<= 0) i++
    if(i===(nums.length)) {
        return nums[i-1]
    }
    else {
        sorted = sorted.slice(i,sorted.length);
        sum = 0;
    }
    i=0
    const newSet = new Set()
    while(i<sorted.length){
        if(!newSet.has(sorted[i])){
            newSet.add(sorted[i])
            sum+=sorted[i]
        }
        i++
    }
    return sum
};


//this is the best approach


var maxSum = function(nums) {
    // this line is IMP
    const set = new Set (nums)
    const sortedSet = [...set].sort((a, b) => a - b)
    let ans = 0

    if (sortedSet[sortedSet.length - 1] < 0) {
        return sortedSet[sortedSet.length - 1]
    }
    for (let i = 0; i < sortedSet.length; i++) {
        if (sortedSet[i] > 0) {
            ans += sortedSet[i]
        }    
    }
    return ans
};



// this is kinda cool too, check it out for js practice:

var maxSum = function(nums) {
    const s = new Set(nums);
    const arr = [...s].filter(x => x > 0);
    if(!arr.length) return [...s].sort((a,b)=> b-a)[0]
    arr.sort((a,b) => b-a );
    return arr.reduce((acc,cur) =>  acc+=cur,0)
};