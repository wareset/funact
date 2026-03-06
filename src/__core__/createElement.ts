import { FC, Props, ComponentChildren } from './types'

// export class JSXNode {
//   type: FC | string
//   // key: any
//   props: { [key: string]: any }

//   constructor(
//     type: JSXNode['type'],
//     props: JSXNode['props'] | null | undefined,
//     children: any[]
//   ) {
//     // const { key, ...props } = properties || {}
//     props || (props = {})

//     if (children.length) {
//       props.children = children.length > 1 ? children : children[0]
//     }

//     this.type = type
//     // this.key = key
//     this.props = props
//   }
// }

export interface JSXNode<P extends Props = any> {
  $$: 'JSX'
  type: FC<P> | string
  // key: any
  props: P
}

export function isJSXNode(thing: any): thing is JSXNode {
  return thing != null && thing.$$ === 'JSX'
}

/*@__NO_SIDE_EFFECTS__*/
function createElement(
  type: FC | string,
  props?: Props | null | undefined,
  ...children: ComponentChildren[]
): JSXNode {
  props || (props = {})
  if (children.length) {
    props.children = children.length > 1 ? children : children[0]
  }
  return { $$: 'JSX', type, props }
}
export { createElement }
