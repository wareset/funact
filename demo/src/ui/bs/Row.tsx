import { classnames } from 'barely-react'

type RowColsTypes = 'auto' | 1 | 2 | 3 | 4 | 5 | 6

export interface RowProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType

  cols?: RowColsTypes
  'cols-xs'?: RowColsTypes
  'cols-sm'?: RowColsTypes
  'cols-md'?: RowColsTypes
  'cols-lg'?: RowColsTypes
  'cols-xl'?: RowColsTypes
  'cols-xxl'?: RowColsTypes
}
export function Row({
  children,
  as: TagName = 'div',

  cols,
  'cols-xs': cols_xs,
  'cols-sm': cols_sm,
  'cols-md': cols_md,
  'cols-lg': cols_lg,
  'cols-xl': cols_xl,
  'cols-xxl': cols_xxl,

  ...attrs
}: RowProps) {
  return (
    <TagName
      {...attrs}
      className={classnames([
        'row',
        attrs.className,

        cols && 'row-cols-' + cols,
        cols_xs && 'row-cols-xs-' + cols_xs,
        cols_sm && 'row-cols-sm-' + cols_sm,
        cols_md && 'row-cols-md-' + cols_md,
        cols_lg && 'row-cols-lg-' + cols_lg,
        cols_xl && 'row-cols-xl-' + cols_xl,
        cols_xxl && 'row-cols-xxl-' + cols_xxl,
      ])}
    >
      {children}
    </TagName>
  )
}
