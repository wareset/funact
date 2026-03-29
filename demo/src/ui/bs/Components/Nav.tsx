import { isString } from '@/utils'

export function Nav<T extends 'ul' | 'nav' = 'ul'>({
  children,
  className,
  as,

  tabs,
  pills,
  underline,
  fill,
  justified,
  ...attrs
}: R.JSX.Attributes<HTMLElementTagNameMap[T]> & {
  as?: T

  tabs?: boolean
  pills?: boolean
  underline?: boolean
  fill?: boolean
  justified?: boolean
}) {
  const TagName = (as as 'ul') || 'ul'
  return (
    <TagName
      {...attrs}
      className={[
        'nav',

        tabs && 'nav-tabs',
        pills && 'nav-pills',
        underline && 'nav-underline',
        fill && 'nav-fill',
        justified && 'nav-justified',

        className,
      ]}
    >
      {children}
    </TagName>
  )
}

export function NavItem<T extends 'li' | 'span' = 'li'>({
  children,
  className,
  as,

  dropdown,
  show,
  ...attrs
}: R.JSX.Attributes<HTMLElementTagNameMap[T]> & {
  as?: 'li' | 'span'

  dropdown?: boolean
  show?: boolean
}) {
  const TagName = (as as 'li') || 'li'
  return (
    <TagName
      {...attrs}
      className={[
        'nav-item',

        dropdown && 'dropdown',
        show && 'show',

        className,
      ]}
    >
      {children}
    </TagName>
  )
}

export function NavLink({
  children,
  className,

  href,

  dropdown,
  active,
  disabled,
  ...attrs
}: R.JSX.Attributes<HTMLAnchorElement> & {
  href?: string

  dropdown?: boolean
  active?: boolean
  disabled?: boolean
}) {
  const TagName = (isString(href) ? 'a' : ((href = void 0), 'span')) as 'a'
  return (
    <TagName
      aria-current={active ? true : void 0}
      aria-disabled={disabled ? true : void 0}
      {...attrs}
      href={href}
      className={R.classnames([
        'nav-link',

        dropdown && 'dropdown-toggle',
        active && 'active',
        disabled && 'disabled',

        className,
      ])}
    >
      {children}
    </TagName>
  )
}
