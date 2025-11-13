import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

function useDeferredValue<T>(value: T, initialValue?: T): T {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let data = hooks[hookIdx]
  if (data) {
    checkHook(data, useDeferredValue, hookIdx)
  } else {
    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useDeferredValue,
      vNode,
      value: initialValue !== void 0 ? initialValue : value,
    }
  }

  const prevValue = data.value
  if (!Object.is(prevValue, value)) {
    data.value = value
    addVNodeInQueue(data.vNode)
  }

  return prevValue
}
export { useDeferredValue }
