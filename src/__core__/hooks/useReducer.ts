import { getCurrentVNode } from '../VNode.utils'
import { IHook } from '../types'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

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

  let data = prevHook.nextHook as IHookDataForUseOptimistic
  if (data) {
    checkHook(data, useReducer)

    data.reducer = reducer
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useReducer,
      vNode,
      value: (init ? init(initialState) : initialState) as S,
      reducer,
      dispatch(...args: any[]) {
        args = data.reducer(data.value, ...args)
        if (!Object.is(data.value, args)) {
          data.value = args
          addVNodeInQueue(data.vNode)
        }
      },
    } satisfies IHookDataForUseOptimistic
  }
  vNode.prevHook = data

  return [data.value, data.dispatch]
}
export { useReducer }
