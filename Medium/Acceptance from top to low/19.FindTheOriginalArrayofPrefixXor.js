/**
 * @param {number[]} pref
 * @return {number[]}
 */

// my solution

var findArray = function(pref) {
    let arr = [pref[0]];
    function dfs(n){
        if(n===pref.length)return
        arr[n] = pref[n] ^ pref[n-1]
        dfs(n+1)
    }
    dfs(1)
    return arr
};

console.log(findArray([5,2,0,3,1]))

// best solution
var findArray = function(pref) {
    let prev=0;
    for(let i=0;i<pref.length;i++){
        pref[i]^=prev;
        prev^=pref[i];
    }
    return pref;
};