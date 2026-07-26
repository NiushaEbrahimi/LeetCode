/**
 * @param {string} word
 * @return {number}
 */

// this was my approach which is a normall and good approach but it has problems withlarge numbers
// TODO: 

var numDifferentIntegers = function(word) {
    let i = 0;
    let number = null;
    const newMap = new Map();
    while(i < word.length){
        if (word[i] < 58){
            number=BigInt(number*10)+Number(word[i])
        }
        else{
            console.log(word[i])
            if(number!==null){
                if(newMap.has(number)){
                    newMap.set(number,newMap.get(number)+1)
                }else{
                    newMap.set(number,1)
                }
            } 
            number = null;
        }
        i++
    }
    if(number!==null){
        if(newMap.has(number)){
            newMap.set(number,newMap.get(number)+1)
        }else{
            newMap.set(number,1)
        }
    } 
    console.log(newMap)
    return newMap.size
};

// great - pass
// numDifferentIntegers("llet1234code34")
// numDifferentIntegers("a123bc34d8ef34")
// numDifferentIntegers("a1b01c001")
// failed
// numDifferentIntegers("23937068802361104070596246969678287627526519827301152216
// 904378215082294194107715415323940065974637155137417258524325590572244788151165
// 573802603904322112275796635710468458422817042817495711100769742649719898936071
// 3714045625434695563345544605782373875732314985685815452910530119738817724258365
// 8641529908583934918768953462557716z9743802042995294464628808417333470104757418
// 893620132484514911017671613026704167443823760803873443151943982819134423860956
// 753039918931684635976625650737124053062069710286423879235028997845050916269706
// 894860472264673917459053033651047506152109450385059845353670698269521249390296
// 8251702853203929616930291257062173c79487281900662343830648295410")

// claude's approach:
var numDifferentIntegers = function(word) {
    const nums = word.split(/[^0-9]+/).filter(s => s.length > 0);
    const distinct = new Set();
    for (const s of nums) {
        // strip leading zeros, but keep at least one digit
        const trimmed = s.replace(/^0+(?=\d)/, '');
        distinct.add(trimmed);
    }
    return distinct.size;
};

// best in leet code

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let arr = word.match(/\d+/g)
    let set = new Set(arr)
    let output = new Set()
    for(let num of set){
        output.add(BigInt(num))
    }
    return output.size
};