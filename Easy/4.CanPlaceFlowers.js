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

var canPlaceFlowers = function(flowerbed, n) {
    let starting = flowerbed.indexOf(1);
    let count =0;
    while(starting!==-1){
        if(starting === flowerbed.length - 1 && flowerbed[starting-1]===0){
            count+=2
        }
        if(starting === 0 && flowerbed[starting+1]===0){
            count+=2
        }
        if(flowerbed[starting-1]===0 && flowerbed[starting+1]===0){
            count+=3
        }
        starting = flowerbed.indexOf(1,starting+1)    
    }
    if(n===Math.ceil((flowerbed.length - count)/2)){
        return true
    }else{
        return false
    }
};
canPlaceFlowers([1,0,1,0,1,0,1],0)