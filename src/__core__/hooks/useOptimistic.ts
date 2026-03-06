import { IHook, checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addVNodeInQueue } from '../scheduler'
import { is } from '../utils'

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
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook as IHookDataForUseOptimistic
  if (hook) {
    checkHook(hook, useOptimistic)
    hook.reducer = reducer

    if (hook.isTemp) {
      hook.isTemp = false
      hook.value = hook.valueTemp
    } else {
      hook.value = passthrough
    }
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useOptimistic,
      vNode,
      value: passthrough,

      valueTemp: passthrough,
      isTemp: false,

      reducer,
      dispatch(action: any) {
        if (hook.vNode.alive) {
          hook.valueTemp = hook.reducer
            ? hook.reducer(hook.value, action)
            : typeof action === 'function'
              ? action(hook.value)
              : action
          if (!is(hook.value, hook.valueTemp)) {
            hook.isTemp = true
            hook.value = hook.valueTemp
            addVNodeInQueue(hook.vNode)
          }
        }
      },
    } satisfies IHookDataForUseOptimistic
  }
  vNode.prevHook = hook

  return [hook.value, hook.dispatch]
}
export { useOptimistic }
