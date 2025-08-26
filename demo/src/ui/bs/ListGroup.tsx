import { classnames } from 'barely-react'

import { Breakpoint, Variant } from './types'
import { isString } from './utils'

export interface ListGroupProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
  flush?: boolean
  numbered?: boolean
  horizontal?: boolean | Breakpoint
}
export function ListGroup({
  children,
  as: TagName = 'ul',
  flush,
  numbered,
  horizontal,
  ...attrs
}: ListGroupProps) {
  if (numbered && TagName === 'ul') TagName = 'ol'
  return (
    <TagName
      {...attrs}
      className={classnames([
        'list-group',
        attrs.className,
        flush && 'list-group-flush',
        numbered && 'list-group-numbered',
        horizontal &&
          'list-group-horizontal' +
            (isString(horizontal) ? '-' + horizontal : '')
      ])}
    >
      {children}
    </TagName>
  )
}

export interface ListGroupItemProps
  extends React.AnchorHTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
  active?: boolean
  disabled?: boolean
  variant?: Variant
}
export function ListGroupItem({
  children,
  as: TagName = 'li',
  active,
  disabled,
  variant,
  ...attrs
}: ListGroupItemProps) {
  if (attrs.href) TagName = 'a'
  return (
    <TagName
      aria-current={active ? true : void 0}
      aria-disabled={disabled ? true : void 0}
      {...attrs}
      className={classnames([
        'list-group-item',
        attrs.className,
        active && 'active',
        disabled && 'disabled',
        attrs.href && 'list-group-item-action',
        variant && 'list-group-item-' + variant
      ])}
    >
      {children}
    </TagName>
  )
}
