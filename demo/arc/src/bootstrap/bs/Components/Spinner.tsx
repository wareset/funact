import { OnlyOne } from '@/types'
import { getVariant, TVariants } from '../utils'

export function Spinner({
  children,
  className,
  style,

  label,

  grow,
  sm,

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
}: R.JSX.IntrinsicElements['div'] & {
  children?: never

  label?: string

  grow?: boolean
  sm?: boolean
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
  const spinnerType = grow ? 'spinner-grow' : 'spinner-border'

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
    <div
      role='status'
      {...attrs}
      className={[
        spinnerType,
        variant && 'text-' + variant,
        sm && spinnerType + '-sm',
        className,
      ]}
    >
      {label != null && <span class='visually-hidden'>{label}</span>}
    </div>
  )
}
