import { IHook, checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addVNodeInQueue } from '../scheduler'
import { isEqual } from '../utils'

function useDeferredValue<T>(value: T, initialValue?: T): T {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useDeferredValue)
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useDeferredValue,
      vNode,
      value: initialValue !== void 0 ? initialValue : value,
    } satisfies IHook
  }
  vNode.prevHook = hook

  const prevValue = hook.value
  if (!isEqual(prevValue, value)) {
    hook.value = value
    addVNodeInQueue(hook.vNode)
  }

  return prevValue
}
export { useDeferredValue }
