import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'
import { addLayoutEffectInQueue } from '../scheduler'

function useLayoutEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let needUpdate = false
  let data = hooks[hookIdx]
  if (data) {
    checkHook(data, useLayoutEffect, hookIdx)

    isEqualDeps(data.deps, (data.deps = deps)) || !deps || (needUpdate = true)
  } else {
    needUpdate = true

    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useLayoutEffect,
      vNode,
      value: effect,

      deps: deps,
    }
  }

  if (needUpdate) {
    data.value = effect
    addLayoutEffectInQueue(data)
  }
}
export { useLayoutEffect }
