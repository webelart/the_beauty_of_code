/*
    Link to the task: https://leetcode.com/problems/binary-tree-right-side-view/description/
    Time Complexity: O(N)
*/

var rightSideView = function(root) {
    if (!root) {
        return [];
    }

    const stack = [{ node: root, level: 0}];
    const result = [];

    while(stack.length) {
        const el = stack.shift();

        result[el.level] = el.node.val

        if (el.node.left) {
            stack.push({ node: el.node.left, level: el.level + 1});
        }

        if (el.node.right) {
            stack.push({ node: el.node.right, level: el.level + 1});
        }
    }

    return result;
};