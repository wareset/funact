

const code = `import { useState, useRef } from 'barely-react'
import { Button } from '@/ui/bs/Button'

export default function HookUseState() {
  const [count, setCount] = useState(0)
  const countFuncsRef = useRef<any>(null)

  /**
   * Функции сохранены в реф, чтобы при обновлении
   * каждый раз не пересоздаваться
   */
  if (!countFuncsRef.current) {
    countFuncsRef.current = {
      increment: () => {
        setCount((count) => count + 1)
      },
      decrement: () => {
        setCount((count) => count - 1)
      },
    }
  }

  const { increment, decrement } = countFuncsRef.current

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
      <Button onClick={increment} variant={'primary'}>
        increment
      </Button>
    </>
  )
}

`

import { useState, useRef } from 'barely-react'
import { Button } from '@/bootstrap/bs/Components/Button'

export default function HookUseState() {
  const [count, setCount] = useState(0)
  const countFuncsRef = useRef<any>(null)

  /**
   * Функции сохранены в реф, чтобы при обновлении
   * каждый раз не пересоздаваться
   */
  if (!countFuncsRef.current) {
    countFuncsRef.current = {
      increment: () => {
        setCount((count) => count + 1)
      },
      decrement: () => {
        setCount((count) => count - 1)
      },
    }
  }

  const { increment, decrement } = countFuncsRef.current

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
      <Button onClick={increment} variant={'primary'}>
        increment
      </Button>
    </>
  )
}
