import { type VNode } from '../VNode'
import { sortDeeps } from '../utils'
import { XMLElement } from './xml'
import { Portal } from './Portal'

// https://developer.mozilla.org/ru/docs/Web/SVG/Element/foreignObject
const __uri__ = 'http://www.w3.org/'
export const NAMESPACES_URI = {
  __proto__: null,
  // _   : __uri__ + '1999/xhtml',
  svg: __uri__ + '2000/svg',
  math: __uri__ + '1998/Math/MathML',
  xlink: __uri__ + '1999/xlink',
} as const

export function createElementNS(
  tagName: string,
  parentNode: HTMLElement | SVGElement
) {
  return document.createElementNS(
    tagName in NAMESPACES_URI
      ? NAMESPACES_URI[tagName as 'svg']
      : (parentNode && parentNode.localName !== 'foreignObject'
          ? parentNode
          : document.documentElement
        ).namespaceURI,
    tagName
  ) as HTMLElement | SVGElement
}

// export function insertNode(node: Node, pNode: Node, bNode?: Node | null) {
//   pNode.insertBefore(node, bNode || null)
// }

type XMLContext = {
  nodeAttrs: any
  node: HTMLElement | SVGElement
  childNodes: (HTMLElement | SVGElement | null)[]
  childDeeps: number[][]
  parentContext: XMLContext
}

export function getParentXMLContext(vNode: VNode): XMLContext | void {
  for (; (vNode = vNode.parent!); )
    if (vNode.fc === XMLElement || vNode.fc === Portal)
      return vNode.contextValue
}

export function insertAndAddNodeInParentContext(
  node: HTMLElement | SVGElement,
  parentContext: XMLContext,
  nodeDeep: number[]
) {
  const childNodes = parentContext.childNodes
  const childDeeps = parentContext.childDeeps
  let i = childDeeps.length
  for (; i-- > 0; ) if (sortDeeps(childDeeps[i], nodeDeep) < 0) break
  parentContext.node.insertBefore(node, childNodes[++i] || null)
  childNodes.splice(i, 0, node)
  childDeeps.splice(i, 0, nodeDeep)
}

export function removeAndDelNodeInParentContext(
  node: HTMLElement | SVGElement,
  parentContext: XMLContext,
  nodeDeep: number[]
) {
  node.parentNode && node.parentNode.removeChild(node)

  const childNodes = parentContext.childNodes
  const childDeeps = parentContext.childDeeps
  let idx = childDeeps.lastIndexOf(nodeDeep)
  idx === -1 || childDeeps.splice(idx, 1)
  childNodes[idx] === node || (idx = childNodes.lastIndexOf(node))
  idx === -1 || childNodes.splice(idx, 1)
}

export function validateTextData(v: any) {
  const t = typeof v
  return t === 'string' || t === 'number' || t === 'bigint' ? '' + v : ''
}
