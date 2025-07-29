import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

function useState<S>(
  initialState: S | (() => S)
): [S, (value: S | ((prevState: S) => S)) => void]
function useState<S = undefined>(): [
  S | undefined,
  (value: S | ((prevState: S | undefined) => S)) => void,
]
function useState<S>(
  initialState?: S | (() => S)
): [S | undefined, (value: S | ((prevState: S | undefined) => S)) => void] {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useState,
      vNode,
      value:
        typeof initialState === 'function'
          ? (initialState as any)()
          : initialState,
      update(state: any) {
        if (typeof state === 'function') state = state(data.value)
        if (!Object.is(data.value, state)) {
          data.value = state
          addVNodeInQueue(data.vNode)
        }
      },
    })
  checkHook(data, useState, idx)

  return [data.value, data.update]
}
export { useState }
