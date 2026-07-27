/**
 * @param {number[][]} events
 * @return {number}
 */

// my approach (beats 100% runtime)

var buttonWithLongestTime = function(events) {
    let i = 1;
    let max = events[0][1];
    let returnIndex = events[0][0];
    while( i < events.length ){
        if((events[i][1] - events[i-1][1]) > max){
            max = events[i][1] - events[i-1][1]
            returnIndex = events[i][0];
        }
        if(((events[i][1] - events[i-1][1]) === max) && (events[i][0] < returnIndex)) returnIndex = events[i][0]
        i++
    }
    return returnIndex
};

// this is the best approach for Memory

const buttonWithLongestTime = ev =>
ev.reduce((max, event, i) => {
    const time = event[1] - ev[i - 1][1];
    if (time > max[1] || (time === max[1] && event[0] < max[0])) return [event[0], time];
    return max;
})[0];