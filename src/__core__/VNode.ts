import { JSXNode } from './JSXNode'

// import { useContext } from './hooks/useContext'
import { useEffect } from './hooks/useEffect'
import { useLayoutEffect } from './hooks/useLayoutEffect'
import { useInsertionEffect } from './hooks/useInsertionEffect'

import { validateTextData } from './components/xml_utils'
import { Fragment } from './components/Fragment'
import { XMLElement, XMLText } from './components/XML'

// let STATE_FOR_HOOKS: [number, VNode] = [0, null as unknown as VNode]
// export function getHookIndexAndVNode() {
//   ++STATE_FOR_HOOKS[0]
//   return STATE_FOR_HOOKS
// }

let CURRENT_V_NODE: VNode //= { hookIdx: -1 } as VNode
export function getVNodeForHook(): VNode {
  ++CURRENT_V_NODE.hookIdx
  return CURRENT_V_NODE
}

export function getVNodeOnly(): VNode | undefined {
  return CURRENT_V_NODE
}

export function setVNodeOnly(vNode: VNode | undefined) {
  CURRENT_V_NODE = vNode!
}

export class VNode {
  _name: string
  fc: ((props: any) => any) | (() => any)

  jsx: any

  alive: boolean
  dirty: boolean

  // readonly root!: VNode
  readonly children: VNode[]
  readonly parent: VNode | null

  readonly deep: number[]

  hookIdx: number
  readonly hooks: any[]

  domNode?: HTMLElement | SVGElement | null
  domNodeAttrs?: any

  contextValue?: any
  contextUsers?: ((v: any) => any)[]

  constructor(parent: VNode | null, jsx: any, index?: number) {
    this._name = ''
    // this._name = (this.fc =
    //   jsx instanceof JSXNode
    //     ? ((this.props = jsx.props), typeof jsx.type === 'string')
    //       ? ((jsx.props.this = jsx.type), XMLElement)
    //       : jsx.type
    //     : ((this.props = jsx), XMLText)).name

    this.alive = true
    this.dirty = false

    this.children = []

    this.hooks = []

    if ((this.parent = parent)) {
      const pc = parent.children
      if (index === void 0) {
        ;(this.deep = parent.deep.slice()).push(pc.length)
        pc.push(this)
      } else {
        ;(this.deep = parent.deep.slice()).push(index)
        pc[index] = this
      }
    } else {
      this.deep = [0]
    }

    const prevVNode = CURRENT_V_NODE
    CURRENT_V_NODE = this
    this.hookIdx = -1
    // const prevStateForHooks = STATE_FOR_HOOKS
    // STATE_FOR_HOOKS = [-1, this]
    if (jsx instanceof JSXNode) {
      this.fc = typeof jsx.type === 'string' ? XMLElement : jsx.type
      this.jsx = jsx
      createChildren(this, this.fc(jsx.props))
    } else {
      this.fc = XMLText
      if ((this.jsx = validateTextData(jsx))) XMLText(this.jsx)
    }
    this._name = this.fc.name
    // STATE_FOR_HOOKS = prevStateForHooks
    CURRENT_V_NODE = prevVNode
  }
}

function createChildren(iam: VNode, jsx: any, isDeep?: boolean) {
  if (isDeep || jsx != null)
    if (Array.isArray(jsx)) {
      if (isDeep) {
        new VNode(iam, new JSXNode(Fragment, null, [jsx]))
      } else {
        for (let i = 0; i < jsx.length && iam.alive; ++i) {
          createChildren(iam, jsx[i], true)
        }
      }
    } else if (iam.alive) {
      new VNode(iam, jsx)
    }
}

export function updateVNode(iam: VNode) {
  if (iam.dirty && iam.alive) {
    iam.dirty = false
    const prevVNode = CURRENT_V_NODE
    CURRENT_V_NODE = iam
    iam.hookIdx = -1
    // const prevStateForHooks = STATE_FOR_HOOKS
    // STATE_FOR_HOOKS = [-1, iam]
    const jsx = iam.fc(iam.jsx.props)
    // STATE_FOR_HOOKS = prevStateForHooks
    CURRENT_V_NODE = prevVNode
    compareProps(iam, Array.isArray(jsx) ? jsx : [jsx])
  }
}

