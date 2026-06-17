/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

// IMP
// my asnwer 55%

var findThePrefixCommonArray = function(A, B) {
    let map = new Map();
    let i = 1 ;
    map.set(A[0],"A")
    map.set(B[0],"B")
    let prefix;
    if(A[0]===B[0]) prefix = [1]
    if(A[0]!==B[0]) prefix = [0]
    while ( i < A.length){
        let count = 0;
        if(!map.has(A[i])) map.set(A[i],"A")
        else if (map.get(A[i])==="B") count++
        if(!map.has(B[i])) map.set(B[i],"B")
        else if (map.get(B[i])==="A") count++
        prefix[i] = prefix[i-1] + count
        i++
    }
    return prefix
};
console.log(findThePrefixCommonArray([1,3,2,4],[3,1,2,4]))
console.log(findThePrefixCommonArray([2,3,1],[3,1,2]))


// best answer
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const counts = Array(n + 1).fill(0);
    const answer = Array(n)
    let prefixes = 0;

    for (let i = 0; i < n; i++) {
        counts[A[i]]++;
        if (counts[A[i]] === 2) prefixes++;
        counts[B[i]]++;
        if (counts[B[i]] === 2) prefixes++;
        answer[i] = prefixes;
    }

    return answer;
};