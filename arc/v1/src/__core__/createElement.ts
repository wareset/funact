import { JSXNode } from './JSXNode'

/*@__NO_SIDE_EFFECTS__*/
export function createElement(
  type: JSXNode['type'],
  props?: JSXNode['props'] | null,
  ...children: any[]
) {
  return new JSXNode(type, props, children)
}
