import { FC, Context } from './types'
import { IHook } from './hooks.utils'
import { XMLElement, XMLText } from './components/xml'
import { createChildren, getCurrentVNode, setCurrentVNode } from './VNode.utils'

export class VNode {
  // Это я сделал для себя, для удобного просмотра компонентов в консоли
  _: string
  // VNode живая и не была уничтожена
  alive: boolean
  // VNode нужно возможно нужно перерендерить
  dirty: boolean

  // Функция самого компонента
  fc: FC | typeof XMLText | Context<any>

  jsx: unknown

  // Глубина и порядок всех компонентов
  readonly deep: number[]

  readonly parent: VNode | null
  readonly children: (VNode | null | undefined)[]

  // Для работы контекста (createContext and etc.)
  contextValue?: unknown
  contextUsers?: any[]

  // Для работы с хуками
  declare readonly headHook: IHook
  declare prevHook: IHook

  constructor(parent: VNode | null, jsx: any, isJSXNode: 1 | 0, index: number) {
    this._ = ''
    this.jsx = jsx

    this.alive = true
    this.dirty = false

    this.children = []

    if ((this.parent = parent)) {
      parent.children[index] = this
      ;(this.deep = parent.deep.slice()).push(index)
    } else {
      this.deep = [index]
    }

    // if (jsx instanceof JSXNode) {
    if (isJSXNode) {
      const prevVNode = getCurrentVNode()
      setCurrentVNode(this)
      this.prevHook = this.headHook = { nextHook: null } as IHook

      if (typeof jsx.type === 'string') {
        this.fc = XMLElement
        this._ = 'elem: ' + jsx.type
      } else {
        this.fc = jsx.type
        this._ = 'comp: ' + this.fc.name
      }
      createChildren(this, this.fc(jsx.props), 0)

      setCurrentVNode(prevVNode)
    } else {
      this.fc = XMLText
      XMLText(this)
    }
  }
}
