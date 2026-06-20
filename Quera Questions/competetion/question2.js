var n = parseInt(readline());
var a = readline().split(' ').map(Number);

function bestTactic(n, a) {
    let result = [];
    let i = 0;

    while (i < n) {
        let j = i;
        while (j + 1 < n && (a[j+1] % 2) === (a[i] % 2)) j++;

        let block = a.slice(i, j + 1).sort((x, y) => x - y);
        for (let k = 0; k < block.length; k++) result.push(block[k]);

        i = j + 1;
    }

    let count = 0;
    let maxVal = -1;

    for (let k = 0; k < n; k++) {
        if (result[k] > maxVal) {
            count++;
            maxVal = result[k];
        }
    }

    return count;
}

console.log(bestTactic(n,a));

// console.log(bestTactic(5,[8,18,6,7,2]));