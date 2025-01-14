# BigFrontend.Dev — React

## 1. The React Counter app

- [Link to the task](https://bigfrontend.dev/react/The-React-Counter)

### Decision
```js
import React, {useState} from 'react'

export function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button data-testid="decrement-button" onClick={() => setCounter(counter - 1)}>-</button>
      <button data-testid="increment-button" onClick={() => setCounter(counter + 1)}>+</button>
      <p>clicked: {counter}</p>
    </div>
  )
}
```

## 2. useTimeout()

- [Link to the task](https://bigfrontend.dev/react/usetimeout)

### Decision
```js
import { useRef, useEffect } from 'react';

export function useTimeout(callback: () => void, delay: number) {
  const timer = useRef(-1);
  const cbRef = useRef(callback);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => cbRef.current(), delay);

    return () => clearTimeout(timer.current);
  }, [delay]);

  useEffect(() => {
    cbRef.current = callback;
  }, [callback])
}
```

## 3. useIsFirstRender()

- [Link to the task](https://bigfrontend.dev/react/useIsFirstRender)

### Decision
```js
export function useIsFirstRender(): boolean {
  const isFirstRender = useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }

  return false;
}
```

## 4. useSWR() I

- [Link to the task](https://bigfrontend.dev/react/useSWR-1)

### Decision
```js
import { useState, useEffect } from 'react';
export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T
  error?: E
} {
  const fetcherP = fetcher();
  const [data, setData] = useState<T | undefined>(() => {
    if (fetcherP instanceof Promise) {
      return undefined;
    } else {
      return fetcherP
    }
  });
  const [error, setError] = useState<E | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (fetcherP instanceof Promise) {
          const result = await fetcherP;
          setData(result as T);
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [fetcher]);

  return {
    data,
    error,
  }
}
```

## 5. usePrevious()

- [Link to the task](https://bigfrontend.dev/react/usePrevious)

### Decision
```js
import { useRef, useEffect } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const prevValueRef = useRef<T | undefined>(undefined);

  useEffect(() => {
    prevValueRef.current = value;
  }, [ value ]);

  return prevValueRef.current;
}
```

## 6. useHover()

- [Link to the task](https://bigfrontend.dev/react/useHover)

### Decision
```js
import { Ref, useRef, useEffect, useState } from 'react';

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const refElement = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(false);

    const element = refElement.current;
    if (element == null) return;

    const setHover = () => setIsHovered(true);
    const deleteHover = () => setIsHovered(false);
    
    element.addEventListener('mouseenter', setHover);
    element.addEventListener('mouseleave', deleteHover);

    return () => {
      element.removeEventListener('mouseenter', setHover);
      element.removeEventListener('mouseleave', deleteHover);
    }
  });

  return [refElement, isHovered];
}
```

## 7. useToggle()

- [Link to the task](https://bigfrontend.dev/react/useToggle)

### Decision
```js
import { useState } from 'react';
export function useToggle(on: boolean): [boolean, () => void] {
  const [switcher, setSwitcher] = useState(on);

  const callback = () => {
    setSwitcher(!switcher);
  };

  return [switcher, callback];
}
```

## 8. useDebounce()

- [Link to the task](https://bigfrontend.dev/react/useDebounce)

### Decision
```js
import { useEffect, useRef, useState } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timer = useRef(-1);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
  }, [ value ]);

  return debouncedValue;
}
```

## 9. useEffectOnce()

- [Link to the task](https://bigfrontend.dev/react/useEffectOnce)

### Decision
```js
import { EffectCallback, useRef, useEffect } from 'react'

export function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, []);
}
```