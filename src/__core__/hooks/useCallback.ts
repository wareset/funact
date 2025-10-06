import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'

function useCallback<T extends Function>(cb: T, deps: readonly unknown[]): T {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useCallback,
      vNode,
      value: cb,
      deps: null,
    })
  checkHook(data, useCallback, hookIdx)
  
  isEqualDeps(data.deps, (data.deps = deps)) || (data.value = cb)

  return data.value
}
export { useCallback }
