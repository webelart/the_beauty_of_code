# Leetcode

## 199. Binary Tree Right Side View

- [Link to the task](https://leetcode.com/problems/binary-tree-right-side-view/description/)
- [English Explanation (YouTube)](https://youtu.be/PYJK-MhGsvU)
- [Russian Explanation (YouTube)](https://youtu.be/PYJK-MhGsvU)

### Decision
```js
var rightSideView = function(root) {
    if (!root) {
        return [];
    }

    const queue = [{ node: root, level: 0}];
    const result = [];

    while(queue.length) {
        const el = queue.shift();

        result[el.level] = el.node.val

        if (el.node.left) {
            queue.push({ node: el.node.left, level: el.level + 1});
        }

        if (el.node.right) {
            queue.push({ node: el.node.right, level: el.level + 1});
        }
    }

    return result;
};
```
