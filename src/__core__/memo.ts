// import { JSXNode } from './JSXNode'
import { FC, Comparator } from './types'

type Props = { [key: string]: any }

// function isEqualProps(a: any[], b: any[]) {
//   let res = a.length === b.length
//   if (res) {
//     const is = Object.is
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

function defaultCompare(prevProps: Props, nextProps: Props) {
  let res = Object.keys(prevProps).length === Object.keys(nextProps).length
  if (res && prevProps !== nextProps) {
    const is = Object.is
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
export function memo<T extends FC, C extends Comparator>(fc: T, compare?: C) {
  const memoFc = function (props: Props) {
    return fc(props)
  }
  memoFc.compare = compare || (defaultCompare as Comparator)
  return memoFc
}
