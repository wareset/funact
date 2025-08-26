import { getVNodeOnly, type VNode } from '../VNode'
import { Portal } from './Portal'
import { useLayoutEffect } from '../hooks/useLayoutEffect'

import { sortDeeps } from '../utils'
import { createElementNS } from './xml_utils'
import { setAttributes, removeEventListeners } from './xml_attrs'

type XMLContext = {
  node: HTMLElement | SVGElement
  childNodes: (HTMLElement | SVGElement | null)[]
  childDeeps: number[][]
  parentContext?: XMLContext
}

function getParentCtx(vNode: VNode): XMLContext | void {
  for (; (vNode = vNode.parent!); )
    if (vNode.fc === XMLElement || vNode.fc === Portal)
      return vNode.contextValue
}

function insertAndAddNodeInParentContext(
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

function removeAndDelNodeInParentContext(
  node: HTMLElement | SVGElement,
  parentContext: XMLContext | null | undefined,
  nodeDeep: number[]
) {
  node.parentNode && node.parentNode.removeChild(node)
  if (parentContext) {
    const childNodes = parentContext.childNodes
    const childDeeps = parentContext.childDeeps
    let idx = childDeeps.lastIndexOf(nodeDeep)
    idx === -1 || childDeeps.splice(idx, 1)
    childNodes[idx] === node || (idx = childNodes.lastIndexOf(node))
    idx === -1 || childNodes.splice(idx, 1)
  }
}

export function XMLText(data: string, needDestroy?: boolean) {
  const vNode = getVNodeOnly()!
  let node = vNode.domNode
  // console.log('XMLText ' + data)

  if (needDestroy && node) {
    const parentContext = vNode.contextValue.parentContext
    removeAndDelNodeInParentContext(node, parentContext, vNode.deep)
    vNode.domNode = node = null
  } else if (!node && data) {
    const parentContext = getParentCtx(vNode)
    if (parentContext && parentContext.node) {
      node = createElementNS('font', parentContext.node) as HTMLFontElement
      node.style.verticalAlign = 'inherit'
      node.textContent = data
      // node.appendChild(document.createTextNode(data))
      insertAndAddNodeInParentContext(node, parentContext, vNode.deep)
      vNode.domNode = node
      node = null
    }

    vNode.contextValue = {
      parentContext,
    }
  }

  if (node) {
    const text = node.childNodes.length === 1 && node.childNodes[0]
    text && text.nodeType === 3
      ? ((text as Text).data = data)
      : (node.textContent = data)
  }
}

export function XMLElement(
  props: { [key: string]: any },
  needDestroy?: boolean
) {
  const vNode = getVNodeOnly()!
  let node = vNode.domNode
  // console.log('XMLElement ' + vNode.jsx.type)

  if (needDestroy && node) {
    const parentContext = vNode.contextValue.parentContext
    removeAndDelNodeInParentContext(node, parentContext, vNode.deep)
    // vNode.domNodeAttrs = setAttributes(node, {}, vNode.domNodeAttrs || {})
    removeEventListeners(node, vNode.domNodeAttrs)
    vNode.domNode = node = null
  } else if (!vNode.contextValue) {
    const tagName = vNode.jsx.type
    switch (tagName) {
      case 'html':
      case 'body':
      case 'link':
      case 'meta':
      case 'script':
      case 'style':
      case 'title':
        throw 'Tag "' + tagName + '" is not supported yet'
      // document.title = '' + props.children
      default: {
        const parentContext = getParentCtx(vNode)
        if (parentContext && parentContext.node) {
          node = createElementNS(tagName, parentContext.node)
          insertAndAddNodeInParentContext(node, parentContext, vNode.deep)
          vNode.domNode = node
        }

        vNode.contextValue = {
          node,
          childNodes: [],
          childDeeps: [],
          parentContext,
        }
      }
    }
  }

  if (node) {
    vNode.domNodeAttrs = setAttributes(node, props, vNode.domNodeAttrs || {})
  }

  useLayoutEffect(
    function (): any {
      if (node) {
        const ref = props.ref
        if (ref) {
          if (typeof ref === 'function') {
            ref(node)
            return function () {
              ref(null)
            }
          } else {
            ref.current = node
            return function () {
              ref.current = null
            }
          }
        }
      }
    },
    [props.ref, node]
  )

  // if (props.ref) props.ref.current = node
  return props.children
}
