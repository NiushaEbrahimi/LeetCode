/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

// my solution ( runtime not good :( )
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length){
        return false
    }
    let pointer = 0;
    let differentIndex = [];
    const map = new Map();
    while(pointer < goal.length){
        if(s[pointer]!==goal[pointer]){
            
            differentIndex.push(pointer)
        }
        !map.has(s[pointer]) 
        ? map.set(s[pointer],1) 
        : map.set(s[pointer],map.get(s[pointer])+1)
        pointer++
    }
    if(differentIndex.length===2){
        if(
            (s[differentIndex[0]]===goal[differentIndex[0]] || s[differentIndex[0]]===goal[differentIndex[1]]) &&
            (s[differentIndex[1]]===goal[differentIndex[0]] || s[differentIndex[1]]===goal[differentIndex[1]])
        ){
            return true
        }else{
            return false
        }
    }else if(differentIndex.length > 0){
        return false
    }
    return !([...map.values()].every((value)=>value===1))
};

// ai solution (best solution in leetcode was simillar)
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    let differentIndex = [];
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            differentIndex.push(i);

            if (differentIndex.length > 2) {
                return false;
            }
        }

        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    if (differentIndex.length === 2) {
        const [i, j] = differentIndex;

        return (
            s[i] === goal[j] &&
            s[j] === goal[i]
        );
    }

    if (differentIndex.length === 0) {
        return [...map.values()].some(count => count > 1);
    }

    return false;
};

console.log(buddyStrings("aaab","aaab"))
console.log(buddyStrings("ab","ab"))
console.log(buddyStrings("abcdd","abcaa"))