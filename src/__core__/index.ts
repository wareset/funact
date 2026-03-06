export * from './types'
// import { JSXInternal } from './types'
// export import JSX = JSXInternal

export { Fragment } from './components/Fragment'
export { Portal } from './components/Portal'

export { classnames, stylesheet } from './components/xml.attrs'

export { useActionState } from './hooks/useActionState'
export { useCallback } from './hooks/useCallback'
export { useContext } from './hooks/useContext'
export { useDebugValue } from './hooks/useDebugValue'
export { useDeferredValue } from './hooks/useDeferredValue'
export { useEffect } from './hooks/useEffect'
export { useId } from './hooks/useId'
export { useImperativeHandle } from './hooks/useImperativeHandle'
export { useInsertionEffect } from './hooks/useInsertionEffect'
export { useLayoutEffect } from './hooks/useLayoutEffect'
export { useMemo } from './hooks/useMemo'
export { useOptimistic } from './hooks/useOptimistic'
export { useReducer } from './hooks/useReducer'
export { useRef } from './hooks/useRef'
export { useState } from './hooks/useState'
export { useSyncExternalStore } from './hooks/useSyncExternalStore'
export { useTransition } from './hooks/useTransition'

export { cache } from './cache'

export { createContext } from './createContext'
export { createElement } from './createElement'

export { memo } from './memo'

// TODO
// export { startTransition } from './startTransition'

// Пока поддержка только контекстов
export { getContext as use } from './use'

import { VNode } from './VNode'
// import { useState } from './hooks/useState'
import { Portal } from './components/Portal'
import { createElement } from './createElement'

// function Root(props: { domNode: HTMLElement | SVGElement; children: any }) {
//   const { 0: res, 1: setRes } = useState<JSXNode>()
//   res || setRes(createElement(Portal, props))
//   return res
// }

let rId = 0
export function render(children: any, domNode: HTMLElement | SVGElement) {
  return new VNode(null, createElement(Portal, { domNode, children }), 1, ++rId)
  // return new VNode(null, createElement(Root, { domNode, children }), 1, ++rId)
}

export function createRoot(domNode: HTMLElement | SVGElement) {
  return {
    render(children: any) {
      return render(children, domNode)
    },
  }
}
