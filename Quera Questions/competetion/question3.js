let t = parseInt(readline());
let allNumberMap = [];
for (let i = 0; i < t; i++) {
    allNumberMap.push(readline().split(' ').map(Number));
}

function settingDominos(t, allNumberMap){
    let output = [];
    for (let tCount = 0; tCount < t; tCount++) {

        let nMap = allNumberMap[tCount];
        let row = nMap[0], column = nMap[1];
        let grid = [];

        for (let r = 0; r < row; r++){
            grid[r] = (new Array(column).fill('.'));
        }

        if (column === 1) {
            let r = 0;
            while (r + 1 < row) {
                grid[r][0] = '*';
                grid[r+1][0] = '*';
                r += 4;
            }
        } else {
            for (let r = 0; r < row; r++) {

                let offset = (r % 2 === 0) ? 0 : 2;
                let c = offset;

                while (c + 1 < column) {
                    grid[r][c] = '*';
                    grid[r][c+1] = '*';
                    c += 4;
                }
            }
        }
        for (let r = 0; r < row; r++) output.push(grid[r].join(''));
    }
    return output.join('\n')
}

console.log(settingDominos(t, allNumberMap));
// console.log(settingDominos(2,[[1,2],[3,3]]));