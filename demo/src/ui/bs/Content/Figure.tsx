export function Figure({
  children,
  className,
  ...attrs
}: R.JSX.Attributes<HTMLElement>) {
  return (
    <figure {...attrs} className={['figure', className]}>
      {children}
    </figure>
  )
}
Figure.Image = FigureImage
Figure.Caption = FigureCaption

export function FigureImage({
  children,
  className,

  rounded,

  ...attrs
}: R.JSX.Attributes<HTMLImageElement> & {
  children?: never
  rounded?: boolean
}) {
  return (
    <img
      {...attrs}
      className={['figure-img img-fluid', rounded && 'rounded', className]}
    />
  )
}

export function FigureCaption({
  children,
  className,
  ...attrs
}: R.JSX.Attributes<HTMLElement>) {
  return (
    <figcaption {...attrs} className={['figure-caption', className]}>
      {children}
    </figcaption>
  )
}
