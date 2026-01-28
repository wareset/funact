import { checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addVNodeInQueue, schedule } from '../scheduler'

import { IHook } from '../types'
import { TransitionFunction } from '../types'

interface IHookDataForUseTransition extends IHook {
  callbacks: any[]
  lastCtx: null | any
  run: () => void
  then: () => void
  dispatch: (callback: any) => void
}

function useTransition(): [
  isPending: boolean,
  startTransition: (callback: TransitionFunction) => void,
] {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook as IHookDataForUseTransition
  if (hook) {
    checkHook(hook, useTransition)
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useTransition,
      vNode,
      value: false,

      callbacks: [],
      lastCtx: null,
      run() {
        if (hook.vNode.alive) {
          for (let tmp: any, a = hook.callbacks; (tmp = a.shift()); ) {
            tmp = tmp()
            if (!a.length) {
              const lastCtx = (hook.lastCtx = {})
              tmp != null && typeof tmp.then === 'function'
                ? tmp.then(hook.then.bind(lastCtx))
                : hook.then.apply(lastCtx)
              return
            }
          }
        }
      },
      then() {
        if (hook.vNode.alive && this === hook.lastCtx)
          (hook.value = false), addVNodeInQueue(hook.vNode)
      },
      dispatch(callback: TransitionFunction) {
        if (hook.vNode.alive) {
          hook.callbacks.push(callback)
          if (!hook.value) {
            hook.value = true
            addVNodeInQueue(hook.vNode)
          }
          schedule(hook.run)
        }
      },
    } satisfies IHookDataForUseTransition
  }
  vNode.prevHook = hook

  return [hook.value, hook.dispatch]
}
export { useTransition }
