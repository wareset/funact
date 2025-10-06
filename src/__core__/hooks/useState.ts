import { getCurrentVNode } from '../VNode.utils'
import { IHook } from '../types'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

interface IHookDataForUseState extends IHook {
  update: (state: any) => void
}

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
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks as IHookDataForUseState[] // борьба с ts
  
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useState,
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
  checkHook(data, useState, hookIdx)

  return [data.value, data.update]
}
export { useState }
