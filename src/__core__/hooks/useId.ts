import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'

function simpleHash(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; ++i) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
  }
  return hash >>> 0 //.toString(36)
}

function useId(): string {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useId,
      value: 'id' + simpleHash(vNode.deep.join('_') + '__' + idx),
    })
  checkHook(data, useId, idx)

  return data.value
}
export { useId }
