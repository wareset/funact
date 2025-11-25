import { getCurrentVNode } from '../VNode.utils'
import { checkHook, isEqualDeps } from '../utils'

function useMemo<T>(factory: () => T, deps: readonly unknown[]): T {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let needUpdate = false
  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useMemo)

    isEqualDeps(hook.deps, (hook.deps = deps)) || (needUpdate = true)
  } else {
    needUpdate = true

    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useMemo,
      vNode,
      value: null,

      deps: deps,
    }
  }
  vNode.prevHook = hook

  return needUpdate ? (hook.value = factory()) : hook.value
}
export { useMemo }
