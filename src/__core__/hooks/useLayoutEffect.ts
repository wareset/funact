import { checkHook, isEqualDeps } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addInsertionOrLayoutEffectInQueue } from '../scheduler'

import { IHook } from '../types'

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
    ;(isEqualDeps(hook.deps, (hook.deps = deps)) && deps) || (needUpdate = true)
  } else {
    needUpdate = true

    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useLayoutEffect,
      vNode,
      value: effect,

      deps: deps,
      cleanup: null,
    } satisfies IHook
  }
  vNode.prevHook = hook

  if (needUpdate) {
    hook.value = effect
    addInsertionOrLayoutEffectInQueue(hook, 0)
  }
}
export { useLayoutEffect }
