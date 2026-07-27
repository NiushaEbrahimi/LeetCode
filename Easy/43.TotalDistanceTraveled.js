/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */

// my approach

var distanceTraveled = function(mainTank, additionalTank) {
    let total = 0 ;
    while(mainTank >= 5 && additionalTank > 0){
        total +=5
        mainTank-=4
        additionalTank--
    }
    total+=mainTank
    return total*10
};

// best approach

var distanceTraveled = function(mainTank, additionalTank) {
    let totalKms = 0;
    while(mainTank != 0) {
        if(mainTank < 5) {
            totalKms += (mainTank * 10);
            break;
        } else {
            mainTank -= 5;
            totalKms += 50;
            if(additionalTank > 0) {
                mainTank += 1;
                additionalTank--;
            }
        }
    }
    return totalKms;
};