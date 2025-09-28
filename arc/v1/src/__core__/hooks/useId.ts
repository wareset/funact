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
  const hookIdx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useId,
      vNode,
      value: 'id' + simpleHash(vNode.deep.join('_') + '__' + hookIdx),
    })
  checkHook(data, useId, hookIdx, vNode)

  return data.value
}
export { useId }
