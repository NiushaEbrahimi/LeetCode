/**
 * You are given an integer array nums.
 * Return the smallest absent positive integer in nums
 *  such that it is strictly greater than the average of
 *  all elements in nums.The average of an array is defined
 *  as the sum of all its elements divided by the number of
 *  elements.
 * 
 * @param {number[]} nums
 * @return {number}
 */

// this was my first approach:

// var smallestAbsent = function(nums) {
//     let sumOfArray = nums.reduce((a,b)=>a+b)
//     let median = Math.floor(sumOfArray/nums.length)
//     console.log(median)
//     if(median < 0 ) median = 1
//     else median++
//     nums = nums.sort((a,b)=>a-b)
//     for(let index = 0 ; index < nums.length; index++){
//         if(nums[index]===median){
//             median++
//         }
//     }
    
//     return median
// };

// this is my solution (runstime : 75%, memory: 95%)

var smallestAbsent = function(nums) {
    let sumOfArray = nums.reduce((a,b)=>a+b)
    let median = Math.floor(sumOfArray/nums.length)
    if(median < 0 ) median = 1
    else median++
    let i = 0;
    while(i<nums.length){
        if(nums[i]===median){
            median++
            i=0
            continue
        }
        i++
    }
    
    return median
};

// best solution
var smallestAbsent = function(nums) {
    let avg = nums.reduce((a,b) => a + b, 0) / nums.length
    if(nums.every(x => x <= 0)) return 1
    let max = Math.max(...nums)
    for(let i = 1; i < max; i+=1) {
        if(i > avg && !nums.includes(i)) return i
    }

   return  max + 1
};

console.log(smallestAbsent([-84,75,39,42,45,41,80,77,40,34,16,17,81]))