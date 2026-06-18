/* 
this is the problem that im solving:
https://quera.org/problemset/316820 
*/

/**
 * 
 * @param {number} n 
 * @param {Array} weights 
 * @param {string} target 
 */

function Dava(n,weights,target){
    let array = weights.sort((a,b)=>a-b)
    let rominaSum = 0;
    let aliSum = 0;
    let romina = []
    let ali = [];

    romina.push(array.pop())
    rominaSum += romina[romina.length-1]
    let turn = 1;
    while(array.length > 0){
        console.log(`romina sum :${rominaSum}`)
        console.log(`ali sum :${aliSum}`)
        if(turn===1){
            ali.push(array.pop())
            aliSum += (ali[ali.length-1])
            if(array.length>0){
                ali.push(array.pop())
                aliSum += (ali[ali.length-1])
            }
        }
        if(turn===-1){
            romina.push(array.pop())
            rominaSum += (romina[romina.length-1])
            if(array.length>0){
                romina.push(array.pop())
                rominaSum += (romina[romina.length-1])
            }
        }
        turn*=-1
    }
    if(target==="romina"){
        if(rominaSum > aliSum) return 0
        let people = [];
        while(rominaSum <= aliSum){
            const shifted = ali.shift()
            people.push(shifted)
            aliSum-=shifted
        }
        return people
    }
    if(target==="ali"){
        if(rominaSum < aliSum) return 0
        let people = [];
        while(rominaSum >= aliSum){
            const shifted = romina.shift()  
            people.push(shifted)
            rominaSum-=shifted
        }
        return people
    }
}

console.log(Dava(5,[1,4,6,9,2],"romina"))
console.log(Dava(4,[1,4,6,9],"romina"))
