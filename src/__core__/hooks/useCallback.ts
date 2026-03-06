import { IHook, checkHook, isEqualDeps } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'

function useCallback<T extends Function>(cb: T, deps: readonly unknown[]): T {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useCallback)
    isEqualDeps(hook.deps, (hook.deps = deps)) || (hook.value = cb)
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useCallback,
      vNode,
      value: cb,

      deps: deps,
    } satisfies IHook
  }
  vNode.prevHook = hook

  return hook.value
}
export { useCallback }
