import { classnames } from 'barely-react'

import { Variant } from './types'

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
  variant?: Variant | 'link'
  outline?: boolean
  size?: 'sm' | 'lg'
  active?: boolean
  disabled?: boolean
}
export function Button({
  children,
  as: TagName = 'button',
  variant,
  outline,
  size,
  active,
  disabled,
  ...attrs
}: ButtonProps) {
  if (attrs.href) TagName = 'a'
  return (
    <TagName
      type={TagName === 'button' ? TagName : void 0}
      role={TagName !== 'button' ? 'button' : void 0}
      aria-pressed={active ? true : void 0}
      aria-disabled={disabled ? true : void 0}
      {...attrs}
      className={classnames([
        'btn',
        attrs.className,
        variant &&
          'btn-' + (outline && variant !== 'link' ? '-outline' : '') + variant,
        size && 'btn-' + size,
        active && 'active',
        disabled && 'disabled'
      ])}
      disabled={disabled ? true : void 0}
    >
      {children}
    </TagName>
  )
}
