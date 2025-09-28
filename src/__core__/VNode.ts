import { IHook, FC } from './types'
import { JSXNode } from './JSXNode'
import { XMLElement, XMLText } from './components/xml'
import { validateTextData } from './components/xml_utils'
import { createChildren, getCurrentVNode, setCurrentVNode } from './VNode_utils'

export class VNode {
  // Это я сделал для себя, для удобного просмотра компонентов в консоли
  _: string
  // VNode живая и не была уничтожена
  alive: boolean
  // VNode нужно возможно нужно перерендерить
  dirty: boolean

  // Функция самого компонента
  fc: FC //| IContext<any>

  jsx: any

  // Глубина и порядок всех компонентов
  readonly deep: number[]

  readonly parent: VNode | null
  readonly children: VNode[]

  // Для работы контекста (createContext and etc.)
  contextValue?: any
  contextUsers?: any[]

  // Для работы с хуками
  hookIdx: number
  readonly hooks: IHook[]

  constructor(parent: VNode | null, jsx: any, index?: number) {
    this._ = ''

    this.alive = true
    this.dirty = false

    this.children = []
    this.parent = parent

    if (parent) {
      const pc = parent.children
      this.deep = parent.deep.slice()
      if (index === void 0) {
        this.deep.push(pc.length)
        pc.push(this)
      } else {
        this.deep.push(index)
        pc[index] = this
      }
    } else {
      this.deep = [0]
    }

    const prevVNode = getCurrentVNode()
    setCurrentVNode(this)
    this.hookIdx = -1
    this.hooks = []

    if (jsx instanceof JSXNode) {
      this.jsx = jsx
      if (typeof jsx.type !== 'string') {
        this.fc = jsx.type
        this._ = 'comp: ' + this.fc.name
      } else {
        this.fc = XMLElement
        this._ = 'node: ' + jsx.type
      }
      createChildren(this, this.fc(jsx.props))
    } else {
      this.jsx = validateTextData(jsx)
      this.fc = XMLText
      this._ = 'text: ' + jsx
      XMLText(jsx)
    }

    setCurrentVNode(prevVNode)
  }
}
