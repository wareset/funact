import { checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addVNodeInQueue } from '../scheduler'

import { IHook } from '../types'

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

  let hook = prevHook.nextHook as IHookDataForUseState
  if (hook) {
    checkHook(hook, useState)
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useState,
      vNode,
      value:
        typeof initialState === 'function'
          ? (initialState as any)()
          : initialState,

      update(state: any) {
        if (typeof state === 'function') state = state(hook.value)
        if (!Object.is(hook.value, state)) {
          hook.value = state
          addVNodeInQueue(hook.vNode)
        }
      },
    } satisfies IHookDataForUseState
  }
  vNode.prevHook = hook

  return [hook.value, hook.update]
}
export { useState }
