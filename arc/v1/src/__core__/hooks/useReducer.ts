import { getVNodeForHook, HookData } from '../VNode'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

interface HookDataForUseOptimistic extends HookData {
  reducer: (...a: any[]) => any
  dispatch: (...a: any[]) => void
}

// import { useState } from './useState'

function useReducer<S, A extends [] | [any]>(
  reducer: (prevState: S, ...args: A) => S,
  initialState: S
): [S, (...args: A) => void]
function useReducer<S, I, A extends [] | [any]>(
  reducer: (prevState: S, ...args: A) => S,
  initialArg: I,
  init: (i: I) => S
): [S, (...args: A) => void]
function useReducer<S, I, A extends [] | [any]>(
  reducer: (prevState: S, ...args: A) => S,
  initialState: I,
  init?: (i: I) => S
): [S, (...args: A) => void] {
  const vNode = getVNodeForHook()
  const hookIdx = vNode.hookIdx
  const hooks = vNode.hooks as HookDataForUseOptimistic[]
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
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
    })
  checkHook(data, useReducer, hookIdx, vNode)

  data.reducer = reducer

  return [data.value, data.dispatch]
}
export { useReducer }
