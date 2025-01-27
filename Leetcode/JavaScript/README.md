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

## 2620. Counter

- [Link to the task](https://leetcode.com/problems/counter/description/)

### Decision

```js
var createCounter = function(n) {
    return function() {
        return n++;
    };
};
```

## 2621. Sleep

- [Link to the task](https://leetcode.com/problems/sleep/)

### Decision
```js
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis)
    });
}
```

## 2676. Throttle
- [Link to the task](https://leetcode.com/problems/throttle/)

```js
function throttle(fn, t) {
  let lastArgs = null;
  let isWaiting = false;

  function caller() {
    if (!isWaiting && lastArgs) {
      fn(...lastArgs);
      lastArgs = null;
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
        execute();
      }, t);
    }
  }

  return function(...args) {
    lastArgs = args;
    caller();
  };
}
```
