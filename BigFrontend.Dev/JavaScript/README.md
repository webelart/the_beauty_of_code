# BigFrontend.Dev — JavaScript

## 1. Implement curry()

- [Link to the task](https://bigfrontend.dev/problem/implement-curry)

### Decision
```js
function curry(fn) {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...newArgs) => curried(...args.concat(newArgs));
  }

  return curried;
}
```

## 4. Implement basic throttle()

- [Link to the task](https://bigfrontend.dev/problem/implement-basic-throttle)

### Decision
```js
function throttle(func, wait) {
  let isWaiting = false;
  let savedArgs = null;
  let savedThis = null;

  return function (...args) {
    if (isWaiting) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args);
    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
      if (savedThis) {
        func.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, wait);
  }
}
```

## 5. implement throttle() with leading & trailing option

- [Link to the task](https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option)

### Decision (some tests doesn't pass)
```js
function throttle(func, wait, option = {leading: true, trailing: true}) {
  let isWaiting = false;
  let savedArgs = null;
  let savedThis = null;
  let isLeadingInvoked = false;

  return function (...args) {
    if (isWaiting) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    if (option.leading && !isWaiting) {
      func.apply(this, args);
      isWaiting = true;
      isLeadingInvoked = true;
    } else {
      isLeadingInvoked = false;
    }

    setTimeout(() => {
      isWaiting = false;
      if (option.trailing && !isLeadingInvoked) {
        func.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, wait);
  }
}
```


## 6. Implement basic debounce()

- [Link to the task](https://bigfrontend.dev/problem/implement-basic-debounce)

### Decision
```js
function debounce(func, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }
}
```

## 7. Implement debounce() with leading & trailing option

- [Link to the task](https://bigfrontend.dev/react/useSWR-1)

### Decision
```js
function debounce(func, wait, option = {leading: false, trailing: true}) {
  let timer = undefined;
  let isLeadingInvoked = false;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    if (option.leading && !timer) {
      func.apply(this, args);
      isLeadingInvoked = true;
    } else isLeadingInvoked = false;

    timer = setTimeout(() => {
      if (option.trailing && !isLeadingInvoked) 
          func.apply(this, args);
      
      timer = null;
    }, wait);
  }
}
```