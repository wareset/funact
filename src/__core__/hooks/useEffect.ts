import { getCurrentVNode } from '../VNode_utils'
import { checkHook, isEqualDeps } from '../utils'
import { addEffectInQueue } from '../scheduler'

function useEffect(
  effect: (() => void) | (() => () => void),
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
      hookType: useEffect,
      vNode,
      value: effect,
      deps: null,
    }))
  checkHook(data, useEffect, hookIdx)

  isEqualDeps(data.deps, (data.deps = deps)) || !deps || (needUpdate = true)

  if (needUpdate) {
    data.value = effect
    addEffectInQueue(data)
  }
}
export { useEffect }
