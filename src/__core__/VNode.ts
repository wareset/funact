import { IHook, FC } from './types'
import { JSXNode } from './JSXNode'
import { XMLElement, XMLText } from './components/xml'
import { validateTextData } from './components/xml.utils'
import { createChildren, getCurrentVNode, setCurrentVNode } from './VNode.utils'

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
  readonly headHook: IHook
  prevHook: IHook

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
    this.prevHook = this.headHook = { nextHook: null } as IHook

    if (jsx instanceof JSXNode) {
      if (typeof jsx.type === 'string') {
        this.fc = XMLElement
        this._ = 'elem: ' + jsx.type
      } else {
        this.fc = jsx.type
        this._ = 'comp: ' + this.fc.name
      }
      this.jsx = jsx
      createChildren(this, this.fc(jsx.props))
    } else {
      this.fc = XMLText as any
      this._ = 'text: ' + jsx
      if ((this.jsx = validateTextData(jsx))) {
        XMLText(jsx)
      }
    }

    setCurrentVNode(prevVNode)
  }
}
