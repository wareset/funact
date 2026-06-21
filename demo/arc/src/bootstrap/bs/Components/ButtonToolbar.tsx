export function ButtonToolbar<T extends keyof HTMLElementTagNameMap = 'div'>({
  children,
  className,
  as,

  ...attrs
}: R.JSX.IntrinsicElements[T] & {
  as?: T
}) {
  const TagName = (as as 'div') || 'div'

  return (
    <TagName role='toolbar' {...attrs} className={['btn-toolbar', className]}>
      {children}
    </TagName>
  )
}
