# Leetcode

## 94. Binary Tree Inorder Traversal (easy)

- [Link to the task](https://leetcode.com/problems/binary-tree-inorder-traversal/)

### Decision

```js
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    const curr = root;
    const result = [];

    inOrder(curr, (value) => {
        result.push(value)
    });

    return result;
};

function inOrder(node, callback) {
    if (node.left) {
        inOrder(node.left, callback);
    }

    callback(node.val);

    if (node.right) {
        inOrder(node.right, callback);
    }
}
```

## 167. Two Sum II - Input Array Is Sorted (medium)

- [Link to the task](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

### Decision

```js
var twoSum = function(numbers, target) {
    /**
        # 1. loop an array of numbers.
        # 2. detect target.
        # 3. using binary search look for second pair of target
    **/

    for (let i = 0; i < numbers.length; i++) {
        const foundIndex = binarySearchId(numbers, i, numbers.length, target - numbers[i]);
        if (foundIndex  > -1) {
            return [i + 1, foundIndex + 1];
        }
    }

    return [-1, -1];
};

function binarySearchId(numbers, from, to, target) {
    let start = from;
    let end = to;

    while (end - start > 1) {
        const middle = Math.floor((start + end) / 2);

        if (numbers[middle] === target) {
            return middle;
        }

        if (numbers[middle] < target) {
            start = middle;
        } else {
            end = middle;
        }
    }

    return -1;
}
```

## 169. Majority Element (easy)

- [Link to the task](https://leetcode.com/problems/majority-element/description/)

### Decision
```js
var majorityElement = function(nums) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]] || 0) + 1;
    }

    let maxKeyByValue = -Infinity;
    let maxValue = -Infinity;

    for (let key in hash) {
        if (hash[key] > maxValue) {
            maxValue = hash[key];
            maxKeyByValue = key;
        }
    }

    return Number(maxKeyByValue);
};
```

## 199. Binary Tree Right Side View (medium)

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

## 238. Product of Array Except Self (meduim)

- [Link to the task](https://leetcode.com/problems/product-of-array-except-self/description/)
   
### Decision
```js
var productExceptSelf = function(nums) {
    const leftProduct = new Array(nums.length);
    const rightProduct = new Array(nums.length);
    leftProduct[0] = nums[0];
    rightProduct[nums.length - 1] = nums[nums.length - 1];
    /* left [] right */

    for (let i = 1; i < nums.length; i++) {
        leftProduct[i] = leftProduct[i - 1] * nums[i];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        rightProduct[i] = rightProduct[i + 1] * nums[i];
    }
    
    const result = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            result[i] = rightProduct[i + 1];
        } else if (i === nums.length - 1) {
            result[i] = leftProduct[i - 1];
        } else {
            result[i] = leftProduct[i - 1] * rightProduct[i + 1];
        }
    }

    return result;
};
```

## 297. Serialize and Deserialize Binary Tree

- [Link to the task](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/)
- [English Explanation (YouTube)](https://youtu.be/PYJK-MhGsvU)
- [Russian Explanation (YouTube)](https://youtu.be/KUTmxI1SMxA)

```
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function(root) {
    if (!root) {
        return [];
    }

    const queue = [root];
    const result = [root.val];

    while(queue.length) {
        const currentNode = queue.shift();

        if (currentNode.left) {
            queue.push(currentNode.left);
            result.push(currentNode.left.val);
        } else {
            result.push(null);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
            result.push(currentNode.right.val);
        } else {
            result.push(null);
        }
    }

    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length === 0) {
        return null;
    }

    const tree = new TreeNode(data[0]);
    const stack = [tree];
    
    for (let i = 1; i < data.length; i++) {
        const currentNode = queue.pop();

        if (!currentNode?.left) {
            if (data[i] !== null) {
                currentNode.left = new TreeNode(data[i]);
                queue.unshift(currentNode.left);
            }

            i++;

            if (i >= data.length) {
                break;
            }
        }

        if (!currentNode?.right) {
            if (data[i] !== null) {
                currentNode.right = new TreeNode(data[i]);
                queue.unshift(currentNode.right);
            }
        }
    }

    return tree;
};
```

## 695. Max Area of Island

- [Link to the task](https://leetcode.com/problems/max-area-of-island/)

```js
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    const curr = root;
    const result = [];

    inOrder(curr, (value) => {
        result.push(value)
    });

    return result;
};

function inOrder(node, callback) {
    if (node.left) {
        inOrder(node.left, callback);
    }

    callback(node.val);

    if (node.right) {
        inOrder(node.right, callback);
    }
}
```

## 953. Verifying an Alien Dictionary (easy)

- [Link to the task](https://leetcode.com/problems/verifying-an-alien-dictionary/description/)
   
### Decision
```js
var isAlienSorted = function(words, order) {
    const orderRank = {};

    for (let i = 0; i < order.length; i++) {
        orderRank[order[i]] = i + 1;
    }

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words[i + 1].length) {
                return false;
            }

            const currentChar = words[i][j];
            const nextChar = words[i + 1][j];
            
            if (orderRank[currentChar] === orderRank[nextChar]) {
                continue;
            }
            
            if (orderRank[currentChar] > orderRank[nextChar]) {
                return false;
            }

            break;
        }
    }

    return true;
};
```

## 1249. Minimum Remove to Make Valid Parentheses (medium)

- [Link to the task](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/)
   
### Decision
```js
var minRemoveToMakeValid = function(s) {
    const stack = [];
    let result = '';
 
    for (let i = 0; i < s.length; i++) {
        const lastStack = stack[stack.length - 1];
        if (s[i] === '(') {
            stack.push({ i, char: s[i] });
            continue;
        }

        if (s[i] === ')') {
            if (lastStack && lastStack.char === '(') {
                stack.pop();
            } else {
               stack.push({ i, char: s[i] });
            }
            continue;
        }
    }

    const wrongBracesHash = stack.reduce((acc, item) => {
        acc[item.i] = true;
        return acc;
    }, {})

    for (let i = 0; i < s.length; i++) {
        if (wrongBracesHash[i]) {
            continue;
        }

        result += s[i];
    }

    return result;
};
```
