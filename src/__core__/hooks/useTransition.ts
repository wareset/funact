import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'
import { addVNodeInQueue, schedule } from '../scheduler'

import { TransitionFunction } from '../types'

function useTransition(): [boolean, (callback: TransitionFunction) => void] {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useTransition,
      vNode,
      pending: false,
      callbacks: [],
      run() {
        const res = data.callbacks.shift()()
        if (res == null || typeof res.then !== 'function') data.then(res)
        else res.then(data.then)
      },
      then() {
        if (data.callbacks.length) schedule(data.run)
        else (data.pending = false), addVNodeInQueue(data.vNode)
      },
      dispatch(callback: TransitionFunction) {
        data.callbacks.push(callback)
        if (!data.pending) {
          data.pending = true
          addVNodeInQueue(data.vNode), schedule(data.run)
        }
      },
    })
  checkHook(data, useTransition, idx)

  return [data.pending, data.dispatch]
}
export { useTransition }
