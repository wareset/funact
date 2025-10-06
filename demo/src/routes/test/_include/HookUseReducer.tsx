const code = `import { useReducer, useRef } from 'barely-react'

import { Button } from '@/ui/bs/Button'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    case 'DECREMENT': {
      return state - 1
    }
    case 'RESET': {
      return 0
    }
  }
  throw Error('Unknown action: ' + action.type)
}

export default function HookUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0)
  const countFuncsRef = useRef<any>(null)

  /**
   * Функции сохранены в реф, чтобы при обновлении
   * каждый раз не пересоздаваться
   */
  if (!countFuncsRef.current) {
    countFuncsRef.current = {
      increment: () => {
        dispatch({ type: 'INCREMENT' })
      },
      decrement: () => {
        dispatch({ type: 'DECREMENT' })
      },
      reset: () => {
        dispatch({ type: 'RESET' })
      },
    }
  }

  const { increment, decrement, reset } = countFuncsRef.current

  return (
    <>
      <p>Код:</p>
      <small>
        <pre>
          <code className='language-tsx'>{code}</code>
        </pre>
      </small>
      <p className='pt-3'>Результат:</p>
      <div>Count: {count}</div>
      <hr />
      <Button onClick={decrement} variant={'danger'}>
        decrement
      </Button>{' '}
      <Button onClick={reset} variant={'dark'}>
        set 0
      </Button>{' '}
      <Button onClick={increment} variant={'primary'}>
        increment
      </Button>
    </>
  )
}
`

import { useReducer, useRef } from 'barely-react'

import { Button } from '@/ui/bs/Button'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    case 'DECREMENT': {
      return state - 1
    }
    case 'RESET': {
      return 0
    }
  }
  throw Error('Unknown action: ' + action.type)
}

export default function HookUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0)
  const countFuncsRef = useRef<any>(null)

  /**
   * Функции сохранены в реф, чтобы при обновлении
   * каждый раз не пересоздаваться
   */
  if (!countFuncsRef.current) {
    countFuncsRef.current = {
      increment: () => {
        dispatch({ type: 'INCREMENT' })
      },
      decrement: () => {
        dispatch({ type: 'DECREMENT' })
      },
      reset: () => {
        dispatch({ type: 'RESET' })
      },
    }
  }

  const { increment, decrement, reset } = countFuncsRef.current

  return (
    <>
      <p>Код:</p>
      <small>
        <pre>
          <code className='language-tsx'>{code}</code>
        </pre>
      </small>
      <p className='pt-3'>Результат:</p>
      <div>Count: {count}</div>
      <hr />
      <Button onClick={decrement} variant={'danger'}>
        decrement
      </Button>{' '}
      <Button onClick={reset} variant={'dark'}>
        set 0
      </Button>{' '}
      <Button onClick={increment} variant={'primary'}>
        increment
      </Button>
    </>
  )
}
