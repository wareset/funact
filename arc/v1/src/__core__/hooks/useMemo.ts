import { getVNodeForHook } from '../VNode'
import { checkHook, isEqualDeps } from '../utils'

function useMemo<T>(factory: () => T, deps: readonly unknown[]): T {
  let needUpdate = false

  const vNode = getVNodeForHook()
  const hookIdx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[hookIdx] ||
    ((needUpdate = true),
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useMemo,
      vNode,
      value: null,
      deps: null,
    }))
  checkHook(data, useMemo, hookIdx, vNode)

  isEqualDeps(data.deps, (data.deps = deps)) || (needUpdate = true)

  return needUpdate ? (data.value = factory()) : data.value
}
export { useMemo }
