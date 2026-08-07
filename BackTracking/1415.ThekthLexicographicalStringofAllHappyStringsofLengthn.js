/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

// try again  ( you failed in some parts of it)

var getHappyString = function(n, k) {
    const set = ['a', 'b', 'c'];
    // or you can have a counter for current ( k )
    let result = [];
    function dfs(char){
        // console.log(`char ${char}`)
        // console.log(result)
        if(char.length===n){
            result.push(char)
            return null
        }
        for(let i = 0; i < set.length;i++){
            if(char.length===0||char[char.length-1]!==set[i]){
                dfs(char+set[i])
            }
        }
    }
    dfs("")
    return k > result.length ? "" : result[k-1]
};
console.log(getHappyString(1,3))
console.log(getHappyString(1,4))
console.log(getHappyString(3,9))

// best answer
// Added using AI
var getHappyString = function(n, k) {
    let sz = 2 ** (n - 1);
    if (3 * sz < k) return "";

    const opts = ["bc", "ac", "ab"];
    let res = "";

    if      (k <= sz)     res = "a";
    else if (k <= 2 * sz) { res = "b"; k -= sz; }
    else                  { res = "c"; k -= 2 * sz; }

    for (let i = 1; i < n; i++) {
        sz = Math.floor(sz / 2);
        const ch = opts[res.charCodeAt(res.length - 1) - 97];
        if (k <= sz) res += ch[0];
        else       { res += ch[1]; k -= sz; }
    }
    return res;
};