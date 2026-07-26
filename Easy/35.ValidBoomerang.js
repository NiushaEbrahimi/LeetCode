/**
 * @param {number[][]} points
 * @return {boolean}
 */

// TODO: this approach was wrong because of this test case([[0,1],[0,1],[2,1]])
var isBoomerang = function(points) {
    let scope1;
    if((points[1][0] - points[0][0]) !== 0){
        scope1 =(points[1][1] - points[0][1]) / (points[1][0] - points[0][0])
    }
    let scope2;
    if((points[2][0] - points[0][0])!==0){
        scope2 = (points[2][1] - points[0][1]) / (points[2][0] - points[0][0])
    }
    console.log(`scope 1 : ${scope1}  scopr2 : ${scope2}`)
    if((points[2][0] - points[0][0])===0 && (points[1][0] - points[0][0]) === 0) return false
    if(scope1===scope2) return false
    return true
};
console.log(isBoomerang([[1,1],[2,3],[3,2]]))
console.log(isBoomerang([[1,1],[2,2],[3,3]]))

// the best approach

var isBoomerang = function(points) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    const [x3, y3] = points[2];

    return (x2 - x1) * (y3 - y1) !== (y2 - y1) * (x3 - x1);    
};