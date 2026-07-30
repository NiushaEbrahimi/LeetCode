/**
 * @param {number[][]} matrix
 * @return {number[]}
 */


// in the video it was suggesting that, remove first row the last elemnts of rows then last row


// approach is right, try again

var spiralOrder = function(matrix) {
    // const directions      right-1         down-1      left+1  up+1
    const directions = [matrix[0].length-1, matrix.length-1, 0 , 1 ];
    let current = [0,0];
    let result = [];
    let count = 0;
    while((directions[0]!==directions[3])||(directions[1]!==directions[2])||(current[0]!==directions[1])||(current[1]!==directions[0])){
        while(current[1]!==directions[0]){result.push(matrix[current[0]][current[1]]);current[1]++;console.log(result);}
        while(current[0]!==directions[1]){result.push(matrix[current[0]][current[1]]);current[0]++;console.log(result);}
        while(current[1]!==directions[2]){result.push(matrix[current[0]][current[1]]);current[1]--;console.log(result);}
        while(current[0]!==directions[3]){result.push(matrix[current[0]][current[1]]);current[0]--;console.log(result);}
        directions[0] -=1
        directions[1] -=1
        directions[2] +=1
        directions[3] +=1
    }
};
spiralOrder([[1,2,3],[4,5,6],[7,8,9]])

// best answer

var spiralOrder = function (matrix) {
    let result = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // 1. Left → Right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // 2. Top → Bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // 3. Right → Left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // 4. Bottom → Top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};