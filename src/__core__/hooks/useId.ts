import { checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'

import { IHook } from '../types'

// function simpleHash(str: string) {
//   let hash = 0
//   for (let i = 0; i < str.length; ++i) {
//     hash = (hash << 5) - hash + str.charCodeAt(i)
//   }
//   return hash >>> 0 //.toString(36)
// }

function useId(): string {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useId)
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useId,
      vNode,
      // value: 'id' + simpleHash(vNode.deep.join('_') + '__' + hookIdx),
      value: (Math.random() * 6e16 + 4e16).toString(36),
    } satisfies IHook
  }
  vNode.prevHook = hook

  return hook.value
}
export { useId }
