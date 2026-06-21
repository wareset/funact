import { isString } from '@/utils'
import { OnlyOne } from '@/types'
import { getBreakpoint, TBreakpoints } from '../utils'
import { getVariant, TVariants } from '../utils'

export function ListGroup<T extends keyof HTMLElementTagNameMap = 'ul'>({
  children,
  className,
  as,

  flush,

  horizontal,
  'horizontal-sm': horizontal_sm,
  'horizontal-md': horizontal_md,
  'horizontal-lg': horizontal_lg,
  'horizontal-xl': horizontal_xl,
  'horizontal-xxl': horizontal_xxl,

  ...attrs
}: R.JSX.IntrinsicElements[T] & {
  as?: T

  flush?: boolean
} & OnlyOne<{
    horizontal?: boolean | TBreakpoints
    'horizontal-sm'?: boolean
    'horizontal-md'?: boolean
    'horizontal-lg'?: boolean
    'horizontal-xl'?: boolean
    'horizontal-xxl'?: boolean
  }>) {
  const TagName = (as as 'ul') || 'ul'
  horizontal = getBreakpoint(
    horizontal_sm,
    horizontal_md,
    horizontal_lg,
    horizontal_xl,
    horizontal_xxl,
    horizontal
  )

  return (
    <TagName
      {...attrs}
      className={[
        'list-group',

        flush && 'list-group-flush',
        as === 'ol' && 'list-group-numbered',

        horizontal &&
          'list-group-horizontal' +
            (isString(horizontal) ? '-' + horizontal : ''),

        className,
      ]}
    >
      {children}
    </TagName>
  )
}
ListGroup.Item = ListGroupItem

export function ListGroupItem<T extends keyof HTMLElementTagNameMap = 'li'>({
  children,
  className,
  as,

  active,
  disabled,
  action,

  variant,
  'variant-primary': variant_primary,
  'variant-secondary': variant_secondary,
  'variant-success': variant_success,
  'variant-info': variant_info,
  'variant-warning': variant_warning,
  'variant-danger': variant_danger,
  'variant-light': variant_light,
  'variant-dark': variant_dark,

  ...attrs
}: R.JSX.IntrinsicElements[T] & {
  as?: T

  action?: boolean
  active?: boolean
  disabled?: boolean
} & OnlyOne<{
    variant?: TVariants
    'variant-primary'?: boolean
    'variant-secondary'?: boolean
    'variant-success'?: boolean
    'variant-info'?: boolean
    'variant-warning'?: boolean
    'variant-danger'?: boolean
    'variant-light'?: boolean
    'variant-dark'?: boolean
  }>) {
  const TagName = (as as 'li') || 'li'

  variant = getVariant(
    variant_primary,
    variant_secondary,
    variant_success,
    variant_info,
    variant_warning,
    variant_danger,
    variant_light,
    variant_dark,
    variant
  )

  return (
    <TagName
      aria-current={active ? true : void 0}
      aria-disabled={disabled ? true : void 0}
      {...attrs}
      className={[
        'list-group-item',

        active && 'active',
        disabled && 'disabled',
        action && 'list-group-item-action',

        variant && 'list-group-item-' + variant,

        className,
      ]}
      disabled={disabled}
    >
      {children}
    </TagName>
  )
}
