let nmk = readline().split(' ').map(Number);
let array = readline().split(' ').map(Number);

function solve(n, m, k, array) {
    const pref = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        pref[i + 1] = (pref[i] + array[i]) % m;
    }

    const dp = new Array(n + 1).fill(-Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= i - k; j++) {
            if (j === 0 || dp[j] > -Infinity) {
                const shot = (pref[i] - pref[j] + m) % m;
                dp[i] = Math.max(dp[i], dp[j] + shot);
            }
        }
    }

    return dp[n];
}

console.log(solve(nmk[o],nmk[1],nmk[2],array));
// console.log(solve(4,2,2,[4,5,3,6]));
// console.log(solve(12,6,3,[6,6,1,5,6,6,1,5,6,6,1,5]));