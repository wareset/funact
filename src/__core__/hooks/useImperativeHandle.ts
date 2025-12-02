import { checkHook, isEqualDeps } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'

import { IHook } from '../types'
import { RefObject } from '../types'

function useImperativeHandle<T, R extends T>(
  ref: RefObject<T | null> | null | undefined,
  init: () => R,
  deps?: readonly unknown[]
): void {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let needUpdate = false
  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useImperativeHandle)
    isEqualDeps(hook.deps, (hook.deps = deps)) || (needUpdate = true)
  } else {
    needUpdate = true

    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useImperativeHandle,
      vNode,
      value: ref,

      deps: deps,
    } satisfies IHook
  }
  vNode.prevHook = hook

  if ((needUpdate || hook.value !== ref) && ref) {
    ;(hook.value = ref).current = init()
  }
}
export { useImperativeHandle }
