import { VNode } from '../VNode'
import { getCurrentVNode } from '../VNode.utils'
import {
  XMLContext,
  createElementNS,
  validateTextData,
  getParentXMLContext,
  insertAndAddNodeInParentContext,
} from './xml.utils'
import { setAttributes } from './xml.attrs'
import { useLayoutEffect } from '../hooks/useLayoutEffect'

/*
Вместо создания текстовой ноды сразу, используется тег 'font'.
Это сделано для того, чтобы корректно работать с 'Google translate'
При переводе страницы, 'Google translate' заменяет все текстовые ноды на свои,
и оборачивает их в два тега 'font'.
И для того, чтобы изменения текста на странице отслеживались,
используется такой хак
*/
export function XMLText(vNode: VNode) {
  let node: HTMLElement | SVGElement | null = null
  const xmlContext = vNode.xmlContext

  const text = validateTextData(vNode.jsx)
  vNode._ = 'text: ' + text

  if (!xmlContext) {
    if (text) {
      const parentContext = getParentXMLContext(vNode)
      if (parentContext && parentContext.node) {
        node = createElementNS('font', parentContext.node)
        node.style.verticalAlign = 'inherit'
        node.textContent = text
        insertAndAddNodeInParentContext(node, parentContext, vNode)
      }

      vNode.xmlContext = {
        node,
        text,
        parentContext,
      } satisfies XMLContext
    }
  } else if (
    (node = xmlContext.node) &&
    xmlContext.text !== (xmlContext.text = text)
  ) {
    const textNode = node.childNodes.length === 1 && node.childNodes[0]
    textNode && textNode.nodeType === 3
      ? ((textNode as Text).data = text)
      : (node.textContent = text)
  }
}

export function XMLElement(props: { [key: string]: any }) {
  const vNode = getCurrentVNode()
  let node: HTMLElement | SVGElement | null = null
  let xmlContext = vNode.xmlContext

  const ref = props.ref

  if (!xmlContext) {
    const tagName = (vNode.jsx as any).type
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
          insertAndAddNodeInParentContext(node, parentContext, vNode)
        }

        vNode.xmlContext = xmlContext = {
          node,
          attrs: node ? setAttributes(node, props, {}) : {},
          parentContext,
          tempEffectDeps: [ref, null],
          childVNodes: [],
        } satisfies XMLContext
      }
    }
  } else if ((node = xmlContext.node)) {
    xmlContext.attrs = setAttributes(node, props, xmlContext.attrs!)
  }

  /**
   * Помещать хуки в условия, разумеется, нельзя.
   * Но в этом случае, и в данной библиотеке, никаких проблем нет.
   * И учитывая, что сайты в целом состоят из сотен и тысяч элементов,
   * и компоненты 'XMLElement' будут вызываться множество раз,
   * это небольшая оптимизация
   */
  const tempEffectDeps = xmlContext.tempEffectDeps!
  if (
    (ref || tempEffectDeps[0]) &&
    (tempEffectDeps[0] !== ref || tempEffectDeps[1] !== node)
  ) {
    useLayoutEffect(
      function (): any {
        if (ref && node) {
          if (typeof ref === 'function') {
            const cleanup = ref(node)
            return function () {
              cleanup ? cleanup() : ref(null)
            }
          } else {
            ref.current = node
            return function () {
              ref.current = null
            }
          }
        }
      },
      (xmlContext.tempEffectDeps = [ref, node])
    )
  }

  return props.children
}
