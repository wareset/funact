import { getCurrentVNode } from '../VNode.utils'
// import { XMLContext } from './xml.utils'

export function Portal(props: {
  domNode: HTMLElement | SVGElement
  children?: any
}) {
  const vNode = getCurrentVNode()
  const domNode = props.domNode

  const xmlContext = vNode.xmlContext

  if (!xmlContext) {
    vNode.xmlContext = {
      node: domNode,
      childVNodes: [],
    }
  } else if (xmlContext.node !== domNode) {
    const oldNode = xmlContext.node!
    if (oldNode.namespaceURI !== domNode.namespaceURI) {
      throw 'Portal: incorrect namespaceURI'
    }
    xmlContext.node = domNode
    for (let node, a = xmlContext.childVNodes!, i = 0; i < a.length; ++i) {
      node = a[i].xmlContext.node!
      if (node.parentNode === oldNode) domNode.appendChild(node)
      else throw 'Portal: wrong parent'
    }
  }

  return props.children
}
