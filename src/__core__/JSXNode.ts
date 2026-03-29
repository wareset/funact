import { FC, Props, Context } from './types'

export class JSXNode<P extends Props = any> {
  type: FC<P> | string | Context
  // key: any
  props: P

  constructor(type: FC<P>, props: P)
  constructor(type: string, props: P)
  constructor(type: Context, props: P)
  constructor(type: any, props: any) {
    this.type = type
    // this.key = key
    this.props = props
  }
}
