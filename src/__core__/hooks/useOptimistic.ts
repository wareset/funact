import { getCurrentVNode } from '../VNode_utils'
import { IHook } from '../types'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

interface IHookDataForUseOptimistic extends IHook {
  valueTemp: any
  isTemp: boolean
  reducer?: (...a: any[]) => any
  dispatch: (action: any) => void
}

function useOptimistic<State>(
  passthrough: State
): [State, (action: State | ((pendingState: State) => State)) => void]
function useOptimistic<State, Action>(
  passthrough: State,
  reducer: (state: State, action: Action) => State
): [State, (action: Action) => void]
function useOptimistic<State, Action>(
  passthrough: State,
  reducer?: (state: State, action: Action) => State
): [
  State,
  (
    | ((action: Action) => void)
    | ((action: State | ((pendingState: State) => State)) => void)
  ),
] {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks as IHookDataForUseOptimistic[] // борьба с ts
  
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useOptimistic,
      vNode,
      value: passthrough,
      valueTemp: passthrough,
      isTemp: false,
      reducer,
      dispatch(action: any) {
        data.valueTemp = data.reducer
          ? data.reducer(data.value, action)
          : typeof action === 'function'
            ? action(data.value)
            : action
        if (!Object.is(data.value, data.valueTemp)) {
          data.isTemp = true
          data.value = data.valueTemp
          addVNodeInQueue(data.vNode)
        }
      },
    })
  checkHook(data, useOptimistic, hookIdx)

  // const state = data.value
  // data.value = passthrough

  data.reducer = reducer

  if (data.isTemp) {
    data.isTemp = false
    data.value = data.valueTemp
  } else {
    data.value = passthrough
  }

  return [data.value, data.dispatch]
}
export { useOptimistic }
