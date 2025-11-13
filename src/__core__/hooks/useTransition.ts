import { getCurrentVNode } from '../VNode.utils'
import { IHook } from '../types'
import { checkHook } from '../utils'
import { addVNodeInQueue, schedule } from '../scheduler'

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
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let data = hooks[hookIdx] as IHookDataForUseTransition
  if (data) {
    checkHook(data, useTransition, hookIdx)
  } else {
    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useTransition,
      vNode,
      value: false,

      callbacks: [],
      run() {
        const res = data.callbacks.shift()()
        if (res == null || typeof res.then !== 'function') data.then()
        else res.then(data.then)
      },
      then() {
        if (data.callbacks.length) schedule(data.run)
        else (data.value = false), addVNodeInQueue(data.vNode)
      },
      dispatch(callback: TransitionFunction) {
        data.callbacks.push(callback)
        if (!data.value) {
          data.value = true
          addVNodeInQueue(data.vNode), schedule(data.run)
        }
      },
    } satisfies IHookDataForUseTransition
  }

  return [data.value, data.dispatch]
}
export { useTransition }
