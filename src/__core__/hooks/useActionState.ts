import { checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'
import { addVNodeInQueue, schedule } from '../scheduler'

import { IHook } from '../types'

interface IHookDataForUseActionState extends IHook {
  valueTemp: any
  action: any
  pending: boolean
  queue: [any, any][]
  run: () => void
  then: (state: any) => void
  dispatch: (payload?: any) => void
}

function useActionState<State>(
  action: (state: Awaited<State>) => State | Promise<State>,
  initialState: Awaited<State>
  //   permalink?: string
): [state: Awaited<State>, formAction: () => void, isPending: boolean]
function useActionState<State, Payload>(
  action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
  initialState: Awaited<State>
  //   permalink?: string
): [
  state: Awaited<State>,
  formAction: (payload: Payload) => void,
  isPending: boolean,
]

function useActionState<State, Payload>(
  action: (state: Awaited<State>, payload?: Payload) => State | Promise<State>,
  initialState: Awaited<State>
  //   permalink?: string
): [
  state: Awaited<State>,
  formAction: (payload?: Payload) => void,
  isPending: boolean,
] {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook as IHookDataForUseActionState
  if (hook) {
    checkHook(hook, useActionState)
    hook.action = action
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useActionState,
      vNode,
      value: initialState,

      valueTemp: initialState,
      action,
      pending: false,
      queue: [],
      run() {
        if (hook.vNode.alive) {
          const item = hook.queue.shift()!
          const res = item[0](hook.valueTemp, item[1])
          if (res == null || typeof res.then !== 'function') hook.then(res)
          else res.then(hook.then)
        }
      },
      then(state: any) {
        if (hook.vNode.alive) {
          hook.valueTemp = state
          if (hook.queue.length) schedule(hook.run)
          else {
            hook.pending = false
            ;(hook.value = state), addVNodeInQueue(hook.vNode)
          }
        }
      },
      dispatch(payload?: Payload) {
        if (hook.vNode.alive) {
          hook.queue.push([hook.action, payload])
          if (!hook.pending) {
            hook.pending = true
            addVNodeInQueue(hook.vNode), schedule(hook.run)
          }
        }
      },
    } satisfies IHookDataForUseActionState
  }
  vNode.prevHook = hook

  return [hook.value, hook.dispatch, hook.pending]
}
export { useActionState }
