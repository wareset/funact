const list = `
- Components:
  - Fragment
  - Portal (используется вместо \`createPortal\` из \`react-dom\`)
- Hooks:
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
  - useSyncExternalStore (без параметра \`getServerSnapshot\`)
  - useTransition
- APIs:
  - createElement
  - render (используется вместо \`createRoot\` из \`react-dom\`)
  - cache
  - createContext (пока без \`Consumer\`)
  - memo
  - use (пока поддерживает только \`contexts\`)
- А так же:
  - classnames (приводит классы к строке)
  - stylesheet (приводит стили к строке)
`

export default function Description() {
  return (
    <div>
      <h1>Barely-react</h1>
      <p>
        В данный момент демо, как и сама библиотека, еще не готовы. Но ниже есть
        примеры работы хуков для демонстрации того, что библиотека действительно
        работает.
      </p>
      <h5>Список того что уже готово:</h5>
      <pre>{list}</pre>
      <p>
        Ссылка на github:
        <br />
        <a href='https://github.com/wareset/barely-react' target='_blank'>
          https://github.com/wareset/barely-react
        </a>
      </p>
      <p>
        Ссылки на исходники текущей страницы:
        <br />
        <a
          href='https://github.com/wareset/barely-react/blob/main/demo/src/routes/test/page.tsx'
          target='_blank'
        >
          https://github.com/wareset/barely-react/blob/main/demo/src/routes/test/page.tsx
        </a>
        <br />
        и
        <br />
        <a
          href='https://github.com/wareset/barely-react/blob/main/demo/src/app/index.tsx'
          target='_blank'
        >
          https://github.com/wareset/barely-react/blob/main/demo/src/app/index.tsx
        </a>
      </p>
    </div>
  )
}
