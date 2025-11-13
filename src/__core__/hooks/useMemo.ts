import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'

function useMemo<T>(factory: () => T, deps: readonly unknown[]): T {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let needUpdate = false
  let data = hooks[hookIdx]
  if (data) {
    checkHook(data, useMemo, hookIdx)

    isEqualDeps(data.deps, (data.deps = deps)) || (needUpdate = true)
  } else {
    needUpdate = true

    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useMemo,
      vNode,
      value: null,

      deps: deps,
    }
  }

  return needUpdate ? (data.value = factory()) : data.value
}
export { useMemo }
