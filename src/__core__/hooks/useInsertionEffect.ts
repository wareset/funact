import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'
import { addInsertionEffectInQueue } from '../scheduler'

function useInsertionEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let needUpdate = false
  let data = prevHook.nextHook
  if (data) {
    checkHook(data, useInsertionEffect)

    isEqualDeps(data.deps, (data.deps = deps)) || !deps || (needUpdate = true)
  } else {
    needUpdate = true

    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useInsertionEffect,
      vNode,
      value: effect,

      deps: deps,
    }
  }
  vNode.prevHook = data

  if (needUpdate) {
    data.value = effect
    addInsertionEffectInQueue(data)
  }
}
export { useInsertionEffect }
