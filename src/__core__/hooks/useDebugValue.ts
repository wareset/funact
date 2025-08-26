import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'

function useDebugValue<T>(value: T, format?: (value: T) => any): void {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useDebugValue,
      value: hooks,
      format,
    })
  checkHook(data, useDebugValue, idx)

  if (!Object.is(data.value, value)) {
    data.value = value
    console.log('USE_DEBUG:', format ? format(value) : value, vNode)
  }
}
export { useDebugValue }
