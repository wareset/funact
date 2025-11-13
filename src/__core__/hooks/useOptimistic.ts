import { getCurrentVNode } from '../VNode.utils'
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
): [
  optimisticState: State,
  addOptimistic: (action: State | ((pendingState: State) => State)) => void,
]
function useOptimistic<State, Action>(
  passthrough: State,
  reducer: (state: State, action: Action) => State
): [optimisticState: State, addOptimistic: (action: Action) => void]

function useOptimistic<State, Action>(
  passthrough: State,
  reducer?: (state: State, action: Action) => State
): [
  optimisticState: State,
  addOptimistic:
    | ((action: Action) => void)
    | ((action: State | ((pendingState: State) => State)) => void),
] {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let data = hooks[hookIdx] as IHookDataForUseOptimistic
  if (data) {
    checkHook(data, useOptimistic, hookIdx)

    data.reducer = reducer

    if (data.isTemp) {
      data.isTemp = false
      data.value = data.valueTemp
    } else {
      data.value = passthrough
    }
  } else {
    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useOptimistic,
      vNode,
      value: passthrough,

      valueTemp: passthrough,
      isTemp: false,

      reducer: reducer,
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
    } satisfies IHookDataForUseOptimistic
  }

  return [data.value, data.dispatch]
}
export { useOptimistic }
