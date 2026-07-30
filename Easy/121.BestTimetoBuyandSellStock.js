/**
 * @param {number[]} prices
 * @return {number}
 */

// IMP (the algorythm didn't came up to my mind)

var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let max = 0;
    while(right < prices.length){
        if(prices[left] < prices[right]){
            if(prices[right]-prices[left] > max) max = prices[right]-prices[left]
        }else{
            left = right
        }
        right++
        console.log(`max : ${max} left ${left} right ${right}`)
    }
    console.log(max)
};
maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])

// best answer

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

     let buy = prices[0];
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < buy) {
                buy = prices[i];
            } else if (prices[i] - buy > profit) {
                profit = prices[i] - buy;
            }
        }
        return profit;
    
};