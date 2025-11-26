import { checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addVNodeInQueue } from '../scheduler'

import { IHook } from '../types'

interface IHookDataForUseOptimistic extends IHook {
  reducer: (...a: any[]) => any
  dispatch: (...a: any[]) => void
}

// import { useState } from './useState'

function useReducer<S, A extends [] | [any]>(
  reducer: (prevState: S, ...args: A) => S,
  initialState: S
): [state: S, dispatch: (...args: A) => void]
function useReducer<S, I, A extends [] | [any]>(
  reducer: (prevState: S, ...args: A) => S,
  initialArg: I,
  init: (i: I) => S
): [state: S, dispatch: (...args: A) => void]

function useReducer<S, I, A extends [] | [any]>(
  reducer: (prevState: S, ...args: A) => S,
  initialState: I,
  init?: (i: I) => S
): [state: S, dispatch: (...args: A) => void] {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook as IHookDataForUseOptimistic
  if (hook) {
    checkHook(hook, useReducer)
    hook.reducer = reducer
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useReducer,
      vNode,
      value: (init ? init(initialState) : initialState) as S,
      reducer,
      dispatch(...args: any[]) {
        args = hook.reducer(hook.value, ...args)
        if (!Object.is(hook.value, args)) {
          hook.value = args
          addVNodeInQueue(hook.vNode)
        }
      },
    } satisfies IHookDataForUseOptimistic
  }
  vNode.prevHook = hook

  return [hook.value, hook.dispatch]
}
export { useReducer }
