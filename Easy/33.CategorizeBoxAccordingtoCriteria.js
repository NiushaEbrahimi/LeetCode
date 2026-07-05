/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    let bulky = false;
    let heavy = false;
    if((length >= 10000)||(width >= 10000)||(height >= 10000)||((length * width * height)>=1000000000)) bulky=true;
    if(mass >= 100) heavy = true;
    if(bulky&&heavy) return "Both";
    if(bulky) return "Bulky"
    if(heavy) return "Heavy"
    return "Neither"
};