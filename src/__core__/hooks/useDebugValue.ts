import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'

function useDebugValue<T>(value: T, format?: (value: T) => any): void {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let data = hooks[hookIdx]
  if (data) {
    checkHook(data, useDebugValue, hookIdx)
  } else {
    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useDebugValue,
      vNode,
      value: hooks,
    }
  }

  if (!Object.is(data.value, value)) {
    data.value = value
    console.log('USE_DEBUG:', format ? format(value) : value, vNode)
  }
}
export { useDebugValue }
