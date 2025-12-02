import { getCurrentVNode } from '../VNode.utils'
import { XMLContext } from './xml.utils'

export function Portal(props: {
  domNode: HTMLElement | SVGElement
  children?: any
}) {
  const vNode = getCurrentVNode()
  const domNode = props.domNode
  let contextValue = vNode.contextValue as XMLContext

  if (!contextValue) {
    vNode.contextValue = {
      node: domNode,
      childVNodes: [],
    } satisfies XMLContext
  } else if (contextValue.node !== domNode) {
    const oldNode = contextValue.node
    if (oldNode!.namespaceURI !== domNode.namespaceURI) {
      throw 'Portal: incorrect namespaceURI'
    }
    contextValue.node = domNode
    for (let node, a = contextValue.childVNodes!, i = 0; i < a.length; ++i) {
      node = a[i].contextValue.node!
      if (node.parentNode === oldNode) domNode.appendChild(node)
      else throw 'Portal: wrong parent'
    }
  }

  return props.children
}
