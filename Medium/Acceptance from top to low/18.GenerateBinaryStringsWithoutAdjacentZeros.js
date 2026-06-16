/**
 * @param {number} n
 * @return {string[]}
 */

// my approach was right only the implementation was wrong
// so TODO: try again

var validStrings = function(n) {
    return DFS(n);
};

function DFS(n) {
    let stack = ["0", "1"];
    let results = [];

    while (stack.length > 0) {
        const str = stack.pop();

        if (str.length === n) {
            results.push(str);
            continue;
        }

        if (str[str.length - 1] === "0") {
            stack.push(str + "1");
        } else {
            stack.push(str + "1");
            stack.push(str + "0");
        }
    }

    return results;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    const result = [];

    function dfs(str) {
        if (str.length === n) {
            result.push(str);
            return;
        }

        if (str[str.length - 1] === '0') {
            dfs(str + '1');
        } else {
            dfs(str + '0');
            dfs(str + '1');
        }
    }

    dfs('0');
    dfs('1');

    return result;
};