/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let array = s.split(" ")
    array = array.filter(value=>value.trim().length>0)
    console.log(array)
    return array.length
};
countSegments("Hello,  my name is John")