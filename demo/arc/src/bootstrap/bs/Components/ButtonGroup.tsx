import { OnlyOne } from '@/types'

export function ButtonGroup<T extends keyof HTMLElementTagNameMap = 'div'>({
  children,
  className,
  as,

  vertical,

  sm,
  lg,

  ...attrs
}: R.JSX.IntrinsicElements[T] & {
  as?: T

  vertical?: boolean
} & OnlyOne<{
    sm?: boolean
    lg?: boolean
  }>) {
  const TagName = (as as 'div') || 'div'

  return (
    <TagName
      role='group'
      {...attrs}
      className={[
        'btn-group' + (vertical ? '-vertical' : ''),

        (lg && 'btn-group-lg') || (sm && 'btn-group-sm'),

        className,
      ]}
    >
      {children}
    </TagName>
  )
}
