import { isString } from '@/utils'
import { OnlyOne } from '@/types'
import { getBreakpoint, TBreakpoints } from '../utils'
import { getVariant, TVariants } from '../utils'

export function Table({
  children,
  className,

  sm,
  hover,
  'caption-top': caption_top,

  striped,
  'striped-columns': striped_columns,

  bordered,
  borderless,

  variant,
  'variant-primary': variant_primary,
  'variant-secondary': variant_secondary,
  'variant-success': variant_success,
  'variant-info': variant_info,
  'variant-warning': variant_warning,
  'variant-danger': variant_danger,
  'variant-light': variant_light,
  'variant-dark': variant_dark,

  responsive,
  'responsive-sm': responsive_sm,
  'responsive-md': responsive_md,
  'responsive-lg': responsive_lg,
  'responsive-xl': responsive_xl,
  'responsive-xxl': responsive_xxl,

  ...attrs
}: R.JSX.IntrinsicElements['table'] & {
  sm?: boolean
  hover?: boolean
  'caption-top'?: boolean
} & OnlyOne<{
    striped?: boolean | 'columns'
    'striped-columns'?: boolean
  }> &
  OnlyOne<{
    bordered?: boolean
    borderless?: boolean
  }> &
  OnlyOne<{
    variant?: TVariants
    'variant-primary'?: boolean
    'variant-secondary'?: boolean
    'variant-success'?: boolean
    'variant-info'?: boolean
    'variant-warning'?: boolean
    'variant-danger'?: boolean
    'variant-light'?: boolean
    'variant-dark'?: boolean
  }> &
  OnlyOne<{
    responsive?: boolean | TBreakpoints
    'responsive-sm'?: boolean
    'responsive-md'?: boolean
    'responsive-lg'?: boolean
    'responsive-xl'?: boolean
    'responsive-xxl'?: boolean
  }>) {
  striped === 'columns' && (striped_columns = !(striped = false))

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

  responsive = getBreakpoint(
    responsive_sm,
    responsive_md,
    responsive_lg,
    responsive_xl,
    responsive_xxl,
    responsive
  )

  return (
    <div
      className={
        responsive &&
        'table-responsive' + (isString(responsive) ? '-' + responsive : '')
      }
    >
      <table
        {...attrs}
        className={[
          'table',

          sm && 'table-sm',
          hover && 'table-hover',
          caption_top && 'caption-top',

          (striped && 'table-striped') ||
            (striped_columns && 'table-striped-columns'),

          (bordered && 'table-bordered') || (borderless && 'table-borderless'),

          variant && 'table-' + variant,

          className,
        ]}
      >
        {children}
      </table>
    </div>
  )
}
