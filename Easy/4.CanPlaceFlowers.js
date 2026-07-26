/**
 * You have a long flowerbed in which some of the plots
 * are planted, and some are not. However, flowers cannot 
 * be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's,
 * where 0 means empty and 1 means not empty, and an integer
 * n, return true if n new flowers can be planted in the 
 * flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */


// TODO: try again
// this is the approach after watching a video

var canPlaceFlowers = function(flowerbed, n) {
    const newFlowerbed = [0,...flowerbed,0]
    for(let i=0;i<newFlowerbed.length;i++){
        if(newFlowerbed[i]===0){
            if(newFlowerbed[i-1]===0 && newFlowerbed[i+1]===0){
                newFlowerbed[i]=1;
                n--;
            }
        }
        if(n<=0) return true
    }
    return false
};
console.log(canPlaceFlowers([1,0,1,0,1,0,1],0))
console.log(canPlaceFlowers([1,0,1,0,1,0,0],1))
console.log(canPlaceFlowers([1,0,1,0,1,0,0,0,0],2))


// best approach

var canPlaceFlowers = function(flowerbed, n) {
    let planted = 0;
    for(let i=0;i<flowerbed.length;i++){
        const leftEmpty = i===0 || flowerbed[i-1]===0;
        const rightEmpty = i===flowerbed.length-1 || flowerbed[i+1]===0;

        if(leftEmpty && rightEmpty && flowerbed[i]===0){
            flowerbed[i]=1;
            planted++;
        }

        if(planted>=n){
            return true;
        }
    }

    return planted>=n;
};