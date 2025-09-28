import { getCurrentVNode } from '../VNode_utils'
import { checkHook } from '../utils'

function useDebugValue<T>(value: T, format?: (value: T) => any): void {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks
  
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useDebugValue,
      vNode,
      value: hooks,
    })
  checkHook(data, useDebugValue, hookIdx)

  if (!Object.is(data.value, value)) {
    data.value = value
    console.log('USE_DEBUG:', format ? format(value) : value, vNode)
  }
}
export { useDebugValue }
