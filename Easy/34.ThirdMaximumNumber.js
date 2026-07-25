/**
 * @param {number[]} nums
 * @return {number}
 */

// TODO: try again, this was my approach which is
//  not wrong, it's just not the best

var thirdMax = function(nums) {
    let max = 0;  
    function findMax(){
        
    }
    for(let i=0; i<3; i++){
        max = findMax()
    }
    return max
};

var thirdMax = function(nums) {
    let first = null, second = null, third = null;

    for (const n of nums) {
        // skip duplicates of numbers we've already ranked
        if (n === first || n === second || n === third) continue;

        if (first === null || n > first) {
            // n is the new #1 — push old #1 and #2 down
            third = second;
            second = first;
            first = n;
        } else if (second === null || n > second) {
            // n is the new #2 — push old #2 down
            third = second;
            second = n;
        } else if (third === null || n > third) {
            // n is the new #3
            third = n;
        }
    }

    return third !== null ? third : first;
}