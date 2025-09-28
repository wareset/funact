export { type RefObject } from './types'

export { Fragment } from './components/Fragment'
export { Portal } from './components/Portal'

export { classnames, stylesheet } from './components/xml_attrs'

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

export { memo } from './memo'

// TODO
// export { startTransition } from './startTransition'

// Пока поддержка только контекстов
export { getContext as use } from './use'

import { VNode } from './VNode'
import { JSXNode } from './JSXNode'
import { useState } from './hooks/useState'
import { Portal } from './components/Portal'

/*@__NO_SIDE_EFFECTS__*/
export function createElement(
  type: JSXNode['type'],
  props?: JSXNode['props'] | null | undefined,
  ...children: any[]
) {
  return new JSXNode(type, props, children)
}

function Root(props: any) {
  const [res, setRes] = useState<JSXNode>()
  res || setRes(new JSXNode(Portal as any, props, []))
  return res
}
export function render(domNode: HTMLElement | SVGElement, children: any) {
  return new VNode(null, new JSXNode(Root, { domNode, children }, []))
}

// export function render(domNode: HTMLElement | SVGElement, children: any) {
//   return new VNode(null, new JSXNode(Portal as any, { domNode, children }, []))
// }
