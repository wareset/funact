# funact

Библиотека в стиле React, созданная исключительно для функциональных компонентов и хуков. Никаких классов, синтетических событий, саспенсов, конкарент модов и легаси.

Поле для экспериментов:
<br/>
[https://wareset.github.io/funact/demo/app/index.html](https://wareset.github.io/funact/demo/app/index.html)

Пока что это не более чем эксперимент. В библиотеке реализована работа всех хуков почти как в `react 19` (за исключением хука `useFormStatus` из `react-dom`) и некоторых функций.

#### Что есть сейчас:

- Components:
  - Fragment
  - Portal (используется вместо `createPortal` из `react-dom`)
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
  - useSyncExternalStore (без параметра `getServerSnapshot`)
  - useTransition
- APIs:
  - createElement
  - render (используется вместо `createRoot` из `react-dom`, как раньше)
  - createRoot (тоже есть на всякий случай)
  - cache
  - createContext (пока без `Consumer`)
  - memo (на этапе идеи, поэтому сейчас все компоненты уже как в мемо)
  - use (пока поддерживает только `contexts`)
- А так же:
  - classnames (приводит классы к строке)
  - stylesheet (приводит стили к строке)

Классовых компонентов, а так же всё что относится к `legacy` (`forwardRef`, `cloneElement` и т.д), нет.

Так же нет (возможно пока) `lazy`, `Suspense` и другого функционала, предназначенного для работы с серверным взаимодействием.

Свойство `key`, необходимое для оптимизации рендера списков, в данный момент так не работает, но может быть использовано для полного перерендера компонента.

Синтетические события (как и дополнительные атрибуты в реакте) пока не реализованы, вместо них используются только нативные, как в библиотеке `preact`.

### Установка

Этой библиотеки нет в `npm` и поэтому в `package.json` придётся написать что-то типа:

package.json

```json
{
  "dependencies": {
    "funact": "github:wareset/funact"
  }
}
```
