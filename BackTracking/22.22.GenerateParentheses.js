/**
 * @param {number} n
 * @return {string[]}
 */

// TODO: try again , i didn't know the answer
// the thing is that this is a backtracking but it's not undoing anything

var generateParenthesis = function(n) {
    const result = [];

    function dfs(current, open, close) {
        // Base case
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Try adding "("
        if (open < n) {
            dfs(current + "(", open + 1, close);
        }

        // Try adding ")"
        if (close < open) {
            dfs(current + ")", open, close + 1);
        }
    }

    dfs("", 0, 0);

    return result;
};