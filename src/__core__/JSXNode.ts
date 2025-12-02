import { FC } from './types'

export class JSXNode {
  type: FC | string
  // key: any
  props: { [key: string]: any }

  constructor(
    type: JSXNode['type'],
    props: JSXNode['props'] | null | undefined,
    children: any[]
  ) {
    // const { key, ...props } = properties || {}
    props || (props = {})

    if (children.length) {
      props.children = children.length > 1 ? children : children[0]
    }

    this.type = type
    // this.key = key
    this.props = props
  }
}
