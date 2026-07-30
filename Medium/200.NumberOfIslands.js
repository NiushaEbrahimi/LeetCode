/**
 * @param {character[][]} grid
 * @return {number}
 */

// this worked but (17.89% runtime)

var numIslands = function(grid) {
    const visited = new Set();
    let i = 0;
    let j = 0;
    let total = 0;
    function BFS([i,j]){
        visited.add(`${i},${j}`)
        const queue = [[i,j]]
        while(queue.length !==0 ){
            const first = queue.shift();
            if(first[0]-1>=0 && grid[first[0]-1][first[1]]==="1" && !visited.has(`${first[0]-1},${first[1]}`)){ queue.push([first[0]-1,first[1]]); visited.add(`${first[0]-1},${first[1]}`)}
            if(first[0]+1<=grid.length-1 && grid[first[0]+1][first[1]]==="1" && !visited.has(`${first[0]+1},${first[1]}`)){ queue.push([first[0]+1,first[1]]); visited.add(`${first[0]+1},${first[1]}`)}
            if(first[1]-1>=0 && grid[first[0]][first[1]-1]==="1" && !visited.has(`${first[0]},${first[1]-1}`)){ queue.push([first[0],first[1]-1]); visited.add(`${first[0]},${first[1]-1}`)}
            if(first[1]+1<=grid[0].length-1 && grid[first[0]][first[1]+1]==="1" && !visited.has(`${first[0]},${first[1]+1}`)){ queue.push([first[0],first[1]+1]); visited.add(`${first[0]},${first[1]+1}`)}
            console.log(queue)
            console.log(visited)
        }

        total++
    }   
    while(i < grid.length){
        j = 0;
        while(j < grid[0].length){
            if(grid[i][j]==="1" && !visited.has(`${i},${j}`)) BFS([i,j])
            j++
        }
        i++
    }
    console.log(total)
    return total
};

numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","1"]
])

// best answer

var numIslands = function (grid) {
    let count = 0

    const isIsland = (x, y) => {
        if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[0].length - 1 || grid[x][y] == '-1' || grid[x][y] == '0') return
        grid[x][y] = '-1'
        isIsland(x + 1, y)
        isIsland(x - 1, y)
        isIsland(x, y + 1)
        isIsland(x, y - 1)
    }


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let c = grid[i][j]
            if (c == '0' || c == '-1') continue
        
            isIsland(i,j)
            count += 1
        }
    }
    return count
};
