import { isString } from '@/utils'
import { getBreakpoint, TBreakpoints } from '../utils'

export function CloseButton<T extends keyof HTMLElementTagNameMap = 'button'>({
  children,
  className,
  as,

  disabled,

  ...attrs
}: R.JSX.Attributes<HTMLElementTagNameMap[T]> & {
  as?: T
  disabled?: boolean
}) {
  const TagName = (as as 'button') || 'button'

  return (
    <TagName
      type={TagName === 'button' ? TagName : void 0}
      role={TagName !== 'button' ? 'button' : void 0}
      aria-label='Close'
      {...attrs}
      className={['btn-close', className]}
      disabled={!!disabled || void 0}
    >
      {children}
    </TagName>
  )
}
