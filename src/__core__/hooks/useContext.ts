import { getCurrentVNode } from '../VNode.utils'
import { IHook, IContext } from '../types'
import { checkHook } from '../utils'

interface IHookDataForUseContext extends IHook {
  context: any
  users: null | any[]
}

function useContext<T>(context: IContext<T>): T {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let data = prevHook.nextHook as IHookDataForUseContext
  if (data) {
    checkHook(data, useContext)
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
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
    } satisfies IHookDataForUseContext
  }

  if (data.context !== context && data.cleanup) {
    data.cleanup()
    data.value = (data.context = context).defaultValue

    for (let ctxVNode = vNode; (ctxVNode = ctxVNode.parent!); ) {
      if (ctxVNode.fc === (context as any)) {
        data.value = ctxVNode.contextValue
        ;(data.users = ctxVNode.contextUsers!).push(data)
        break
      }
    }
  }
  vNode.prevHook = data

  return data.value
}
export { useContext }
