import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'

function useId(): string {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useId,
      value: 'id-' + vNode.deep.join('-') + '--' + idx,
    })
  checkHook(data, useId, idx)

  return data.value
}
export { useId }
