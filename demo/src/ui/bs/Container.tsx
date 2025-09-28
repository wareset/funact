import { Breakpoint } from './types'
import { isString } from './utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
  fluid?: boolean | Breakpoint | 'fluid'
}
export function Container({
  children,
  as: TagName = 'div',
  fluid,
  ...attrs
}: ContainerProps) {
  return (
    <TagName
      {...attrs}
      className={R.classnames([
        'container' + (fluid ? (isString(fluid) ? '-' + fluid : '-fluid') : ''),
        attrs.className
      ])}
    >
      {children}
    </TagName>
  )
}
