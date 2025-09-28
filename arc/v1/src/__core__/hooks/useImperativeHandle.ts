import { getVNodeForHook } from '../VNode'
import { checkHook, isEqualDeps } from '../utils'

import type { RefObject } from '../types'

function useImperativeHandle<T, R extends T>(
  ref: RefObject<T | null> | null | undefined,
  init: () => R,
  deps?: readonly unknown[]
): void {
  let needUpdate = false

  const vNode = getVNodeForHook()
  const hookIdx = vNode.hookIdx
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
  checkHook(data, useImperativeHandle, hookIdx, vNode)

  isEqualDeps(data.deps, (data.deps = deps)) || (needUpdate = true)

  if ((needUpdate || data.value !== ref) && ref) {
    ;(data.value = ref).current = init()
  }
}
export { useImperativeHandle }
