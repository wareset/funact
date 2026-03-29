// import { JSXNode } from './JSXNode'
import { FC, Comparator, Props } from './types'
import { is } from './utils'

// function isEqualProps(a: any[], b: any[]) {
//   let res = a.length === b.length
//   if (res) {
//     for (let ai: any, bi: any, i = a.length; i-- > 0; ) {
//       ai = a[i]
//       bi = b[i]
//       if (ai instanceof JSXNode) {
//         if (
//           !(bi instanceof JSXNode) ||
//           ai.type !== bi.type ||
//           ai.key !== bi.key ||
//           !defaultCompare(ai.props, bi.props)
//         ) {
//           res = false
//           break
//         }
//       } else if (!is(ai, bi)) {
//         res = false
//         break
//       }
//     }
//   }
//   return res
// }

export function defaultIsEqual(prevProps: Props, nextProps: Props) {
  let res = Object.keys(prevProps).length === Object.keys(nextProps).length
  if (res && prevProps !== nextProps) {
    for (const k in prevProps) {
      if (!(k in nextProps && is(prevProps[k], nextProps[k]))) {
        res = false
        break
      }
    }
  }

  return res
}

/*@__NO_SIDE_EFFECTS__*/
export function memo<T extends FC, C extends Comparator>(
  fc: T,
  compare?: C
): FC & { compare?: Comparator } {
  function Memo(props: Props) {
    return fc(props)
  }
  ;(Memo as any).compare = compare || (defaultIsEqual as Comparator)
  return Memo
}
