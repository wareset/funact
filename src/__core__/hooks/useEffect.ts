import { IHook, checkHook, isEqualDeps } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addEffectInQueue } from '../scheduler'

function useEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let needUpdate = false
  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useEffect)
    ;(isEqualDeps(hook.deps, (hook.deps = deps)) && deps) || (needUpdate = true)
  } else {
    needUpdate = true

    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useEffect,
      vNode,
      value: effect,

      deps: deps,
      cleanup: null,
    } satisfies IHook
  }
  vNode.prevHook = hook

  if (needUpdate) {
    hook.value = effect
    addEffectInQueue(hook)
  }
}
export { useEffect }
