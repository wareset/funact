import { TransitionFunction } from './types'
// import { schedule } from './scheduler'

import { getVNodeOnly } from './VNode'
import { addVNodeInQueue } from './scheduler'

export async function startTransition(callback: TransitionFunction) {
  // schedule(callback)
  const vNode = getVNodeOnly()
  await callback()
  // if (vNode) schedule(() => addVNodeInQueue(vNode))
  if (vNode) addVNodeInQueue(vNode)
}

// export function startTransition(callback: TransitionFunction) {
//   // schedule(callback)
//   const vNode = getVNodeOnly()
//   const result = callback()

//   if (vNode) {
//     if (result && typeof result.finally === 'function') {
//       result.finally(function () {
//         addVNodeInQueue(vNode)
//       })
//     } else {
//       addVNodeInQueue(vNode)
//     }
//   }
// }
