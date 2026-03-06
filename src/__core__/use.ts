import { Context } from './types'
import { getCurrentVNode } from './VNode.utils'

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

// Функция должна называться use, и поддерживать промисы,
// для передачи в Suspense, когда до него дойдут руки

/*@__NO_SIDE_EFFECTS__*/
export function getContext<T>(context: Context<T>): T {
  let vNode = getCurrentVNode()
  for (; (vNode = vNode!.parent!); )
    if (vNode.fc === context as any) return vNode.contextValue as T
  return context.defaultValue
}
