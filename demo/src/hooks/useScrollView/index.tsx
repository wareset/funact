import style from './style.css'
import { stopPropagation, getClientXYFromEvent, isValidTouch } from '@/utils'

function onWheelX(this: HTMLElement, e: WheelEvent) {
  const prev = this.scrollLeft
  this.scrollLeft += e.deltaY
  if (prev !== this.scrollLeft) {
    stopPropagation(e)
  }
}

function onWheelY(this: HTMLElement, e: WheelEvent) {
  const prev = this.scrollTop
  this.scrollTop += e.deltaY
  if (prev !== this.scrollTop) {
    stopPropagation(e)
  }
}

const WHEEL = {
  __proto__: null,
  x: onWheelX,
  y: onWheelY,
} as const

let isDown = false
let posX = 0
let posY = 0
let allowClick = true
let activeElement!: Element | null
const ELEMENTS_FOR_X: HTMLElement[] = []
const ELEMENTS_FOR_Y: HTMLElement[] = []

function initDown(e: MouseEvent | TouchEvent) {
  if (!isDown) {
    isDown = true
    addEventListener('touchmove', touchMove, true)
    addEventListener('mousemove', touchMove, true)
    addEventListener('touchend', touchUp, true)
    addEventListener('mouseup', touchUp, true)
    ;({ x: posX, y: posY } = getClientXYFromEvent(e))
    activeElement = document.activeElement
  }
  allowClick = true
}
function touchDownX(this: HTMLElement, e: MouseEvent | TouchEvent) {
  if (isValidTouch(e)) {
    initDown(e)
    ELEMENTS_FOR_X.push(this)
  }
}
function touchDownY(this: HTMLElement, e: MouseEvent | TouchEvent) {
  if (isValidTouch(e)) {
    initDown(e)
    ELEMENTS_FOR_Y.push(this)
  }
}
function touchDown(this: HTMLElement, e: MouseEvent | TouchEvent) {
  if (isValidTouch(e)) {
    initDown(e)
    ELEMENTS_FOR_X.push(this)
    ELEMENTS_FOR_Y.push(this)
  }
}
const TOUCH = {
  __proto__: null,
  x: touchDownX,
  y: touchDownY,
  xy: touchDown,
} as const

function touchMove(e: MouseEvent | TouchEvent) {
  if (isValidTouch(e)) {
    const { x, y } = getClientXYFromEvent(e)
    const offsetX = posX - (posX = x)
    const offsetY = posY - (posY = y)

    if (offsetX)
      for (let a = ELEMENTS_FOR_X, i = a.length; i-- > 0; ) {
        const node = a[i]
        const prev = node.scrollLeft
        node.scrollLeft += offsetX
        if (prev !== node.scrollLeft) {
          if (allowClick) setCursorGrabbing(), (allowClick = false)
          break
        }
      }

    if (offsetY)
      for (let a = ELEMENTS_FOR_Y, i = a.length; i-- > 0; ) {
        const node = a[i]
        const prev = node.scrollTop
        node.scrollTop += offsetY
        if (prev !== node.scrollTop) {
          if (allowClick) setCursorGrabbing(), (allowClick = false)
          allowClick = false
          break
        }
      }
  }
}

function touchUp(e: MouseEvent | TouchEvent) {
  isDown = false
  setCursorEmpty()
  ELEMENTS_FOR_X.length = ELEMENTS_FOR_Y.length = 0
  removeEventListener('touchmove', touchMove, true)
  removeEventListener('mousemove', touchMove, true)
  removeEventListener('touchend', touchUp, true)
  removeEventListener('mouseup', touchUp, true)
  if (
    activeElement !== (activeElement = document.activeElement) &&
    activeElement
  ) {
    ;(activeElement as HTMLElement).blur()
  }
}

function onClick(e: MouseEvent) {
  if (!allowClick) {
    stopPropagation(e)
    allowClick = true
  }
}

function setCursorGrabbing() {
  // node.style.setProperty('cursor', 'grabbing', 'important')
  document.body.classList.add(style._grabbing)
}
function setCursorEmpty() {
  // node.style.setProperty('cursor', '')
  document.body.classList.remove(style._grabbing)
}

// export function ScrollView({
//   wheel,
//   touch,
//   children,
// }: {
//   wheel?: null | 'x' | 'y'
//   touch?: null | 'x' | 'y' | 'xy'
//   children?: any
// }) {
//   return (
//     <section
//       className={style._scroll_view}
//       onWheel={WHEEL[wheel!]}
//       onClickCapture={onClick}
//       onMousedownCapture={TOUCH[touch!]}
//       onTouchstartCapture={TOUCH[touch!]}
//     >
//       {children}
//     </section>
//   )
// }

export function useScrollView<T = HTMLElement>({
  // ref,
  wheel,
  touch,
}: {
  // ref?: R.RefObject<T | null>
  wheel?: null | 'x' | 'y'
  touch?: null | 'x' | 'y' | 'xy'
}) {
  const ref = R.useRef<T>(null)

  R.useEffect(() => {
    const node = ref.current as HTMLElement
    if (node) {
      const onWheel = wheel && WHEEL[wheel]
      const onTouch = touch && TOUCH[touch]
      // node.style.setProperty('overflow', 'hidden', 'important')

      node.addEventListener('click', onClick, true)
      if (onWheel) node.addEventListener('wheel', onWheel)
      if (onTouch) {
        node.addEventListener('touchstart', onTouch, true)
        node.addEventListener('mousedown', onTouch, true)
      }
      return () => {
        node.removeEventListener('click', onClick, true)
        if (onWheel) node.removeEventListener('wheel', onWheel)
        if (onTouch) {
          node.removeEventListener('touchstart', onTouch, true)
          node.removeEventListener('mousedown', onTouch, true)
        }
      }
    }
  }, [wheel, touch])

  return ref
}
