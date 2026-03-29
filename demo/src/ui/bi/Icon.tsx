import { IconName } from './types'

export function Icon<T extends keyof HTMLElementTagNameMap = 'i'>({
  children,
  as,
  name,
  ...attrs
}: R.JSX.Attributes<HTMLElementTagNameMap[T]> & {
  children?: never
  as?: T
  name: IconName
}) {
  const TagName = (as as 'i') || 'i'
  return <TagName {...attrs} className={['bi bi-' + name, attrs.className]} />
}
