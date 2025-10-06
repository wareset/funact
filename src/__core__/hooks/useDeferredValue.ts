import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

function useDeferredValue<T>(value: T, initialValue?: T): T {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks
  
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useDeferredValue,
      vNode,
      value: initialValue !== void 0 ? initialValue : value,
    })
  checkHook(data, useDeferredValue, hookIdx)

  const curValue = data.value
  if (!Object.is(curValue, value)) {
    data.value = value
    addVNodeInQueue(data.vNode)
  }

  return curValue
}
export { useDeferredValue }
