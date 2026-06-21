export function Image({
  children,
  className,

  fluid,
  rounded,
  thumbnail,

  ...attrs
}: R.JSX.IntrinsicElements['img'] & {
  children?: never

  fluid?: boolean
  rounded?: boolean
  thumbnail?: boolean
}) {
  return (
    <img
      {...attrs}
      className={[
        fluid && 'img-fluid',
        rounded && 'rounded',
        thumbnail && 'img-thumbnail',
        className,
      ]}
    />
  )
}
