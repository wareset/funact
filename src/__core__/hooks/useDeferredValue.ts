import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

function useDeferredValue<T>(value: T, initialValue?: T): T {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useDeferredValue,
      vNode,
      value: initialValue !== void 0 ? initialValue : value,
    })
  checkHook(data, useDeferredValue, idx)

  const curValue = data.value
  if (!Object.is(curValue, value)) {
    data.value = value
    addVNodeInQueue(data.vNode)
  }

  return curValue
}
export { useDeferredValue }
