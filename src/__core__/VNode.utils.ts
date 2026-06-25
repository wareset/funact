import { FC } from './types'
import { VNode } from './VNode'
import { JSXNode } from './JSXNode'
import { Fragment } from './components/Fragment'
import { XMLElement, XMLText } from './components/xml'
import {
  validateTextData,
  destroyXMLText,
  destroyXMLElement,
} from './components/xml.utils'
import {
  addInsertionOrLayoutEffectInQueue,
  addEffectInQueue,
} from './scheduler'
import { useInsertionEffect } from './hooks/useInsertionEffect'
import { useLayoutEffect } from './hooks/useLayoutEffect'
import { useEffect } from './hooks/useEffect'
import { isEqual } from './utils'
import { defaultIsEqual } from './memo'

let currentVNode: VNode
export function getCurrentVNode() {
  return currentVNode
}
export function setCurrentVNode(vNode: VNode) {
  currentVNode = vNode
}

export function createChildren(
  iam: VNode,
  jsx: any,
  index: number,
  isDeep?: 1
) {
  if (Array.isArray(jsx)) {
    if (isDeep) {
      new VNode(iam, new JSXNode(Fragment, { children: jsx }), 1, index)
    } else {
      for (let i = 0; i < jsx.length; ++i) createChildren(iam, jsx[i], i, 1)
    }
  } else if (jsx instanceof JSXNode) {
    new VNode(iam, jsx, 1, index)
  } else if (validateTextData(jsx)) {
    new VNode(iam, jsx, 0, index)
  }
}

export function updateVNode(iam: VNode) {
  if (iam.alive) {
    iam.dirty = false
    const prevVNode = getCurrentVNode()
    setCurrentVNode(iam)
    iam.prevHook = iam.headHook

    const jsx = (iam.fc as FC)((iam.jsx as JSXNode).props)

    setCurrentVNode(prevVNode)
    compareProps(iam, Array.isArray(jsx) ? jsx : [jsx])
  }
}

function compareProps(iam: VNode, jsxList: any[]) {
  const children = iam.children
  const isArray = Array.isArray

  let i = 0
  let jsx: unknown
  let cNode: VNode | null | undefined
  for (; i < jsxList.length; ++i) {
    cNode = children[i]
    jsx = jsxList[i]

    if (jsx instanceof JSXNode) {
      if (
        cNode &&
        cNode.jsx instanceof JSXNode &&
        isEqual(cNode.jsx.type, jsx.type) // &&
        // isEqual(cNode.jsx.key, jsx.key)
      ) {
        if (
          cNode.fc === XMLElement ||
          // !(cNode.fc as FC).compare ||
          !((cNode.fc as FC).compare || defaultIsEqual)(
            cNode.jsx.props,
            jsx.props
          )
        ) {
          if (cNode.jsx.props === jsx.props) throw 'props'
          cNode.jsx = jsx
          updateVNode(cNode)
        }
      } else {
        destroyVNode(cNode)
        new VNode(iam, jsx, 1, i)
      }
    } else if (isArray(jsx)) {
      if (cNode && cNode.fc === Fragment) {
        compareProps(cNode, jsx)
      } else {
        destroyVNode(cNode)
        new VNode(iam, new JSXNode(Fragment, { children: jsx }), 1, i)
      }
    } else {
      if (cNode && cNode.fc === XMLText) {
        cNode.jsx = jsx
        XMLText(cNode)
      } else {
        destroyVNode(cNode)
        if (validateTextData(jsx)) new VNode(iam, jsx, 0, i)
        else children[i] = null
      }
    }
  }

  for (; children.length > i; ) destroyVNode(children.pop())
}

function destroyVNode(iam: VNode | null | undefined) {
  if (iam && iam.alive) {
    // console.log('destroyVNode', iam)
    iam.alive = iam.dirty = false

    // for (let a = iam.children; a.length > 0; ) destroyVNode(a.pop())
    // for (let a = iam.children, i = 0; i < a.length; ++i) destroyVNode(a[i])
    iam.children.forEach(destroyVNode)

    switch (iam.fc) {
      case XMLText:
        destroyXMLText(iam)
        break
      // @ts-ignore
      case XMLElement:
        destroyXMLElement(iam)
      default:
        for (let cleanup, hook = iam.headHook; (hook = hook.nextHook!); ) {
          if ((cleanup = hook.cleanup)) {
            switch (hook.hookType) {
              case useInsertionEffect:
                addInsertionOrLayoutEffectInQueue(hook, 1)
                break
              case useLayoutEffect:
                addInsertionOrLayoutEffectInQueue(hook, 0)
                break
              case useEffect:
                addEffectInQueue(hook)
                break
              default:
                ;(hook.cleanup = null), cleanup()
            }
          }
        }
    }
  }
}
