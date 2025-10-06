import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'
import { addLayoutEffectInQueue } from '../scheduler'

function useLayoutEffect(
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
      hookType: useLayoutEffect,
      vNode,
      value: effect,
      deps: null,
    }))
  checkHook(data, useLayoutEffect, hookIdx)

  isEqualDeps(data.deps, (data.deps = deps)) || !deps || (needUpdate = true)

  if (needUpdate) {
    data.value = effect
    addLayoutEffectInQueue(data)
  }
}
export { useLayoutEffect }
