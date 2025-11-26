import { checkHook, isEqualDeps } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addInsertionEffectInQueue } from '../scheduler'

function useInsertionEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let needUpdate = false
  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useInsertionEffect)
    ;(deps && isEqualDeps(hook.deps, (hook.deps = deps))) || (needUpdate = true)
  } else {
    needUpdate = true

    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useInsertionEffect,
      vNode,
      value: effect,

      deps: deps,
    }
  }
  vNode.prevHook = hook

  if (needUpdate) {
    hook.value = effect
    addInsertionEffectInQueue(hook)
  }
}
export { useInsertionEffect }
