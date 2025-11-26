import { checkHook, isEqualDeps } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addLayoutEffectInQueue } from '../scheduler'

function useLayoutEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let needUpdate = false
  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useLayoutEffect)
    ;(deps && isEqualDeps(hook.deps, (hook.deps = deps))) || (needUpdate = true)
  } else {
    needUpdate = true

    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useLayoutEffect,
      vNode,
      value: effect,

      deps: deps,
    }
  }
  vNode.prevHook = hook

  if (needUpdate) {
    hook.value = effect
    addLayoutEffectInQueue(hook)
  }
}
export { useLayoutEffect }
