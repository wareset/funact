import { getCurrentVNode } from '../VNode_utils'
import {
  createElementNS,
  validateTextData,
  getParentXMLContext,
  insertAndAddNodeInParentContext,
  removeAndDelNodeInParentContext,
} from './xml_utils'
import { setAttributes, removeEventListeners } from './xml_attrs'
import { useLayoutEffect } from '../hooks/useLayoutEffect'

/*
Вместо создания текстовой ноды сразу, используется тег 'font'.
Это сделано для того, чтобы корректно работать с 'Google translate'
При переводе страницы, 'Google translate' заменяет все текстовые ноды на свои,
и оборачивает их в два тега 'font'.
И для того, чтобы изменения текста на странице отслеживались,
используется такой хак
*/
export function XMLText(value: any, needDestroy?: boolean) {
  const vNode = getCurrentVNode()
  let node = null

  if (needDestroy) {
    const contextValue = vNode.contextValue
    if (contextValue && (node = contextValue.node)) {
      const parentContext = contextValue.parentContext
      removeAndDelNodeInParentContext(node, parentContext, vNode.deep)
    }
  } else if (!vNode.contextValue) {
    const parentContext = getParentXMLContext(vNode)
    if (parentContext && parentContext.node) {
      node = createElementNS('font', parentContext.node)
      node.style.verticalAlign = 'inherit'
      node.textContent = validateTextData(value)
      insertAndAddNodeInParentContext(node, parentContext, vNode.deep)
    }

    vNode.contextValue = {
      node,
      parentContext,
    }
  } else if ((node = vNode.contextValue.node)) {
    const text = node.childNodes.length === 1 && node.childNodes[0]
    value = validateTextData(value)
    text && text.nodeType === 3
      ? ((text as Text).data = value)
      : (node.textContent = value)
  }
}

export function XMLElement(
  props: { [key: string]: any },
  needDestroy?: boolean
) {
  const vNode = getCurrentVNode()
  let node = null

  if (needDestroy) {
    const contextValue = vNode.contextValue
    if (contextValue && (node = contextValue.node)) {
      const parentContext = contextValue.parentContext
      removeAndDelNodeInParentContext(node, parentContext, vNode.deep)
      removeEventListeners(node, contextValue.nodeAttrs)
    }
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
        const parentContext = getParentXMLContext(vNode)
        if (parentContext && parentContext.node) {
          node = createElementNS(tagName, parentContext.node)
          insertAndAddNodeInParentContext(node, parentContext, vNode.deep)
        }

        vNode.contextValue = {
          tempEffectDeps: [props.ref, null],
          nodeAttrs: node ? setAttributes(node, props, {}) : null,

          node,
          childNodes: [],
          childDeeps: [],
          parentContext,
        }
      }
    }
  } else if ((node = vNode.contextValue.node)) {
    const contextValue = vNode.contextValue
    contextValue.nodeAttrs = setAttributes(node, props, contextValue.nodeAttrs)
  }

  /**
   * Помещать хуки в условия, разумеется, не желательно.
   * Но, в этом случае никаких проблем нет.
   * И учитывая, что сайты в целом состоят из сотен и сотен элементов,
   * и компоненты 'XMLElement' будут вызываться множество раз,
   * это небольшая оптимизация
   */
  let tempEffectDeps = vNode.contextValue.tempEffectDeps
  if (tempEffectDeps[0] !== props.ref || tempEffectDeps[1] !== node) {
    vNode.contextValue.tempEffectDeps = tempEffectDeps = [props.ref, node]

    useLayoutEffect(function (): any {
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
    }, tempEffectDeps)
  }

  // if (props.ref) props.ref.current = node
  return props.children
}
