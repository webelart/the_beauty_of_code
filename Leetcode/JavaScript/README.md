# JavaScript

## 2619. Array Prototype Last

- [Link to the task](https://leetcode.com/problems/array-prototype-last/)

### Decision

```js
Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};
```