import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'
import { addVNodeInQueue, schedule } from '../scheduler'

function useActionState<State>(
  action: (state: Awaited<State>) => State | Promise<State>,
  initialState: Awaited<State>
  //   permalink?: string
): [state: Awaited<State>, dispatch: () => void, isPending: boolean]
function useActionState<State, Payload>(
  action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
  initialState: Awaited<State>
  //   permalink?: string
): [
  state: Awaited<State>,
  dispatch: (payload: Payload) => void,
  isPending: boolean,
]

// function useActionState<State, Payload>(
//   action: (state: Awaited<State>, payload?: Payload) => State | Promise<State>,
//   initialState: Awaited<State>
//   //   permalink?: string
// ): [
//   state: Awaited<State>,
//   dispatch: (payload?: Payload) => void,
//   isPending: boolean,
// ] {
//   const vNode = getVNodeForHook()
//   const idx = vNode.hookIdx
//   const hooks = vNode.hooks
//   const data =
//     hooks[idx] ||
//     (hooks[idx] = {
//       idx,
//       hook: useActionState,
//       vNode,
//       state: initialState,
//       action,
//       pending: false,
//       payloads: [],
//       running: false,
//       run() {
//         data.running = true
//         const res = data.action(data.state, data.payloads.shift())
//         if (res == null || typeof res.then !== 'function') data.then(res)
//         else res.then(data.then)
//       },
//       then(state: any) {
//         data.state = state
//         data.running = false
//         if (data.payloads.length) data.run()
//         else (data.pending = false), addVNodeInQueue(data.vNode)
//       },
//       dispatch(payload?: Payload) {
//         data.payloads.push(payload)
//         data.pending || (data.pending = true), addVNodeInQueue(data.vNode)
//       },
//     })
//   checkHook(data, useActionState, idx)

//   const state = data.state
//   const pending = data.pending

//   data.action = action
//   if (data.pending && !data.running && data.payloads.length) data.run()

//   return [state, data.dispatch, pending] as any
// }
// export { useActionState }

function useActionState<State, Payload>(
  action: (state: Awaited<State>, payload?: Payload) => State | Promise<State>,
  initialState: Awaited<State>
  //   permalink?: string
): [
  state: Awaited<State>,
  dispatch: (payload?: Payload) => void,
  isPending: boolean,
] {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useActionState,
      vNode,
      temp: initialState,
      state: initialState,
      action,
      pending: false,
      queue: [],
      run() {
        const item = data.queue.shift()
        const res = item[0](data.temp, item[1])
        if (res == null || typeof res.then !== 'function') data.then(res)
        else res.then(data.then)
      },
      then(state: any) {
        data.temp = state
        if (data.queue.length) schedule(data.run)
        else {
          data.pending = false
          ;(data.state = state), addVNodeInQueue(data.vNode)
        }
      },
      dispatch(payload?: Payload) {
        data.queue.push([data.action, payload])
        if (!data.pending) {
          data.pending = true
          addVNodeInQueue(data.vNode), schedule(data.run)
        }
      },
    })
  checkHook(data, useActionState, idx)

  data.action = action

  return [data.state, data.dispatch, data.pending]
}
export { useActionState }
