type TCollapseGroupContext = {
  alwaysOpen: boolean
  collapses: TCollapseContext[]
}
const CollapseGroupContext = R.createContext<TCollapseGroupContext | null>(null)

export function CollapseGroup({
  children,
  alwaysOpen,
}: {
  children?: any
  alwaysOpen?: boolean
}) {
  const context = R.useRef<TCollapseGroupContext>(null)
  alwaysOpen = !!alwaysOpen
  if (!context.current) {
    context.current = { alwaysOpen, collapses: [] }
  } else if (context.current.alwaysOpen !== alwaysOpen) {
    context.current.alwaysOpen = alwaysOpen
    if (!alwaysOpen) {
      let isShowed = false
      for (let a = context.current.collapses, i = 0; i < a.length; i++) {
        if (a[i].show) {
          if (!isShowed) isShowed = true
          else a[i].setShow(false)
        }
      }
    }
  }

  return (
    <CollapseGroupContext value={context.current}>
      {children}
    </CollapseGroupContext>
  )
}

type TCollapseContext = {
  id: string
  show: boolean
  isDelay?: boolean
  setShow: (v: boolean) => void
  timeoutId: null | ReturnType<typeof setTimeout>
  nodeTriggerRef?: R.RefObject<HTMLButtonElement | null>
  nodeContentRef?: R.RefObject<HTMLDivElement | null>
}
const CollapseContext = R.createContext<TCollapseContext>(null as any)

export function Collapse({
  children,
  group,
  expanded,
}: {
  children?: any
  group?: boolean
  expanded?: boolean
}) {
  const id = R.useId()
  const [show, setShow] = R.useState(!!expanded)
  const context = R.useRef<TCollapseContext>(null)
  if (!context.current) {
    context.current = { id, show, setShow, timeoutId: null }
  }

  const collapseGroup = R.useContext(CollapseGroupContext)
  R.useEffect(() => {
    if (group && collapseGroup) {
      const item = context.current!
      const collapses = collapseGroup.collapses
      // if (show && !collapseGroup.alwaysOpen) {
      //   for (let i = collapses.length; i-- > 0; )
      //     if (collapses[i].show) collapses[i].setShow(false)
      // }
      collapses.push(item)
      return () => {
        const idx = collapses.indexOf(item)
        idx < 0 || collapses.splice(idx, 1)
      }
    }
  }, [collapseGroup])

  R.useEffect(() => {
    const item = context.current!
    item.show = show

    if (item.timeoutId !== null) {
      clearTimeout(item.timeoutId), (item.timeoutId = null)
    }

    if (item.nodeTriggerRef) {
      const node = item.nodeTriggerRef.current
      if (node) {
        node.classList[show ? 'remove' : 'add']('collapsed')
        node.setAttribute('aria-expanded', show ? 'true' : 'false')
      }
    }

    if (item.nodeContentRef) {
      const node = item.nodeContentRef.current
      if (node) {
        let complete: Function
        const style = node.style,
          classList = node.classList

        if (!show) {
          style.height = `${node.scrollHeight}px`
          node.clientHeight // reflow
          classList.remove('collapse', 'show'), classList.add('collapsing')
          complete = (): void => {
            item.timeoutId = null
            if (!item.show) {
              classList.remove('collapsing'), classList.add('collapse')
            }
          }
          style.height = ''
        } else {
          style.height = '0'
          node.clientHeight // reflow
          classList.remove('collapse'), classList.add('collapsing')
          complete = (): void => {
            item.timeoutId = null
            if (item.show) {
              classList.remove('collapsing'), classList.add('collapse', 'show')
              style.height = ''
            }
          }
          style.height = `${node.scrollHeight}px`

          if (group && collapseGroup && !collapseGroup.alwaysOpen) {
            const collapses = collapseGroup.collapses
            for (let i = collapses.length; i-- > 0; ) {
              if (collapses[i] !== item && collapses[i].show)
                collapses[i].setShow(false)
            }
          }
        }
        if (item.isDelay) {
          item.timeoutId = setTimeout(complete, 500) as any
        } else {
          item.isDelay = true
          complete()
        }
      }
    }
  }, [show])

  return <CollapseContext value={context.current}>{children}</CollapseContext>
}

export function CollapseTrigger<
  T extends keyof HTMLElementTagNameMap = 'button',
>({
  children,
  className,
  as,
  ...attrs
}: R.JSX.Attributes<HTMLElementTagNameMap[T]> & {
  as?: T
}) {
  const TagName = (as as 'button') || 'button'
  const item = R.useContext(CollapseContext)
  const nodeTriggerRef = (item.nodeTriggerRef =
    R.useRef<HTMLButtonElement>(null))
  const itemId = item.id

  const clickRef = R.useRef<() => any>(null)
  if (!clickRef.current) {
    clickRef.current = () => {
      item.setShow(!item.show)
    }
  }

  return (
    <TagName
      type={TagName === 'button' ? TagName : void 0}
      role={TagName !== 'button' ? 'button' : void 0}
      {...attrs}
      id={'heading-' + itemId}
      ref={nodeTriggerRef}
      onClick={clickRef.current}
      aria-expanded={item.show}
      aria-controls={'collapse-' + itemId}
    >
      {children}
    </TagName>
  )
}

export function CollapseContent({
  children,
  ...attrs
}: R.JSX.Attributes<HTMLDivElement>) {
  const item = R.useContext(CollapseContext)
  const nodeContentRef = R.useRef<HTMLDivElement>(null)
  const itemId = item.id

  item.nodeContentRef = nodeContentRef

  return (
    <div
      {...attrs}
      ref={nodeContentRef}
      id={'collapse-' + itemId}
      aria-labelledby={'heading-' + itemId}
    >
      {children}
    </div>
  )
}
