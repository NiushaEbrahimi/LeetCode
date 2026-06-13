/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// my solution
var insertGreatestCommonDivisors = function(head) {
    let current = head
    let next = current.next
    while(current.next !== null){

        current.next = new ListNode(gcd(current.val,next.val),next)
        current = next
        next = next.next
    }
    return head
};

function gcd(a,b){
    a < b ? [a,b] = [b,a] : [a,b] = [a,b]
    while(b!==0){
        [a,b] = [b,a%b]
    }
    return a
}

// best solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let cur = head;

    function gcd(num1, num2){
        
        while(num2 !== 0){
            let temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }

        return num1;
    }

    while(cur && cur.next){
        let next = cur.next;
        cur.next = new ListNode(gcd(cur.val, next.val));
        cur.next.next = next;
        cur = next;
    }

    return head;
};