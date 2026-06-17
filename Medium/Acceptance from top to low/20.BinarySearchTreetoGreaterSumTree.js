/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// TODO: try again (approach is right implementation is wrong)

var bstToGst = function(root) {
    let memo = new Set();
    let value = 0
    let result = []
    function dfs(node){
        if(node.left===undefined && node.right===undefined && memo.has(node)){
            value += node.val
            result.push(result)
            return
        }
        if(!memo.has(node.right)){
            memo.add(node.right)
            dfs(node.right)
        }
        if(!memo.has(node.left)){
            memo.add(node.left)
            dfs(node.left)
        }
    }
    dfs(root)
    return result
};
console.log(bstToGst([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]))


// best solution ( my approach implemented )

var bstToGst = function(root) {
    let sum = 0;

    function dfs(node) {
        if (!node) return;

        dfs(node.right);

        sum += node.val;
        node.val = sum;

        dfs(node.left);
    }

    dfs(root);
    return root;
};