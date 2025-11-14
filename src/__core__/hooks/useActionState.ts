import { getCurrentVNode } from '../VNode.utils'
import { IHook } from '../types'
import { checkHook } from '../utils'
import { addVNodeInQueue, schedule } from '../scheduler'

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

  let data = prevHook.nextHook as IHookDataForUseActionState
  if (data) {
    checkHook(data, useActionState)

    data.action = action
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useActionState,
      vNode,
      value: initialState,

      valueTemp: initialState,
      action,
      pending: false,
      queue: [],
      run() {
        const item = data.queue.shift()!
        const res = item[0](data.valueTemp, item[1])
        if (res == null || typeof res.then !== 'function') data.then(res)
        else res.then(data.then)
      },
      then(state: any) {
        data.valueTemp = state
        if (data.queue.length) schedule(data.run)
        else {
          data.pending = false
          ;(data.value = state), addVNodeInQueue(data.vNode)
        }
      },
      dispatch(payload?: Payload) {
        data.queue.push([data.action, payload])
        if (!data.pending) {
          data.pending = true
          addVNodeInQueue(data.vNode), schedule(data.run)
        }
      },
    } satisfies IHookDataForUseActionState
  }
  vNode.prevHook = data

  return [data.value, data.dispatch, data.pending]
}
export { useActionState }
