import { checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { IHook, IContext } from '../types'

interface IHookDataForUseContext extends IHook {
  context: any
  users: null | any[]
}

function useContext<T>(context: IContext<T>): T {
  let vNode = getCurrentVNode()
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
  vNode.prevHook = hook

  if (hook.context !== context && hook.cleanup) {
    hook.cleanup()
    hook.value = (hook.context = context).defaultValue

    for (; (vNode = vNode.parent!); ) {
      if (vNode.fc === (context as any)) {
        hook.value = vNode.contextValue
        ;(hook.users = vNode.contextUsers!).push(hook)
        break
      }
    }
  }

  return hook.value
}
export { useContext }
