type RowColsTypes = 'auto' | 1 | 2 | 3 | 4 | 5 | 6

export function Row<T extends keyof HTMLElementTagNameMap = 'div'>({
  children,
  className,
  as,

  cols,
  'cols-xs': cols_xs,
  'cols-sm': cols_sm,
  'cols-md': cols_md,
  'cols-lg': cols_lg,
  'cols-xl': cols_xl,
  'cols-xxl': cols_xxl,

  ...attrs
}: R.JSX.IntrinsicElements[T] & {
  as?: T

  cols?: RowColsTypes
  'cols-xs'?: RowColsTypes
  'cols-sm'?: RowColsTypes
  'cols-md'?: RowColsTypes
  'cols-lg'?: RowColsTypes
  'cols-xl'?: RowColsTypes
  'cols-xxl'?: RowColsTypes
}) {
  const TagName = (as as 'div') || 'div'

  return (
    <TagName
      {...attrs}
      className={[
        'row',

        cols && 'row-cols-' + cols,
        cols_xs && 'row-cols-xs-' + cols_xs,
        cols_sm && 'row-cols-sm-' + cols_sm,
        cols_md && 'row-cols-md-' + cols_md,
        cols_lg && 'row-cols-lg-' + cols_lg,
        cols_xl && 'row-cols-xl-' + cols_xl,
        cols_xxl && 'row-cols-xxl-' + cols_xxl,

        className,
      ]}
    >
      {children}
    </TagName>
  )
}
