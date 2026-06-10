/**
 * Your friend is typing his name into a keyboard. Sometimes, 
 * when typing a character c, the key might get long pressed, 
 * and the character will be typed 1 or more times.
 * You examine the typed characters of the keyboard. Return 
 * True if it is possible that it was your friends name, with 
 * some characters (possibly none) being long pressed.
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
*/


// my solution (definatly needs improvments)
var isLongPressedName = function(name, typed) {
    let namePointer = 0;
    let typedPointer = 0;
    while(namePointer < name.length){
        if(name[namePointer]!==typed[typedPointer]){
            console.log(`${namePointer} ${typedPointer}`)
            return false
        }
        while(
            typedPointer < typed.length &&
            name[namePointer]===typed[typedPointer]
        ){
            console.log("hello")
            typedPointer++
            if(name[namePointer]===name[namePointer+1]){
                break
            }
        }
        namePointer++
    }
    if(namePointer===name.length && name[namePointer]!==typed[typedPointer]){
        return false
    }
    return true
};
// best solution 
var isLongPressedName = function (name, typed) {
    if (name.length > typed.length) return false
    let l = 0;
    let j = 0;
    while (j < typed.length) {
        if (l < name.length && name[l] == typed[j]) {
            l++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {
            j++;
        } else {
            return false
        }
    } return l === name.length
};
console.log(isLongPressedName("alex","aaleexa"))