import { getCurrentVNode } from '../VNode_utils'
import { checkHook } from '../utils'

function simpleHash(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; ++i) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
  }
  return hash >>> 0 //.toString(36)
}

function useId(): string {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks
  
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useId,
      vNode,
      value: 'id' + simpleHash(vNode.deep.join('_') + '__' + hookIdx),
    })
  checkHook(data, useId, hookIdx)

  return data.value
}
export { useId }
