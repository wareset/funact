import { IconName } from './types'

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  children?: never
  as?: React.ElementType
  name: IconName
}
export function Icon({
  children,
  as: TagName = 'i',
  name,
  ...attrs
}: IconProps) {
  return (
    <TagName
      {...attrs}
      className={R.classnames(['bi bi-' + name, attrs.className])}
    />
  )
}
