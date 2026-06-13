/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// my solution (mine beats 53%)
var largestInteger = function(nums, k) {
    let i = 0;
    let map = new Map();
    while(i+k-1 < nums.length){
        let j = i;
        let innerSet = new Set();
        while(j <= i+k-1 ){
            if(!innerSet.has(nums[j])){
                innerSet.add(nums[j])
                map.has(nums[j]) ? map.set(nums[j],map.get(nums[j])+1) : map.set(nums[j],1);
            }
            j++
        }
        i++;
    }
    let largest = -1;
    map.forEach((value,key)=>{
        if(value===1){
            largest < key ? largest = key : largest = largest
        }
    })
    return largest
};


// this is interesting and also it came to my mind at first too,
// but i went for an algorithm that is safe
// but this approach below is interesting
// TODO: try this again later

// best solution
var largestInteger = function(nums, k) {     
    const n = nums.length;     
    const freq = new Array(51).fill(0);     
    for (const v of nums) freq[v]++;     
    if (k === n) {         
        let mx = -1;         
        for (const v of nums) if (v > mx) mx = v;         
        return mx;     
    }     
    if (k === 1) {         
        let ans = -1;         
        for (let v = 0; v <= 50; v++) {             
            if (freq[v] === 1) ans = Math.max(ans, v);         
        }         
        return ans;     
    }     
    const a = nums[0], b = nums[n - 1];     
    const cand = [];     
    if (freq[a] === 1) cand.push(a);     
    if (freq[b] === 1) cand.push(b);     
    if (cand.length === 0) return -1;     
    return Math.max(...cand); 
};