/**
 * You are given an integer money denoting the amount of
 * money (in dollars) that you have and another integer 
 * children denoting the number of children that you must 
 * distribute the money to.
 * You have to distribute the money according to the following rules:
 * All money must be distributed.
 * Everyone must receive at least 1 dollar.
 * Nobody receives 4 dollars
 * Return the maximum number of children who may receive exactly
 * 8 dollars if you distribute the money according to the aforementioned
 * rules. If there is no way to distribute the money, return -1.
 * @param {number} money
 * @param {number} children
 * @return {number}
 */

// i couldn't figure this out becasue i thought that i have
// to give them 8s (with greedy) untill i couldn't
// but that's wrong, we should start giving 1s to every child 

// ai solution:
var distMoney = function(money, children) {
    if (money < children) return -1;

    money -= children;

    let count = Math.min(Math.floor(money / 7), children);

    let remaining = money - count * 7;

    if ((count === children && remaining > 0)||(count === children - 1 && remaining === 3)) {
        count--;
    }

    return count;
};

distMoney(30,3)