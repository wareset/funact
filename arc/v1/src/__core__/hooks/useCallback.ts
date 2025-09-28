import { getVNodeForHook } from '../VNode'
import { checkHook, isEqualDeps } from '../utils'

function useCallback<T extends Function>(cb: T, deps: readonly unknown[]): T {
  const vNode = getVNodeForHook()
  const hookIdx = vNode.hookIdx
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
  checkHook(data, useCallback, hookIdx, vNode)

  isEqualDeps(data.deps, (data.deps = deps)) || (data.value = cb)

  return data.value
}
export { useCallback }
