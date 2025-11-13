import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'

import { RefObject } from '../types'

function useImperativeHandle<T, R extends T>(
  ref: RefObject<T | null> | null | undefined,
  init: () => R,
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let needUpdate = false
  let data = hooks[hookIdx]
  if (data) {
    checkHook(data, useImperativeHandle, hookIdx)

    isEqualDeps(data.deps, (data.deps = deps)) || (needUpdate = true)
  } else {
    needUpdate = true

    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useImperativeHandle,
      vNode,
      value: ref,

      deps: deps,
    }
  }

  if ((needUpdate || data.value !== ref) && ref) {
    ;(data.value = ref).current = init()
  }
}
export { useImperativeHandle }
