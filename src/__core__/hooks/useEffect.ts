import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'
import { addEffectInQueue } from '../scheduler'

function useEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let needUpdate = false
  let data = hooks[hookIdx]
  if (data) {
    checkHook(data, useEffect, hookIdx)

    isEqualDeps(data.deps, (data.deps = deps)) || !deps || (needUpdate = true)
  } else {
    needUpdate = true

    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useEffect,
      vNode,
      value: effect,

      deps: deps,
    }
  }

  if (needUpdate) {
    data.value = effect
    addEffectInQueue(data)
  }
}
export { useEffect }
