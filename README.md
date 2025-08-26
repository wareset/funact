# barely-react

Библиотека с хуками как в `react 19`.

## Disclaimer

В данный момент эта библиотека не более чем эксперимент. В ней реализована работа всех хуков как в `react 19` (за исключением хука `useFormStatus` из `react-dom`), а так же некоторые функции.

### Важно

Классовые компоненты, а так же всё что относится к `legacy` (`forwardRef`, `cloneElement` и т.д), отсутствуют полностью.

Так же нет (возможно пока) `lazy`, `Suspense` и другого функционала, предназначенного для работы с серверным взаимодействием.

Свойство `key`, необходимое для оптимизации рендера списков, в данный момент не работает, но может быть использовано для полного перерендера компонента.

Синтетические события (как и дополнительные атрибуты в реакте) пока не реализованы, вместо них используются только нативные, как в библиотеке `preact`.

Функции `memo` нет и не будет. Вместо этого, при обновлении, используется более глубокий и точный алгоритм сравнения. В итоге получатся так, как будто каждый компонент уже обёрнут в `memo` по умолчанию.

### Примечание

Этой библиотеки нет в `npm` и поэтому в `package.json` придётся написать что-то такое:

package.json

```json
{
  "dependencies": {
    "barely-react": "git+https://github.com/wareset/barely-react.git"
  }
}
```

## Хуки

### useState

Работает так же как в реакте

```ts
function useState<S>(
  initialState: S | (() => S)
): [S, (value: S | ((prevState: S) => S)) => void]

function useState<S = undefined>(): [
  S | undefined,
  (value: S | ((prevState: S | undefined) => S)) => void,
]
```

<details>
 <summary>Пример</summary>

```tsx
import { render, useState } from 'barely-react'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    // Новое значение
    setCount(count + 1)
  }

  function decrement() {
    // или функция, возвращающая новое значение
    setCount((count) => count - 1)
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
    </>
  )
}

render(document.body, <App />)
```

</details>

### useReducer

Работает так же как в реакте

```ts
function useReducer<S, A extends [] | [any]>(
  reducer: (prevState: S, ...args: A) => S,
  initialState: S
): [S, (...args: A) => void]
function useReducer<S, I, A extends [] | [any]>(
  reducer: (prevState: S, ...args: A) => S,
  initialArg: I,
  init: (i: I) => S
): [S, (...args: A) => void]
```

<details>
 <summary>Пример</summary>

```tsx
import { render, useReducer } from 'barely-react'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    case 'DECREMENT': {
      return state - 1
    }
  }
  throw Error('Unknown action: ' + action.type)
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)

  function increment() {
    dispatch({ type: 'INCREMENT' })
  }

  function decrement() {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
    </>
  )
}

render(document.body, <App />)
```

</details>

### useEffect, useLayoutEffect, useInsertionEffect

Хуки `useEffect` и `useLayoutEffect` работают так же как в реакте, а по поводу `useInsertionEffect` не уверен.

```ts
function useEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void

function useLayoutEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void

function useInsertionEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void
```

<details>
 <summary>Пример</summary>

```tsx
import {
  render,
  useReducer,
  useEffect,
  useLayoutEffect,
  useInsertionEffect,
} from 'barely-react'

function App() {
  const [count, increment] = useReducer((v) => v + 1, 0)

  useInsertionEffect(() => {
    console.log('start useInsertionEffect')
    return () => {
      console.log('end useInsertionEffect')
    }
  }, [count])

  useLayoutEffect(() => {
    console.log('start useLayoutEffect')
    return () => {
      console.log('end useLayoutEffect')
    }
  }, [count])

  useEffect(() => {
    console.log('start useEffect')
    return () => {
      console.log('end useEffect')
    }
  }, [count])

  return <button onClick={increment}>Count: {count}</button>
}

render(document.body, <App />)
```

</details>

### useRef

Работает так же как в реакте

```ts
interface Ref<T> {
  current: T
}

function useRef<T>(initialValue: T): Ref<T>
function useRef<T>(initialValue: T | null): Ref<T | null>
function useRef<T>(initialValue: T | undefined): Ref<T | undefined>
```

В `html/svg` элементы (как и в любые другие компоненты) в аттрибут `ref` можно передавать как объект `Ref`, так и функцию.

<details>
 <summary>Пример</summary>

```tsx
import { render, useEffect, useRef } from 'barely-react'

function App() {
  const ref = useRef(null)

  useEffect(() => {
    console.log(ref.current)
  }, [])

  return <div ref={ref}>DIV</div>
}

render(document.body, <App />)
```

</details>

### useId

Каждый хук создаёт свой идентификатор

```ts
function useId(): string
```

<details>
 <summary>Пример</summary>

```tsx
import { render, useId } from 'barely-react'

function App() {
  const id = useId()

  return (
    <form>
      <label htmlFor={id + '-firstName'}>First Name:</label>
      <input id={id + '-firstName'} type="text" />
      <hr />
      <label htmlFor={id + '-lastName'}>Last Name:</label>
      <input id={id + '-lastName'} type="text" />
    </form>
  )
}

render(document.body, <App />)
```

</details>
