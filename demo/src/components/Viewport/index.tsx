import style from './style.css'
import {
  stopPropagation,
  preventDefault,
  getClientXYFromEvent,
  isValidTouch,
} from '@/utils'

let isDown = false
let globalNodeTop!: HTMLDivElement | null
let globalNodeTopLeft!: HTMLDivElement | null
let globalNodeBottomLeft!: HTMLDivElement | null
let posX = 0
let posY = 0
let clientWidth = 0
let clientHeight = 0

function setCursorMoveX() {
  document.body.classList.add(style._move_x)
}
function setCursorMoveY() {
  document.body.classList.add(style._move_y)
}
function setCursorMoveXY() {
  document.body.classList.add(style._move_xy)
}
function setCursorEmpty() {
  const classList = document.body.classList
  classList.remove(style._move_x)
  classList.remove(style._move_y)
  classList.remove(style._move_xy)
}

function initDown() {
  isDown = true
  addEventListener('touchmove', touchMove, true)
  addEventListener('mousemove', touchMove, true)
  addEventListener('touchend', touchUp, true)
  addEventListener('mouseup', touchUp, true)
}

function touchMove(e: MouseEvent | TouchEvent) {
  if (isValidTouch(e)) {
    const { x, y } = getClientXYFromEvent(e)

    if (globalNodeTop) {
      globalNodeTop.style.flex = `0 0 ${clientHeight - (posY - y)}px`
    }

    if (globalNodeTopLeft) {
      globalNodeTopLeft.style.flex =
        globalNodeBottomLeft!.style.flex = `0 0 ${clientWidth - (posX - x)}px`
    }
  }
}
function touchUp() {
  isDown = false
  setCursorEmpty()

  if (globalNodeTop) {
    const cH = globalNodeTop.clientHeight
    const pH = globalNodeTop.parentElement!.clientHeight
    globalNodeTop.style.flex = `0 0 ${(100 * cH) / pH}%`
    globalNodeTop = null
  }

  if (globalNodeTopLeft) {
    const cW = globalNodeTopLeft.clientWidth
    const pW = globalNodeTopLeft.parentElement!.clientWidth
    globalNodeTopLeft.style.flex =
      globalNodeBottomLeft!.style.flex = `0 0 ${(100 * cW) / pW}%`
    globalNodeTopLeft = globalNodeBottomLeft = null
  }

  removeEventListener('touchmove', touchMove, true)
  removeEventListener('mousemove', touchMove, true)
  removeEventListener('touchend', touchUp, true)
  removeEventListener('mouseup', touchUp, true)
}

export function Viewport({
  children,
}: {
  children: { topLeft: any; topRight: any; bottomLeft: any; bottomRight: any }
}) {
  const refNodeTop = R.useRef<HTMLDivElement>(null)
  const refNodeTopLeft = R.useRef<HTMLDivElement>(null)
  const refNodeBottomLeft = R.useRef<HTMLDivElement>(null)

  const refForListeners = R.useRef<{
    top: (e: MouseEvent | TouchEvent) => any
    left: (e: MouseEvent | TouchEvent) => any
    cross: (e: MouseEvent | TouchEvent) => any
  }>(null)
  let listeners = refForListeners.current
  if (!listeners) {
    listeners = refForListeners.current = {
      top(this: HTMLDivElement, e: MouseEvent | TouchEvent) {
        if (this !== e.target) return
        if (!isDown && isValidTouch(e)) {
          const nodeTop = refNodeTop.current
          if (nodeTop) {
            setCursorMoveY()
            globalNodeTop = nodeTop
            globalNodeTopLeft = globalNodeBottomLeft = null
            ;({ clientHeight } = nodeTop)
            ;({ y: posY } = getClientXYFromEvent(e))
            initDown()
          }
        }
      },
      left(this: HTMLDivElement, e: MouseEvent | TouchEvent) {
        if (this !== e.target) return
        if (!isDown && isValidTouch(e)) {
          const nodeTopLeft = refNodeTopLeft.current
          const nodeBottomLeft = refNodeBottomLeft.current
          if (nodeTopLeft && nodeBottomLeft) {
            setCursorMoveX()
            globalNodeTop = null
            globalNodeTopLeft = nodeTopLeft
            globalNodeBottomLeft = nodeBottomLeft
            ;({ clientWidth } = nodeTopLeft)
            ;({ x: posX } = getClientXYFromEvent(e))
            initDown()
          }
        }
      },
      cross(this: HTMLDivElement, e: MouseEvent | TouchEvent) {
        if (this !== e.target) return
        if (!isDown && isValidTouch(e)) {
          const nodeTop = refNodeTop.current
          const nodeTopLeft = refNodeTopLeft.current
          const nodeBottomLeft = refNodeBottomLeft.current
          if (nodeTop && nodeTopLeft && nodeBottomLeft) {
            setCursorMoveXY()
            globalNodeTop = nodeTop
            globalNodeTopLeft = nodeTopLeft
            globalNodeBottomLeft = nodeBottomLeft
            ;({ clientHeight } = nodeTop)
            ;({ clientWidth } = nodeTopLeft)
            ;({ x: posX, y: posY } = getClientXYFromEvent(e))
            initDown()
          }
        }
      },
    }
  }

  return (
    <section className={style._viewport}>
      <div className='top' ref={refNodeTop}>
        <div className='left' ref={refNodeTopLeft}>
          {children.topLeft}
        </div>
        <div className='right'>{children.topRight}</div>
        <div
          className='div'
          onContextmenu={preventDefault}
          onMousedownCapture={listeners.left}
          onTouchstartCapture={listeners.left}
        ></div>
      </div>
      <div className='bottom'>
        <div className='left' ref={refNodeBottomLeft}>
          {children.bottomLeft}
        </div>
        <div className='right'>{children.bottomRight}</div>
        <div
          className='div'
          onContextmenu={preventDefault}
          onMousedownCapture={listeners.left}
          onTouchstartCapture={listeners.left}
        >
          <div
            className='cross'
            onContextmenu={preventDefault}
            onMousedownCapture={listeners.cross}
            onTouchstartCapture={listeners.cross}
          ></div>
        </div>
      </div>
      <div
        className='div'
        onContextmenu={preventDefault}
        onMousedownCapture={listeners.top}
        onTouchstartCapture={listeners.top}
      ></div>
    </section>
  )
}
