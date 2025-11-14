import { getCurrentVNode } from '../VNode.utils'
import { IHook } from '../types'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

interface IHookDataForUseState extends IHook {
  update: (state: any) => void
}

function useState<S>(
  initialState: S | (() => S)
): [state: S, setState: (value: S | ((prevState: S) => S)) => void]
function useState<S = undefined>(): [
  S | undefined,
  (value: S | ((prevState: S | undefined) => S)) => void,
]

function useState<S>(
  initialState?: S | (() => S)
): [S | undefined, (value: S | ((prevState: S | undefined) => S)) => void] {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let data = prevHook.nextHook as IHookDataForUseState
  if (data) {
    checkHook(data, useState)
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
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
    } satisfies IHookDataForUseState
  }
  vNode.prevHook = data

  return [data.value, data.update]
}
export { useState }
