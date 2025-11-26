import { checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addVNodeInQueue, schedule } from '../scheduler'

import { IHook } from '../types'
import { TransitionFunction } from '../types'

interface IHookDataForUseTransition extends IHook {
  callbacks: any[]
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
      run() {
        const res = hook.callbacks.shift()()
        if (res == null || typeof res.then !== 'function') hook.then()
        else res.then(hook.then)
      },
      then() {
        if (hook.callbacks.length) schedule(hook.run)
        else (hook.value = false), addVNodeInQueue(hook.vNode)
      },
      dispatch(callback: TransitionFunction) {
        hook.callbacks.push(callback)
        if (!hook.value) {
          hook.value = true
          addVNodeInQueue(hook.vNode), schedule(hook.run)
        }
      },
    } satisfies IHookDataForUseTransition
  }
  vNode.prevHook = hook

  return [hook.value, hook.dispatch]
}
export { useTransition }
