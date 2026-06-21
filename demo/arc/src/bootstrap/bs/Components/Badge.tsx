import { OnlyOne } from '@/types'
import { getVariant, TVariants } from '../utils'

export function Badge<T extends keyof HTMLElementTagNameMap = 'span'>({
  children,
  className,
  as,

  text,
  textHidden,

  pill,

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
  children?: never
  as?: T

  text: string | number
  textHidden?: string | number

  pill?: boolean
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
  if ((text = text != null ? String(text) : text)) {
    const TagName = (as as 'span') || 'span'

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
        {...attrs}
        className={[
          'badge',

          pill && 'rounded-pill',
          variant && 'text-bg-' + variant,

          className,
        ]}
      >
        {text}
        {textHidden != null && (
          <span class='visually-hidden'>{textHidden}</span>
        )}
      </TagName>
    )
  }
}
