import { getVNodeForHook } from '../VNode'
import { checkHook, isEqualDeps } from '../utils'
import { addInsertionEffectInQueue } from '../scheduler'

function useInsertionEffect(
  effect: (() => void) | (() => () => void),
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
      hookType: useInsertionEffect,
      vNode,
      value: effect,
      deps: null,
    }))
  checkHook(data, useInsertionEffect, hookIdx, vNode)

  isEqualDeps(data.deps, (data.deps = deps)) || !deps || (needUpdate = true)

  if (needUpdate) {
    data.value = effect
    addInsertionEffectInQueue(data)
  }
}
export { useInsertionEffect }
