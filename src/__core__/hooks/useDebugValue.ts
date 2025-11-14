import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'

function useDebugValue<T>(value: T, format?: (value: T) => any): void {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let data = prevHook.nextHook
  if (data) {
    checkHook(data, useDebugValue)
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useDebugValue,
      vNode,
      value: vNode,
    }
  }
  vNode.prevHook = data

  if (!Object.is(data.value, value)) {
    data.value = value
    console.log('USE_DEBUG:', format ? format(value) : value, vNode)
  }
}
export { useDebugValue }
