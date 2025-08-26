// import { stylesheet } from './components/xml_attrs'

export class JSXNode {
  type: ((props: any) => any) | (() => any) | string
  key: any
  props: { [key: string]: any }
  _pList: any[]
  _cList: any[]
  _pListChanged: null | boolean
  _cListChanged: null | boolean

  constructor(
    type: JSXNode['type'],
    properties: JSXNode['props'] | null | undefined,
    children: JSXNode['_cList']
  ) {
    let key: any
    const props: { [key: string]: any } = {}
    const propsList: any[] = []

    if (properties) {
      for (let a = Object.keys(properties), i = 0, l = a.length; i < l; ++i) {
        const k = a[i]
        let v = properties[k]

        switch (k) {
          case 'key':
            key = v
            break
          case 'children':
            children.length || (children = Array.isArray(v) ? v : [v])
            break
          // case 'style':
          //   if (typeof type === 'string') v = stylesheet(v)
          default:
            props[k] = v
            propsList.push(k, v)
        }
      }
    }

    if (children.length) {
      props.children = children.length > 1 ? children : children[0]
    }

    this.type = type
    this.key = key
    this.props = props
    this._pList = propsList
    this._cList = children
    this._pListChanged = null
    this._cListChanged = null
  }
}
