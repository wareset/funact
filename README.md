# barely-react

Библиотека с хуками как в `react 19`.

В данный момент это не более чем эксперимент. В библиотеке реализована работа всех хуков как в `react 19` (за исключением хука `useFormStatus` из `react-dom`) и некоторых функций.

#### Что есть сейчас:

- Components
  - Fragment
  - Portal (используется вместо `createPortal` из `react-dom`)
- Hooks
  - useActionState
  - useCallback
  - useContext
  - useDebugValue (просто выводит что-то в консоль)
  - useDeferredValue
  - useEffect
  - useId
  - useImperativeHandle
  - useInsertionEffect
  - useLayoutEffect
  - useMemo
  - useOptimistic
  - useReducer
  - useRef
  - useState
  - useSyncExternalStore
  - useTransition
- APIs
  - createElement
  - render (используется вместо `createRoot` из `react-dom`)
  - cache
  - createContext (без `Consumer`)
  - memo
  - use (поддерживает только `contexts`)
- Additional

  - classnames (приводит классы к строке)
  - stylesheet (приводит стили к строке)

Классовые компоненты, а так же всё что относится к `legacy` (`forwardRef`, `cloneElement` и т.д), отсутствуют.

Так же нет (возможно пока) `lazy`, `Suspense` и другого функционала, предназначенного для работы с серверным взаимодействием.

Свойство `key`, необходимое для оптимизации рендера списков, в данный момент так не работает, но может быть использовано для полного перерендера компонента.

Синтетические события (как и дополнительные атрибуты в реакте) пока не реализованы, вместо них используются только нативные, как в библиотеке `preact`.

### Установка

Этой библиотеки нет в `npm` и поэтому в `package.json` придётся написать что-то такое:

package.json

```json
{
  "dependencies": {
    "barely-react": "github:wareset/barely-react"
  }
}
```

## Хуки

### useState

Работает как в реакте

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

Работает как в реакте

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

Хуки `useEffect` и `useLayoutEffect` работают как в реакте, а по поводу `useInsertionEffect` не уверен.

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

Работает как в реакте

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
      <input id={id + '-firstName'} type='text' />
      <hr />
      <label htmlFor={id + '-lastName'}>Last Name:</label>
      <input id={id + '-lastName'} type='text' />
    </form>
  )
}

render(document.body, <App />)
```

</details>

### useCallback

Работает как в реакте

```ts
function useCallback<T extends Function>(cb: T, deps: readonly unknown[]): T
```

<details>
 <summary>Пример</summary>

```tsx
import { render, useState, useCallback } from 'barely-react'

function App() {
  const [count, setCount] = useState(0)

  // Всё это так написано только для примера

  const increment = useCallback(
    function increment() {
      // Новое значение
      setCount(count + 1)
    },
    [count]
  )

  const decrement = useCallback(function decrement() {
    // или функция, возвращающая новое значение
    setCount((count) => count - 1)
  }, [])

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

### useMemo

Работает как в реакте

```ts
function useMemo<T>(factory: () => T, deps: readonly unknown[]): T
```

<details>
 <summary>Пример</summary>

```tsx
import { render } from 'barely-react'

function App() {
  // TODO
}

render(document.body, <App />)
```

</details>

### useContext

Работает как в реакте

```ts
interface IContext<T> {
  (props: { value: T; children?: any }): any
  Provider: (props: { value: T; children?: any }) => any
  // Consumer: (props: {children: ((value: T) => any) }) => any
  defaultValue: T
}

function useContext<T>(context: IContext<T>): T
```

<details>
 <summary>Пример</summary>

```tsx
import { render } from 'barely-react'

function App() {
  // TODO
}

render(document.body, <App />)
```

</details>

### useDeferredValue

Работает как в реакте

```ts
function useDeferredValue<T>(value: T, initialValue?: T): T
```

<details>
 <summary>Пример</summary>

```tsx
import { render } from 'barely-react'

function App() {
  // TODO
}

render(document.body, <App />)
```

</details>

### useImperativeHandle

Работает как в реакте

```ts
type RefObject<T> {
  current: T
}

function useImperativeHandle<T, R extends T>(
  ref: RefObject<T | null> | null | undefined,
  init: () => R,
  deps?: readonly unknown[]
): void
```

<details>
 <summary>Пример</summary>

```tsx
import { render } from 'barely-react'

function App() {
  // TODO
}

render(document.body, <App />)
```

</details>

### useActionState

Работает как в реакте

```ts
function useActionState<State>(
  action: (state: Awaited<State>) => State | Promise<State>,
  initialState: Awaited<State>
  //   permalink?: string
): [state: Awaited<State>, dispatch: () => void, isPending: boolean]

function useActionState<State, Payload>(
  action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
  initialState: Awaited<State>
  //   permalink?: string
): [
  state: Awaited<State>,
  dispatch: (payload: Payload) => void,
  isPending: boolean,
]

function useActionState<State, Payload>(
  action: (state: Awaited<State>, payload?: Payload) => State | Promise<State>,
  initialState: Awaited<State>
  //   permalink?: string
): [
  state: Awaited<State>,
  dispatch: (payload?: Payload) => void,
  isPending: boolean,
]
```

<details>
 <summary>Пример</summary>

```tsx
import { render } from 'barely-react'

function App() {
  // TODO
}

render(document.body, <App />)
```

</details>

### useOptimistic

Работает как в реакте

```ts
function useOptimistic<State>(
  passthrough: State
): [State, (action: State | ((pendingState: State) => State)) => void]

function useOptimistic<State, Action>(
  passthrough: State,
  reducer: (state: State, action: Action) => State
): [State, (action: Action) => void]

function useOptimistic<State, Action>(
  passthrough: State,
  reducer?: (state: State, action: Action) => State
): [
  State,
  (
    | ((action: Action) => void)
    | ((action: State | ((pendingState: State) => State)) => void)
  ),
]
```

<details>
 <summary>Пример</summary>

```tsx
import { render } from 'barely-react'

function App() {
  // TODO
}

render(document.body, <App />)
```

</details>

### useSyncExternalStore

Работает как в реакте

```ts
function useSyncExternalStore<Snapshot>(
  subscribe: (onStoreChange: () => void) => () => void,
  getSnapshot: () => Snapshot,
  _getServerSnapshot?: () => Snapshot
): Snapshot
```

<details>
 <summary>Пример</summary>

```tsx
import { render } from 'barely-react'

function App() {
  // TODO
}

render(document.body, <App />)
```

</details>

### useTransition

Работает как в реакте

```ts
function useTransition(): [boolean, (callback: TransitionFunction) => void]
```

<details>
 <summary>Пример</summary>

```tsx
import { render } from 'barely-react'

function App() {
  // TODO
}

render(document.body, <App />)
```

</details>

### useDebugValue

Просто выводит что-то в консоль, а так же, вторым аргументом, выводит в консоль объект виртуальной ноды.

```ts
function useDebugValue<T>(value: T, format?: (value: T) => any): void
```

<details>
 <summary>Пример</summary>

```tsx
import { render } from 'barely-react'

function App() {
  // TODO
}

render(document.body, <App />)
```

</details>