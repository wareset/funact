import { OnlyOne } from '@/types'
import { getButtonVariant, TButtonVariants } from '../utils'

export function Button<T extends keyof HTMLElementTagNameMap = 'button'>({
  children,
  className,
  as,

  outline,
  active,
  disabled,

  sm,
  lg,

  variant,
  'variant-primary': variant_primary,
  'variant-secondary': variant_secondary,
  'variant-success': variant_success,
  'variant-info': variant_info,
  'variant-warning': variant_warning,
  'variant-danger': variant_danger,
  'variant-light': variant_light,
  'variant-dark': variant_dark,
  'variant-link': variant_link,

  ...attrs
}: R.JSX.IntrinsicElements[T] & {
  as?: T

  outline?: boolean
  active?: boolean
  disabled?: boolean
} & OnlyOne<{
    sm?: boolean
    lg?: boolean
  }> &
  OnlyOne<{
    variant?: TButtonVariants
    'variant-primary'?: boolean
    'variant-secondary'?: boolean
    'variant-success'?: boolean
    'variant-info'?: boolean
    'variant-warning'?: boolean
    'variant-danger'?: boolean
    'variant-light'?: boolean
    'variant-dark'?: boolean
    'variant-link'?: boolean
  }>) {
  const TagName = (as as 'button') || 'button'

  active = active ? true : void 0
  disabled = disabled ? true : void 0
  variant = getButtonVariant(
    variant_primary,
    variant_secondary,
    variant_success,
    variant_info,
    variant_warning,
    variant_danger,
    variant_light,
    variant_dark,
    variant_link,
    variant
  )

  return (
    <TagName
      type={TagName === 'button' ? TagName : void 0}
      role={TagName !== 'button' ? 'button' : void 0}
      aria-pressed={active}
      aria-disabled={disabled}
      {...attrs}
      className={[
        'btn',

        variant &&
          'btn-' + (outline && variant !== 'link' ? 'outline-' : '') + variant,

        (lg && 'btn-lg') || (sm && 'btn-sm'),

        active && 'active',
        disabled && 'disabled',

        className,
      ]}
      disabled={disabled}
    >
      {children}
    </TagName>
  )
}
