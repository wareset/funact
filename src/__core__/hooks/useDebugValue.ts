import { IHook, checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { isEqual } from '../utils'

function useDebugValue<T>(value: T, format?: (value: T) => any): void {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useDebugValue)
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useDebugValue,
      vNode,
      value: vNode,
    } satisfies IHook
  }
  vNode.prevHook = hook

  if (!isEqual(hook.value, value)) {
    hook.value = value
    console.log('USE_DEBUG:', format ? format(value) : value, vNode)
  }
}
export { useDebugValue }
