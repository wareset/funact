import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'

function useMemo<T>(factory: () => T, deps: readonly unknown[]): T {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let needUpdate = false
  let data = prevHook.nextHook
  if (data) {
    checkHook(data, useMemo)

    isEqualDeps(data.deps, (data.deps = deps)) || (needUpdate = true)
  } else {
    needUpdate = true

    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useMemo,
      vNode,
      value: null,

      deps: deps,
    }
  }
  vNode.prevHook = data

  return needUpdate ? (data.value = factory()) : data.value
}
export { useMemo }
