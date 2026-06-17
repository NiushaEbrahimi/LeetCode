/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */

// my solution beats 78%

var totalWaviness = function(num1, num2) {
    if(num1 <= 100 , num2 <= 100) return 0
    if (num1 < 100) num1 = 100
    let count = 0;
    while(num1 <= num2){

        const string = String(num1);
        for(let index = 1; index < string.length-1; index++){
            if(string[index]>string[index-1]&&string[index]>string[index+1]) count++
            if(string[index]<string[index-1]&&string[index]<string[index+1]) count++
        }

        num1++
    }
    return count
};

console.log(totalWaviness(120,130))

// best solution 
const { floor, max, min } = Math;

const MAX = 10e5;
const dp = new Int32Array(MAX);
const pref = new Int32Array(MAX);

for (let i = 100; i < MAX; i++) {
    const d1 = i % 10;
    const d2 = floor(i / 10) % 10;
    const d3 = floor(i / 100) % 10;

    const isWave = (d2 > max(d3, d1)) | (d2 < min(d3, d1));
    dp[i] = dp[floor(i / 10)] + isWave;
    pref[i] = pref[i - 1] + dp[i];
}

const totalWaviness = (A, B) => pref[B] - pref[A - 1];