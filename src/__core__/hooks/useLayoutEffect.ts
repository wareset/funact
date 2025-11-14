import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'
import { addLayoutEffectInQueue } from '../scheduler'

function useLayoutEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let needUpdate = false
  let data = prevHook.nextHook
  if (data) {
    checkHook(data, useLayoutEffect)

    isEqualDeps(data.deps, (data.deps = deps)) || !deps || (needUpdate = true)
  } else {
    needUpdate = true

    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useLayoutEffect,
      vNode,
      value: effect,

      deps: deps,
    }
  }
  vNode.prevHook = data

  if (needUpdate) {
    data.value = effect
    addLayoutEffectInQueue(data)
  }
}
export { useLayoutEffect }
