/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

// this was hard for me TODO: try again

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];
    const path = [];

    function dfs(node) {
        if (node === null) return;

        // Choose
        path.push(node.val);

        // Leaf
        if (node.left === null && node.right === null) {
            result.push(path.join("->"));
        } else {
            // Explore
            dfs(node.left);
            dfs(node.right);
        }

        // Undo
        path.pop();
    }

    dfs(root);

    return result;
};
binaryTreePaths([1,2,3,null,5])