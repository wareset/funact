import { getVNodeForHook, HookData } from '../VNode'
import { checkHook } from '../utils'
import { addVNodeInQueue, schedule } from '../scheduler'

import { TransitionFunction } from '../types'

interface HookDataForUseTransition extends HookData {
  callbacks: any[]
  run: () => void
  then: () => void
  dispatch: (callback: any) => void
}

function useTransition(): [boolean, (callback: TransitionFunction) => void] {
  const vNode = getVNodeForHook()
  const hookIdx = vNode.hookIdx
  const hooks = vNode.hooks as HookDataForUseTransition[]
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
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
    })
  checkHook(data, useTransition, hookIdx, vNode)

  return [data.value, data.dispatch]
}
export { useTransition }
