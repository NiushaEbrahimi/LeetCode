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

// TODO: try again
var mergeNodes = function(head) {
    let current = head;
    let output = [];
    while(current){
        let sum = 0;
        while(current.next.val !== 0){
            sum+=current.val
            current = current.next
        }
        sum+=current.val
        output.push(Listnode(sum))
        current = current.next
    }
    return output[0]
}; 