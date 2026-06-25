const Context = R.createContext<HTMLCanvasElement | null>(null)

export function getCanvas() {
  return R.use(Context)
}
export function useGetCanvas() {
  return R.useContext(Context)
}

export function Canvas({
  children,
  ...attrs
}: R.JSX.IntrinsicElements['canvas']) {
  const { 0: canvas, 1: setCanvas } = R.useState<HTMLCanvasElement | null>(null)

  // return canvas ? (
  //   <canvas {...attrs}>
  //     <Context value={canvas}>{children}</Context>
  //   </canvas>
  // ) : (
  //   <canvas
  //     ref={(c) => {
  //       c && setCanvas(c)
  //     }}
  //     style={{ display: 'none' }}
  //   />
  // )
  return (
    <canvas {...attrs}>
      {canvas ? (
        <Context value={canvas}>{children}</Context>
      ) : (
        <div
          ref={(c) => {
            c && setCanvas(c.parentElement as HTMLCanvasElement)
          }}
          style={{ display: 'none' }}
        />
      )}
    </canvas>
  )
}
