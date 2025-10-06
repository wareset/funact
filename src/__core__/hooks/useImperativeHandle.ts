import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'

import { RefObject } from '../types'

function useImperativeHandle<T, R extends T>(
  ref: RefObject<T | null> | null | undefined,
  init: () => R,
  deps?: readonly unknown[]
): void {
  let needUpdate = false

  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks
  
  const data =
    hooks[hookIdx] ||
    ((needUpdate = true),
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useImperativeHandle,
      vNode,
      value: ref,
      deps: null,
    }))
  checkHook(data, useImperativeHandle, hookIdx)

  isEqualDeps(data.deps, (data.deps = deps)) || (needUpdate = true)

  if ((needUpdate || data.value !== ref) && ref) {
    ;(data.value = ref).current = init()
  }
}
export { useImperativeHandle }
