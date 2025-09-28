import { TransitionFunction } from './types'
// import { schedule } from './scheduler'

import { getCurrentVNode } from './VNode_utils'
import { addVNodeInQueue } from './scheduler'

// Данная функция еще не закончена
// Нужно больше экспериментов с ней

export async function startTransition(callback: TransitionFunction) {
  // schedule(callback)
  const vNode = getCurrentVNode()
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
