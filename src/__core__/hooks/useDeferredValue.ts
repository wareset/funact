import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

function useDeferredValue<T>(value: T, initialValue?: T): T {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let data = prevHook.nextHook
  if (data) {
    checkHook(data, useDeferredValue)
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useDeferredValue,
      vNode,
      value: initialValue !== void 0 ? initialValue : value,
    }
  }
  vNode.prevHook = data

  const prevValue = data.value
  if (!Object.is(prevValue, value)) {
    data.value = value
    addVNodeInQueue(data.vNode)
  }

  return prevValue
}
export { useDeferredValue }
