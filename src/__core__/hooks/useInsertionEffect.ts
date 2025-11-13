import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'
import { addInsertionEffectInQueue } from '../scheduler'

function useInsertionEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let needUpdate = false
  let data = hooks[hookIdx]
  if (data) {
    checkHook(data, useInsertionEffect, hookIdx)

    isEqualDeps(data.deps, (data.deps = deps)) || !deps || (needUpdate = true)
  } else {
    needUpdate = true

    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useInsertionEffect,
      vNode,
      value: effect,

      deps: deps,
    }
  }

  if (needUpdate) {
    data.value = effect
    addInsertionEffectInQueue(data)
  }
}
export { useInsertionEffect }