function isEqualProps(a: any[], b: any[]) {
  let res = a.length === b.length
  if (res) {
    const is = Object.is
    for (let ai: any, bi: any, i = a.length; i-- > 0; ) {
      ai = a[i]
      bi = b[i]
      if (ai instanceof JSXNode) {
        if (
          !(bi instanceof JSXNode) ||
          ai.type !== bi.type ||
          ai.key !== bi.key ||
          bi._pListChanged ||
          bi._cListChanged ||
          (bi._pListChanged === null
            ? (bi._pListChanged = !isEqualProps(ai._pList, bi._pList))
            : false) ||
          (bi._cListChanged === null
            ? (bi._cListChanged = !isEqualProps(ai._cList, bi._cList))
            : false)
        ) {
          res = false
          break
        }
      } else if (!is(ai, bi)) {
        res = false
        break
      }
    }
  }
  return res
}

function compareProps(iam: VNode, jsxList: any[]) {
  const children = iam.children
  const isArray = Array.isArray

  let i = 0
  for (let l = jsxList.length; i < l; ++i) {
    const jsx = jsxList[i]
    const cNode: VNode | undefined = children[i]
    if (isArray(jsx)) {
      if (cNode && cNode.fc === Fragment) {
        compareProps(cNode, jsx)
      } else {
        cNode && destroyVNode(cNode)
        new VNode(iam, new JSXNode(Fragment, null, [jsx]), i)
      }
    } else if (jsx instanceof JSXNode) {
      if (
        cNode &&
        cNode.jsx instanceof JSXNode &&
        cNode.jsx.type === jsx.type &&
        cNode.jsx.key === jsx.key
      ) {
        if (
          cNode.fc === XMLElement ||
          jsx._pListChanged ||
          (jsx._pListChanged === null
            ? (jsx._pListChanged = !isEqualProps(cNode.jsx._pList, jsx._pList))
            : false)
        ) {
          cNode.jsx = jsx
          cNode.dirty = true
          updateVNode(cNode)
        } else if (
          jsx._cListChanged ||
          (jsx._cListChanged === null
            ? (jsx._cListChanged = !isEqualProps(cNode.jsx._cList, jsx._cList))
            : false)
        ) {
          cNode.jsx = jsx
          // if (cNode.fc !== XMLElement) {
          cNode.dirty = true
          updateVNode(cNode)
          // } else {
          //   compareProps(cNode, jsx._cList)
          // }
        }
      } else {
        cNode && destroyVNode(cNode)
        new VNode(iam, jsx, i)
      }
    } else {
      if (cNode && cNode.fc === XMLText) {
        if (cNode.jsx !== (cNode.jsx = validateTextData(jsx))) {
          const prevVNode = CURRENT_V_NODE
          CURRENT_V_NODE = cNode
          cNode.hookIdx = -1
          // const prevStateForHooks = STATE_FOR_HOOKS
          // STATE_FOR_HOOKS = [-1, cNode]
          XMLText(cNode.jsx)
          // STATE_FOR_HOOKS = prevStateForHooks
          CURRENT_V_NODE = prevVNode
        }
      } else {
        cNode && destroyVNode(cNode)
        new VNode(iam, jsx, i)
      }
    }
  }

  for (; children.length > i; ) destroyVNode(children.pop()!)
}

export function destroyVNodeChildren(iam: VNode) {
  for (let a = iam.children; a.length > 0; ) destroyVNode(a.pop()!)
}

export function destroyVNode(iam: VNode) {
  if (iam.alive) {
    iam.alive = false
    destroyVNodeChildren(iam)
    const prevVNode = CURRENT_V_NODE
    CURRENT_V_NODE = iam
    iam.hookIdx = -1
    // const prevStateForHooks = STATE_FOR_HOOKS
    // STATE_FOR_HOOKS = [-1, iam]
    switch (iam.fc) {
      case XMLText:
        XMLText('', true)
        break
      case XMLElement:
        XMLElement({}, true)
      default:
        for (let v: any, a = iam.hooks, i = 0; i < a.length; ++i) {
          v = a[i]
          switch (v.hook) {
            // case useContext:
            //   v.unsub()
            //   break
            case useEffect:
            case useLayoutEffect:
            case useInsertionEffect:
              v.cleanup && v.cleanup(), (v.cleanup = null)
              break
          }
        }
    }
    // STATE_FOR_HOOKS = prevStateForHooks
    CURRENT_V_NODE = prevVNode
  }
}
