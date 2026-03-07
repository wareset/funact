import { type VNode } from '../VNode'
import { sortDeeps } from '../utils'
import { XMLElement } from './xml'
import { Portal } from './Portal'
import { removeEventListeners } from './xml.attrs'

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

type VNodeWithXMLContext = VNode & { xmlContext: XMLContext }

export type XMLContext = {
  node: HTMLElement | SVGElement | null
  text?: string
  attrs?: { [key: string]: any }
  parentContext?: XMLContext
  tempEffectDeps?: [any, any]
  childVNodes?: VNodeWithXMLContext[]
}

// @ts-ignore
export function getParentXMLContext(vNode: VNode): XMLContext | undefined {
  for (; (vNode = vNode.parent!); )
    if (vNode.fc === XMLElement || vNode.fc === Portal) return vNode.xmlContext
}

export function insertAndAddNodeInParentContext(
  node: HTMLElement | SVGElement,
  parentContext: XMLContext,
  vNode: VNode
) {
  const pN = parentContext.node
  if (pN) {
    const childVNodes = parentContext.childVNodes!
    let i = childVNodes.length
    for (; i-- > 0; ) if (sortDeeps(childVNodes[i].deep, vNode.deep) < 0) break

    let bN = childVNodes[++i] && (childVNodes[i].xmlContext.node as ChildNode)
    ;(bN && bN.parentNode === pN) || (bN = pN.childNodes[i] || null)

    pN.insertBefore(node, bN)
    childVNodes.splice(i, 0, vNode as VNodeWithXMLContext)
  }
}

function removeAndDelNodeInParentContext(
  node: HTMLElement | SVGElement,
  parentContext: XMLContext,
  vNode: VNode
) {
  const pN = node.parentNode
  if (pN) {
    const childVNodes = parentContext.childVNodes!
    const idx = childVNodes.lastIndexOf(vNode as VNodeWithXMLContext)

    pN && pN === parentContext.node && pN.removeChild(node)
    idx === -1 || childVNodes.splice(idx, 1)
  }
}

export function validateTextData(v: any) {
  const t = typeof v
  return t === 'string' ? v : t === 'number' ? v.toString() : ''
  // return t === 'string' || t === 'number' || t === 'bigint' ? '' + v : ''
}

export function destroyXMLText(vNode: VNode) {
  let node: HTMLElement | SVGElement | null
  const xmlContext = vNode.xmlContext

  if (xmlContext && (node = xmlContext.node)) {
    const parentContext = xmlContext.parentContext!
    removeAndDelNodeInParentContext(node, parentContext, vNode)
  }
}

export function destroyXMLElement(vNode: VNode) {
  let node: HTMLElement | SVGElement | null
  const xmlContext = vNode.xmlContext

  if (xmlContext && (node = xmlContext.node)) {
    const parentContext = xmlContext.parentContext!
    removeAndDelNodeInParentContext(node, parentContext, vNode)
    removeEventListeners(node, xmlContext.attrs)
  }
}
