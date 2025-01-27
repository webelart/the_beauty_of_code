# JavaScript

## 2618. Check if Object Instance of Class

- [Link to the task](https://leetcode.com/problems/check-if-object-instance-of-class/description/)

### Decision

```js
var checkIfInstanceOf = function(obj, classFunction) {
    while (obj !== null) {
        if (obj.constructor === classFunction) {
            return true;
        }

        obj = Object.getPrototypeOf(obj);
    }

    return false;
};
```

## 2619. Array Prototype Last

- [Link to the task](https://leetcode.com/problems/array-prototype-last/)

### Decision

```js
Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};
```
