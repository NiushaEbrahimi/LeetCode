/**
 * @param {number[][]} points
 * @return {number}
 */

// great flawless =)

var minTimeToVisitAllPoints = function(points) {
    let i = 1;    
    let timer = 0;
    while(i < points.length){
        let deltax = Math.abs(points[i][0] - points[i-1][0])
        let deltay = Math.abs(points[i][1] - points[i-1][1])
        timer += (Math.abs(deltax-deltay) + Math.min(deltax,deltay))
        i++
    }
    return timer
};
