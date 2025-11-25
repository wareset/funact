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

  let hook = prevHook.nextHook as IHookDataForUseContext
  if (hook) {
    checkHook(hook, useContext)
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useContext,
      vNode,
      value: null,

      context: null,
      users: null,

      cleanup() {
        if (hook.users) {
          const idx = hook.users.lastIndexOf(hook)
          idx === -1 || hook.users.splice(idx, 1)
          hook.users = null
        }
      },
    } satisfies IHookDataForUseContext
  }

  if (hook.context !== context && hook.cleanup) {
    hook.cleanup()
    hook.value = (hook.context = context).defaultValue

    for (let ctxVNode = vNode; (ctxVNode = ctxVNode.parent!); ) {
      if (ctxVNode.fc === (context as any)) {
        hook.value = ctxVNode.contextValue
        ;(hook.users = ctxVNode.contextUsers!).push(hook)
        break
      }
    }
  }
  vNode.prevHook = hook

  return hook.value
}
export { useContext }
