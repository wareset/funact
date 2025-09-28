import { getVNodeForHook } from '../VNode'
import { checkHook, isEqualDeps } from '../utils'
import { addLayoutEffectInQueue } from '../scheduler'

function useLayoutEffect(
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
      hookType: useLayoutEffect,
      vNode,
      value: effect,
      deps: null,
    }))
  checkHook(data, useLayoutEffect, hookIdx, vNode)

  isEqualDeps(data.deps, (data.deps = deps)) || !deps || (needUpdate = true)

  if (needUpdate) {
    data.value = effect
    addLayoutEffectInQueue(data)
  }
}
export { useLayoutEffect }
