/**
 * @param {number} num
 */

// my answer (good job runtime 20.49%)

var isHappy = function(num){
    function getPowerOfTwo(numberPower){
        let total = 0;
        while(numberPower!==0){
            total+=(numberPower%10)*(numberPower%10)
            numberPower = Math.floor(numberPower/10)
        }
        return (total)
    }
    const newSet = new Set();
    while(!newSet.has(num)){
        newSet.add(num)
        num = getPowerOfTwo(num)
    }
    if(num!==1) return false
    return true
}

// best answer

var isHappy = function(n) {
    const seen = new Set()
    while (!seen.has(n)) {
        seen.add(n)
        n = [...n.toString()].reduce((a, v) => +v*+v + a, 0)
        if (n === 1) return true
    }
    return false
};