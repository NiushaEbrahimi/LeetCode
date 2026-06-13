/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */

// TODO: try again

// my solution (40%)
var pivotArray = function(nums, pivot) {
    let left = [];
    let right = [];
    let amountOfPivots = 0;
    for(let index = 0; index < nums.length; index++ ){
        if(nums[index] < pivot) left.push(nums[index])
        if(nums[index] === pivot) amountOfPivots++
        if(nums[index] > pivot) right.push(nums[index])
    }
    return [...left,...Array(amountOfPivots).fill(pivot),...right]
};

// best solution
const pivotArray = (nums, pivot) => {
    const n = nums.length;
    const res = new Int32Array(n);
    let p = 0;
    let q = n - 1;

    for (let l = 0, r = n - 1; l < n; l++, r--) {
        const nl = nums[l];
        const nr = nums[r];

        if (nl < pivot) {
            res[p++] = nl;
        }

        if (nr > pivot) {
            res[q--] = nr;
        }
    }

    for (let i = p; i <= q; i++) {
        res[i] = pivot;
    }

    return res;
};