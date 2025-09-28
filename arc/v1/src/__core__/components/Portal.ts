import { getVNodeOnly } from '../VNode'

export function Portal(props: {
  domNode: HTMLElement | SVGElement
  children?: any
}) {
  const vNode = getVNodeOnly()!
  const domNode = props.domNode

  if (!vNode.contextValue) {
    vNode.contextValue = {
      node: domNode,
      childNodes: [],
      childDeeps: [],
    }
  } else if (vNode.contextValue.node !== domNode) {
    if (vNode.contextValue.node.namespaceURI !== domNode.namespaceURI) {
        throw new Error('Portal: incorrect namespaceURI')
    }
    vNode.contextValue.node = domNode
    for (let a = vNode.contextValue.childNodes, i = 0; i < a.length; ++i) {
      domNode.appendChild(a[i])
    }
  }

  return props.children
}
