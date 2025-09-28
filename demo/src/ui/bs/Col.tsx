import { isBoolean } from './utils'

type ColTypes = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type OrderTypes = 'first' | 'last' | 1 | 2 | 3 | 4 | 5
type OffsetTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export interface ColProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType

  col?: ColTypes
  'col-xs'?: boolean | ColTypes
  'col-sm'?: boolean | ColTypes
  'col-md'?: boolean | ColTypes
  'col-lg'?: boolean | ColTypes
  'col-xl'?: boolean | ColTypes
  'col-xxl'?: boolean | ColTypes

  order?: OrderTypes
  'order-xs'?: OrderTypes
  'order-sm'?: OrderTypes
  'order-md'?: OrderTypes
  'order-lg'?: OrderTypes
  'order-xl'?: OrderTypes
  'order-xxl'?: OrderTypes

  offset?: OffsetTypes
  'offset-xs'?: OffsetTypes
  'offset-sm'?: OffsetTypes
  'offset-md'?: OffsetTypes
  'offset-lg'?: OffsetTypes
  'offset-xl'?: OffsetTypes
  'offset-xxl'?: OffsetTypes
}
export function Col({
  children,
  as: TagName = 'div',

  col,
  'col-xs': col_xs,
  'col-sm': col_sm,
  'col-md': col_md,
  'col-lg': col_lg,
  'col-xl': col_xl,
  'col-xxl': col_xxl,

  order,
  'order-xs': order_xs,
  'order-sm': order_sm,
  'order-md': order_md,
  'order-lg': order_lg,
  'order-xl': order_xl,
  'order-xxl': order_xxl,

  offset,
  'offset-xs': offset_xs,
  'offset-sm': offset_sm,
  'offset-md': offset_md,
  'offset-lg': offset_lg,
  'offset-xl': offset_xl,
  'offset-xxl': offset_xxl,

  ...attrs
}: ColProps) {
  return (
    <TagName
      {...attrs}
      className={R.classnames([
        'col',
        attrs.className,

        col && 'col-' + col,
        col_xs && 'col-xs' + (isBoolean(col_xs) ? '' : '-' + col_xs),
        col_sm && 'col-sm' + (isBoolean(col_sm) ? '' : '-' + col_sm),
        col_md && 'col-md' + (isBoolean(col_md) ? '' : '-' + col_md),
        col_lg && 'col-lg' + (isBoolean(col_lg) ? '' : '-' + col_lg),
        col_xl && 'col-xl' + (isBoolean(col_xl) ? '' : '-' + col_xl),
        col_xxl && 'col-xxl' + (isBoolean(col_xxl) ? '' : '-' + col_xxl),

        order && 'order-' + order,
        order_xs && 'order-xs-' + order_xs,
        order_sm && 'order-sm-' + order_sm,
        order_md && 'order-md-' + order_md,
        order_lg && 'order-lg-' + order_lg,
        order_xl && 'order-xl-' + order_xl,
        order_xxl && 'order-xxl-' + order_xxl,

        offset && 'offset-' + offset,
        offset_xs && 'offset-xs-' + offset_xs,
        offset_sm && 'offset-sm-' + offset_sm,
        offset_md && 'offset-md-' + offset_md,
        offset_lg && 'offset-lg-' + offset_lg,
        offset_xl && 'offset-xl-' + offset_xl,
        offset_xxl && 'offset-xxl-' + offset_xxl,
      ])}
    >
      {children}
    </TagName>
  )
}
