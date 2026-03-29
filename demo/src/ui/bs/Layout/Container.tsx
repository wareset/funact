import { isString } from '@/utils'
import { OnlyOne } from '@/types'
import { getBreakpoint, TBreakpoints } from '../utils'

export function Container<T extends keyof HTMLElementTagNameMap = 'div'>({
  children,
  className,
  as,

  sm,
  md,
  lg,
  xl,
  xxl,
  fluid,

  ...attrs
}: R.JSX.Attributes<HTMLElementTagNameMap[T]> & {
  as?: T
} & OnlyOne<{
    sm?: boolean
    md?: boolean
    lg?: boolean
    xl?: boolean
    xxl?: boolean
    fluid?: boolean | TBreakpoints
  }>) {
  const TagName = (as as 'div') || 'div'

  fluid = getBreakpoint(sm, md, lg, xl, xxl, fluid)

  return (
    <TagName
      {...attrs}
      className={[
        'container' + (fluid ? (isString(fluid) ? '-' + fluid : '-fluid') : ''),
        className,
      ]}
    >
      {children}
    </TagName>
  )
}
