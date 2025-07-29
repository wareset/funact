import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

import { useEffect } from './useEffect'

import type { Context } from '../types'

function useContext<T>(context: Context<T>): T {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useContext,
      vNode,
      context: null,
      value: null,
      users: null,
      sub(value: any) {
        if (!Object.is(data.value, value)) {
          data.value = value
          addVNodeInQueue(data.vNode)
        }
      },
      unsub() {
        if (data.users) {
          const idx = data.users.lastIndexOf(data.sub)
          idx === -1 || data.users.splice(idx, 1)
          data.users = null
        }
      },
      deps: [],
      effect() {
        return data.unsub()
      },
    })
  checkHook(data, useContext, idx)

  if (data.context !== context) {
    data.unsub()
    data.value = (data.context = context).defaultValue
    for (let ctxVNode = vNode; (ctxVNode = ctxVNode.parent!); ) {
      if (ctxVNode.fc === context) {
        data.value = ctxVNode.contextValue
        ;(data.users = ctxVNode.contextUsers!).push(data.sub)
        break
      }
    }
  }

  useEffect(data.effect, data.deps)

  return data.value
}
export { useContext }
