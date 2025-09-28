import { IHook } from './types'
import { VNode } from './VNode'
import { JSXNode } from './JSXNode'
import { Fragment } from './components/Fragment'
import { XMLElement, XMLText } from './components/xml'
import { validateTextData } from './components/xml_utils'

let currentVNode: VNode
export function getCurrentVNode() {
  return currentVNode
}
export function setCurrentVNode(vNode: VNode) {
  currentVNode = vNode
}

export function createChildren(vNode: VNode, jsx: any, isDeep?: boolean) {
  if (isDeep || jsx != null) {
    if (Array.isArray(jsx)) {
      if (isDeep) {
        new VNode(vNode, new JSXNode(Fragment, null, [jsx]))
      } else {
        for (let i = 0; i < jsx.length && vNode.alive; ++i) {
          createChildren(vNode, jsx[i], true)
        }
      }
    } else if (vNode.alive) {
      new VNode(vNode, jsx)
    }
  }
}

export function updateVNode(iam: VNode) {
  if (iam.dirty && iam.alive) {
    iam.dirty = false
    const prevVNode = getCurrentVNode()
    setCurrentVNode(iam)
    iam.hookIdx = -1

    const jsx = iam.fc(iam.jsx.props)

    setCurrentVNode(prevVNode)
    compareProps(iam, Array.isArray(jsx) ? jsx : [jsx])
  }
}

function compareProps(iam: VNode, jsxList: any[]) {
  const children = iam.children
  const isArray = Array.isArray
  const is = Object.is

  let i = 0
  for (let l = jsxList.length; i < l; ++i) {
    const jsx = jsxList[i]
    const cNode: VNode | undefined = children[i]
    if (isArray(jsx)) {
      if (cNode && cNode.fc === Fragment) {
        compareProps(cNode, jsx)
      } else {
        destroyVNode(cNode)
        new VNode(iam, new JSXNode(Fragment, null, [jsx]), i)
      }
    } else if (jsx instanceof JSXNode) {
      if (
        cNode &&
        cNode.jsx instanceof JSXNode &&
        is(cNode.jsx.type, jsx.type) &&
        is(cNode.jsx.key, jsx.key)
      ) {
        if (!cNode.fc.compare || !cNode.fc.compare(cNode.jsx, jsx)) {
          cNode.jsx = jsx
          cNode.dirty = true
          updateVNode(cNode)
        }
      } else {
        destroyVNode(cNode)
        new VNode(iam, jsx, i)
      }
    } else {
      if (cNode && cNode.fc === XMLText) {
        if (cNode.jsx !== (cNode.jsx = validateTextData(jsx))) {
          const prevVNode = getCurrentVNode()
          setCurrentVNode(cNode)
          cNode.hookIdx = -1

          XMLText(cNode.jsx)

          setCurrentVNode(prevVNode)
        }
      } else {
        destroyVNode(cNode)
        new VNode(iam, jsx, i)
      }
    }
  }

  for (; children.length > i; ) destroyVNode(children.pop())
}

function destroyVNode(iam?: VNode) {
  if (iam && iam.alive) {
    iam.alive = false

    for (let a = iam.children; a.length > 0; ) destroyVNode(a.pop())

    const prevVNode = getCurrentVNode()
    setCurrentVNode(iam)
    iam.hookIdx = -1
    switch (iam.fc) {
      case XMLText:
        XMLText('', true)
        break
      case XMLElement:
        XMLElement({}, true)
      default:
        for (let v: IHook, a = iam.hooks, i = 0; i < a.length; ++i) {
          ;(v = a[i]).cleanup && v.cleanup(), (v.cleanup = null)
        }
    }
    setCurrentVNode(prevVNode)
  }
}
