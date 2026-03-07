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

export { memo } from './memo'

// TODO
// export { startTransition } from './startTransition'

// Пока поддержка только контекстов
export { getContext as use } from './use'

import { VNode } from './VNode'
import { JSXNode } from './JSXNode'
// import { useState } from './hooks/useState'
import { Portal } from './components/Portal'
import { FC, Props, Context, ComponentChildren, JSX } from './types'

function createElement<P extends Props>(
  type: FC<P>,
  props?: null | P,
  ...children: ComponentChildren[]
): JSXNode
function createElement<C>(
  type: Context<C>,
  props?: null | { value: C; children?: ComponentChildren },
  ...children: ComponentChildren[]
): JSXNode
function createElement<E extends keyof JSX.IntrinsicElements>(
  type: E,
  props?: null | JSX.IntrinsicElements[E],
  ...children: ComponentChildren[]
): JSXNode
/*@__NO_SIDE_EFFECTS__*/
function createElement(
  type: any,
  props: any,
  ...children: ComponentChildren[]
): JSXNode {
  return new JSXNode(type, props || {}, children)
}
export { createElement }

// function Root(props: { domNode: HTMLElement | SVGElement; children: any }) {
//   const { 0: res, 1: setRes } = useState<JSXNode>()
//   res || setRes(new JSXNode(Portal, props, []))
//   return res
// }

let rId = 0
export function render(children: any, domNode: HTMLElement | SVGElement) {
  return new VNode(
    null,
    new JSXNode(Portal, { domNode, children }, []),
    1,
    ++rId
  )
  // return new VNode(null, new JSXNode(Root, { domNode, children }, []), 1, ++rId)
}

export function createRoot(domNode: HTMLElement | SVGElement) {
  return {
    render(children: any) {
      return render(children, domNode)
    },
  }
}
