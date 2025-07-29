import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'
import { addVNodeInQueue } from '../scheduler'

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
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useOptimistic,
      vNode,
      state: passthrough,
      stateTemp: passthrough,
      isTemp: false,
      reducer,
      dispatch(action: any) {
        data.stateTemp = data.reducer
          ? data.reducer(data.state, action)
          : typeof action === 'function'
            ? action(data.state)
            : action
        if (!Object.is(data.state, data.stateTemp)) {
          data.isTemp = true
          data.state = data.stateTemp
          addVNodeInQueue(data.vNode)
        }
      },
    })
  checkHook(data, useOptimistic, idx)

  // const state = data.state
  // data.state = passthrough

  data.reducer = reducer

  if (data.isTemp) {
    data.isTemp = false
    data.state = data.stateTemp
  } else {
    data.state = passthrough
  }

  return [data.state, data.dispatch]
}
export { useOptimistic }
