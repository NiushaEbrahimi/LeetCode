/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

// my solution

var groupThePeople = function(groupSizes) {
    let map = new Map();
    for(let i = 0; i < groupSizes.length ; i++){
        if(!map.has(groupSizes[i])) map.set(groupSizes[i],[])
        map.set(groupSizes[i],[...map.get(groupSizes[i]),i])
        
    }
    groupSizes = []
    map.forEach((value,key)=>{
        let index = 0;
        while(index < value.length){
            groupSizes.push(value.slice(index,index+key))
            index+=key
        }
    })
    return groupSizes
};
console.log(groupThePeople([3,3,3,3,3,1,3]))
console.log(groupThePeople([2,1,3,3,3,2]))

// best solution
var groupThePeople = function(groupSizes) {
    let map = new Map();
    for(let i = 0; i < groupSizes.length ; i++){
        if(!map.has(groupSizes[i])) map.set(groupSizes[i],[])
        map.set(groupSizes[i],[...map.get(groupSizes[i]),i])
        
    }
    groupSizes = []
    map.forEach((value,key)=>{
        let index = 0;
        while(index < value.length){
            groupSizes.push(value.slice(index,index+key))
            index+=key
        }
    })
    return groupSizes
};