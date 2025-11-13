import { getCurrentVNode } from '../VNode.utils'
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

  let data = hooks[hookIdx]
  if (data) {
    checkHook(data, useId, hookIdx)
  } else {
    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useId,
      vNode,
      value: 'id' + simpleHash(vNode.deep.join('_') + '__' + hookIdx),
    }
  }

  return data.value
}
export { useId }
