import { classnames } from 'barely-react'

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: 'ul' | 'nav'
  pills?: boolean
  fill?: boolean
  justified?: boolean
  tabs?: boolean
}
export function Nav({
  children,
  as: TagName = 'ul',
  pills,
  fill,
  justified,
  tabs,
  ...attrs
}: NavProps) {
  return (
    <TagName
      {...attrs}
      className={classnames([
        'nav',
        attrs.className,
        pills && 'nav-pills',
        fill && 'nav-fill',
        justified && 'nav-justified',
        tabs && 'nav-tabs'
      ])}
    >
      {children}
    </TagName>
  )
}

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: 'li' | 'span'
  dropdown?: boolean
  show?: boolean
}
export function NavItem({
  children,
  as: TagName = 'li',
  dropdown,
  show,
  ...attrs
}: NavItemProps) {
  return (
    <TagName
      {...attrs}
      className={classnames([
        'nav-item',
        attrs.className,
        dropdown && 'dropdown',
        show && 'show'
      ])}
    >
      {children}
    </TagName>
  )
}

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLElement> {
  children?: any
  as?: 'a' | 'span'
  dropdown?: boolean
  active?: boolean
  disabled?: boolean
}
export function NavLink({
  children,
  as: TagName = 'span',
  dropdown,
  active,
  disabled,
  ...attrs
}: NavLinkProps) {
  if (attrs.href) TagName = 'a'
  return (
    <TagName
      aria-current={active ? true : void 0}
      aria-disabled={disabled ? true : void 0}
      {...attrs}
      className={classnames([
        'nav-link',
        attrs.className,
        dropdown && 'dropdown-toggle',
        active && 'active',
        disabled && 'disabled'
      ])}
    >
      {children}
    </TagName>
  )
}
