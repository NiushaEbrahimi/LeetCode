function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

// TODO: try again (couldn't solve it)


/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    const stack = [];
    let i = 0;

    while (i < traversal.length) {

        // Count depth
        let depth = 0;
        while (traversal[i] === '-') {
            depth++;
            i++;
        }

        // Read value
        let value = 0;
        while (i < traversal.length && traversal[i] !== '-') {
            value = value * 10 + Number(traversal[i]);
            i++;
        }

        const node = new TreeNode(value);
        console.log(`depth : ${depth} value : ${value}`)
        // Go back to the correct parent
        // IMP
        while (stack.length > depth) {
            console.log(stack)
            stack.pop();
        }

        // Attach to parent if it exists
        // IMP
        if (stack.length > 0) {
            const parent = stack[stack.length - 1];

            if (parent.left === null) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }

        stack.push(node);
    }

    return stack[0];
};
console.log(recoverFromPreorder("1-2--3--4-5--6--7"))