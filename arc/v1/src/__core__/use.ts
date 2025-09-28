import { Context } from './types'
import { getVNodeOnly } from './VNode'

// type Usable<T> = PromiseLike<T> | Context<T>
// export function use<T>(usable: Usable<T>): T {
//   let vNode = getVNode()
//   if ('then' in usable) {
//     console.log(usable)
//     // TODO
//   } else {
//     for (; (vNode = vNode.parent!); )
//       if (vNode.fc === usable) return vNode.contextValue
//     return usable.defaultValue
//   }
// }

/*@__NO_SIDE_EFFECTS__*/
export function getContext<T>(context: Context<T>): T {
  let vNode = getVNodeOnly()
  for (; (vNode = vNode!.parent!); )
    if (vNode.fc === context) return vNode.contextValue
  return context.defaultValue
}
