import { classnames } from 'barely-react'

import { Breakpoint, Theme, BackgroundColor } from './types'

import { Collapse, CollapseTrigger, CollapseContent } from './Collapse'

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
  expand?: Breakpoint
  theme: Theme
  bg?: BackgroundColor
}
export function Navbar({
  children,
  as: TagName = 'nav',
  expand,
  theme,
  bg,
  ...attrs
}: NavbarProps) {
  return (
    <TagName
      {...attrs}
      data-bs-theme={theme}
      className={classnames([
        'navbar',
        attrs.className,
        expand && 'navbar-expand-' + expand,
        theme && 'navbar-' + theme,
        bg && 'bg-' + bg,
      ])}
    >
      <Collapse>{children}</Collapse>
    </TagName>
  )
}

export interface NavbarBrandProps
  extends React.AnchorHTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
}
export function NavbarBrand({
  children,
  as: TagName = 'span',
  ...attrs
}: NavbarBrandProps) {
  if (attrs.href) TagName = 'a'
  return (
    <TagName
      {...attrs}
      className={classnames(['navbar-brand', attrs.className])}
    >
      {children}
    </TagName>
  )
}

export interface NavbarTogglerProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children?: never
}
export function NavbarToggler(attrs: NavbarTogglerProps) {
  return (
    <CollapseTrigger
      {...attrs}
      className={classnames(['navbar-toggler', attrs.className])}
    >
      <span className='navbar-toggler-icon'></span>
    </CollapseTrigger>
  )
}

export interface NavbarCollapseProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: any
}
export function NavbarCollapse({ children, ...attrs }: NavbarCollapseProps) {
  return (
    <CollapseContent
      {...attrs}
      className={classnames(['navbar-collapse', attrs.className])}
    >
      {children}
    </CollapseContent>
  )
}

export interface NavbarTextProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
}
export function NavbarText({
  children,
  as: TagName = 'span',
  ...attrs
}: NavbarTextProps) {
  return (
    <TagName
      {...attrs}
      className={classnames(['navbar-text', attrs.className])}
    >
      {children}
    </TagName>
  )
}

export interface NavbarNavProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: 'ul' | 'nav'
  scroll?: boolean
}
export function NavbarNav({
  children,
  as: TagName = 'ul',
  scroll,
  ...attrs
}: NavbarNavProps) {
  return (
    <TagName
      {...attrs}
      className={classnames([
        'navbar-nav',
        attrs.className,
        scroll && 'navbar-nav-scroll',
      ])}
    >
      {children}
    </TagName>
  )
}
