import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'

import { RefObject } from '../types'

function useImperativeHandle<T, R extends T>(
  ref: RefObject<T | null> | null | undefined,
  init: () => R,
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let needUpdate = false
  let data = prevHook.nextHook
  if (data) {
    checkHook(data, useImperativeHandle)

    isEqualDeps(data.deps, (data.deps = deps)) || (needUpdate = true)
  } else {
    needUpdate = true

    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useImperativeHandle,
      vNode,
      value: ref,

      deps: deps,
    }
  }
  vNode.prevHook = data

  if ((needUpdate || data.value !== ref) && ref) {
    ;(data.value = ref).current = init()
  }
}
export { useImperativeHandle }
