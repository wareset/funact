import { FC, Props, Context, ComponentChildren } from './types'

export class JSXNode<P extends Props = Props> {
  type: FC<P> | string | Context
  // key: any
  props: P

  constructor(type: FC<P>, props: P, children: ComponentChildren[])
  constructor(type: string, props: P, children: ComponentChildren[])
  constructor(type: Context, props: P, children: ComponentChildren[])
  constructor(type: any, props: any, children: ComponentChildren[]) {
    if (children.length) {
      props.children = children.length > 1 ? children : children[0]
    }

    this.type = type
    // this.key = key
    this.props = props
  }
}
