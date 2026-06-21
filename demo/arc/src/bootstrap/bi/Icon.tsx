import { IconName } from './types'

export function Icon<T extends keyof HTMLElementTagNameMap = 'i'>({
  children,
  className,
  as,

  name,
  ...attrs
}: R.JSX.IntrinsicElements[T] & {
  children?: never
  as?: T

  name: IconName
}) {
  const TagName = (as as 'i') || 'i'
  return <TagName {...attrs} className={['bi bi-' + name, className]} />
}
