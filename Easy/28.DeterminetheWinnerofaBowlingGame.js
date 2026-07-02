/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */

//my solution 80.95% runtime and memory 90.48%

var isWinner = function(player1, player2) {
    function iteration(playerArray,){
        let score=0;
        let numberOfTens=0;
        for(let index = 0; index <playerArray.length; index++){
            if(numberOfTens>0) {
                score+=(playerArray[index]*2)
                numberOfTens--
            }else{
                score+=playerArray[index]
            }
            if(playerArray[index]===10) numberOfTens=2;
        }
        return score
    }
    const score1 = iteration(player1);
    const score2 = iteration(player2);
    return score1 > score2 ? 1 : score1 < score2 ? 2 : 0
};

//best solution

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let ans1 = player1[0], ans2 = player2[0]
    for(let i = 1; i < player1.length; i++){
        if(player1[i-1] == 10 ||(i >= 2 && player1[i - 2] == 10)) ans1 += player1[i]*2;
        else ans1 += player1[i] ;
        if(player2[i-1] == 10 || (i >= 2 && player2[i - 2] == 10)) ans2 += player2[i]*2;
        else ans2 += player2[i];
    }
    if(ans1 > ans2) return 1;
    else if(ans1 < ans2) return 2;
    else return 0;
};