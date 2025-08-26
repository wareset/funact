import { classnames } from 'barely-react'

import { Breakpoint } from './types'
import { isString } from './utils'

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
}
export function Dropdown({ children, as: TagName, ...attrs }: DropdownProps) {
  if (TagName) {
    return (
      <TagName {...attrs} className={classnames(['dropdown', attrs.className])}>
        {children}
      </TagName>
    )
  } else {
    return children
  }
}

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  dark?: boolean
  show?: boolean
  start?: boolean | Breakpoint
  end?: boolean | Breakpoint
}
export function DropdownMenu({
  children,
  dark,
  show,
  start,
  end,
  ...attrs
}: DropdownMenuProps) {
  return (
    <ul
      {...attrs}
      className={classnames([
        'dropdown-menu',
        attrs.className,
        dark && 'dropdown-menu-dark',
        show && 'show',
        start &&
          'dropdown-menu' + (isString(start) ? '-' + start : '') + '-start',
        end && 'dropdown-menu' + (isString(end) ? '-' + end : '') + '-end'
      ])}
    >
      {children}
    </ul>
  )
}

export interface DropdownItemProps
  extends React.AnchorHTMLAttributes<HTMLElement> {
  children?: any
  active?: boolean
  disabled?: boolean
  text?: boolean
}
export function DropdownItem({
  children,
  active,
  disabled,
  text,
  ...attrs
}: DropdownItemProps) {
  const TagName = attrs.href ? 'a' : 'span'
  return (
    <li>
      <TagName
        {...attrs}
        className={classnames([
          text ? 'dropdown-item-text' : 'dropdown-item',
          attrs.className,
          active && 'active',
          disabled && 'disabled'
        ])}
      >
        {children}
      </TagName>
    </li>
  )
}

export interface DropdownHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
}
export function DropdownHeader({
  children,
  as: TagName = 'div',
  ...attrs
}: DropdownHeaderProps) {
  return (
    <li>
      <TagName
        {...attrs}
        className={classnames(['dropdown-header', attrs.className])}
      >
        {children}
      </TagName>
    </li>
  )
}

export interface DropdownDividerProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: never
}
export function DropdownDivider(attrs: DropdownDividerProps) {
  return (
    <li>
      <hr
        {...attrs}
        className={classnames(['dropdown-divider', attrs.className])}
      />
    </li>
  )
}
