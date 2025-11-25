import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'

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
    }
  }
  vNode.prevHook = hook

  if (!Object.is(hook.value, value)) {
    hook.value = value
    console.log('USE_DEBUG:', format ? format(value) : value, vNode)
  }
}
export { useDebugValue }
