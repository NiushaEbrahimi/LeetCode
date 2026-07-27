/**
 * @param {number[]} forts
 * @return {number}
 */

// this worked but it's bad code and not efficent 
// TODO : try again

var captureForts = function(forts) {
    let oneOrminus = [];
    let max = 0;
    for(let i = 0 ; i < forts.length ; i++){
        if(forts[i]===1){
            if(oneOrminus[1]===-1){
                if((i - oneOrminus[0]) > max) max = i - oneOrminus[0] -1
                oneOrminus = []
            }
            if(oneOrminus[1]===1) oneOrminus = []
            if(oneOrminus.length===0){
                oneOrminus= [i,1]; 
            }
        }
        if(forts[i]===-1){
            if(oneOrminus[1]===1){
                if((i - oneOrminus[0]) > max) max = i - oneOrminus[0] -1
                oneOrminus = []
            }
            if(oneOrminus[1]===-1)oneOrminus = []
            if(oneOrminus.length===0){
                oneOrminus= [i,-1]; 
            }
        }
    }
    return max
};
console.log(captureForts([1,0,0,-1,0,0,0,0,1]))
console.log(captureForts([0,0,1,-1]))

// the better version of you

var captureForts = function(forts) {
    let best = 0, prev = -1; // prev = index of last non-zero
    for (let i = 0; i < forts.length; i++) {
        if (forts[i] === 0) continue;
        if (prev >= 0 && forts[prev] === -forts[i]) {
            best = Math.max(best, i - prev - 1);
        }
        prev = i;
    }
    return best;
};