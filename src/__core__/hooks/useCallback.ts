import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'

function useCallback<T extends Function>(cb: T, deps: readonly unknown[]): T {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let data = prevHook.nextHook
  if (data) {
    checkHook(data, useCallback)

    isEqualDeps(data.deps, (data.deps = deps)) || (data.value = cb)
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useCallback,
      vNode,
      value: cb,

      deps: deps,
    }
  }
  vNode.prevHook = data

  return data.value
}
export { useCallback }
