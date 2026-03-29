import { OnlyOne } from '@/types'
import { clamp, scale } from '@/utils'
import { getVariant, TVariants } from '../utils'

export function Progress({
  children,
  className,
  style,

  min,
  max,
  now,

  label,

  striped,
  animated,

  stacked,

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
}: R.JSX.Attributes<HTMLDivElement> & {
  children?: never

  min?: number
  max?: number
  now: number

  label?: string | number

  striped?: boolean
  animated?: boolean

  stacked?: boolean
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
  const isFinite = Number.isFinite

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

  isFinite(min) || (min = 0)
  isFinite(max) || (max = 100)
  if (min! > max!) [min, max] = [max, min]
  isFinite(now) || (now = (max! + min!) / 2)

  const widthStyle = `width:${clamp(scale(now!, min!, max!, 0, 100), 0, 100)}%`

  return (
    <div
      role='progressbar'
      aria-valuenow={now}
      aria-valuemin={min}
      aria-valuemax={max}
      {...attrs}
      className={['progress', className]}
      style={[style, stacked && widthStyle]}
    >
      <div
        className={[
          'progress-bar',
          variant && 'text-bg-' + variant,

          (striped || animated) && 'progress-bar-striped',
          animated && 'progress-bar-animated',
        ]}
        style={stacked || widthStyle}
      >
        {label}
      </div>
    </div>
  )
}
Progress.Stacked = ProgressStacked

export function ProgressStacked({
  children,
  className,
  ...attrs
}: R.JSX.Attributes<HTMLElement>) {
  return (
    <div {...attrs} className={['progress-stacked', className]}>
      {children}
    </div>
  )
}
