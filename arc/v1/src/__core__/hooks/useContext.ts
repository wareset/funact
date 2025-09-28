import { getVNodeForHook, HookData } from '../VNode'
import { checkHook } from '../utils'

import type { Context } from '../types'

interface HookDataForUseContext extends HookData {
  context: any
  users: any
}

function useContext<T>(context: Context<T>): T {
  const vNode = getVNodeForHook()
  const hookIdx = vNode.hookIdx
  const hooks = vNode.hooks as HookDataForUseContext[]
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useContext,
      vNode,
      value: null,
      context: null,
      users: null,
      cleanup() {
        if (data.users) {
          const idx = data.users.lastIndexOf(data)
          idx === -1 || data.users.splice(idx, 1)
          data.users = null
        }
      },
    })
  checkHook(data, useContext, hookIdx, vNode)

  if (data.context !== context && data.cleanup) {
    data.cleanup()
    data.value = (data.context = context).defaultValue

    for (let ctxVNode = vNode; (ctxVNode = ctxVNode.parent!); ) {
      if (ctxVNode.fc === context) {
        data.value = ctxVNode.contextValue
        ;(data.users = ctxVNode.contextUsers!).push(data)
        break
      }
    }
  }

  return data.value
}
export { useContext }
