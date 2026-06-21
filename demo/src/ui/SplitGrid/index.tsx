import style from './style.css'
import {
  stopPropagation,
  preventDefault,
  getClientXYFromEvent,
  isValidTouch,
} from '@/utils'

let globalStart = 0
let globalNodeStyle!: CSSStyleDeclaration | null
let globalDirection!: 'row' | 'col'
let globalItem!: 'one' | 'two'
let globalBasis = 0

function setCursorMoveRow() {
  document.body.classList.add(style._move_row)
}
function setCursorMoveCol() {
  document.body.classList.add(style._move_col)
}
function setCursorEmpty() {
  const classList = document.body.classList
  classList.remove(style._move_row)
  classList.remove(style._move_col)
}

function touchMove(e: MouseEvent | TouchEvent) {
  if (globalNodeStyle && isValidTouch(e)) {
    let coord = globalStart
    let offset = 0
    switch (globalDirection) {
      case 'row':
        coord = getClientXYFromEvent(e).x
        break
      case 'col':
        coord = getClientXYFromEvent(e).y
        break
    }
    switch (globalItem) {
      case 'one':
        offset = globalStart - coord
        break
      case 'two':
        offset = -globalStart + coord
        break
    }
    globalNodeStyle.flex = `0 0 ${globalBasis - offset}px`
  }
}
function touchUp(e: MouseEvent | TouchEvent) {
  globalNodeStyle = null
  setCursorEmpty()
  removeEventListener('touchmove', touchMove, true)
  removeEventListener('mousemove', touchMove, true)
  removeEventListener('touchend', touchUp, true)
  removeEventListener('mouseup', touchUp, true)
}

export function SplitGrid({
  children,
  direction,
  item,
  size,
  // unit,
}: {
  children: [any, any]
  direction: 'row' | 'col'
  item: 'one' | 'two'
  size: number
  // unit: 'px' | '%'
}) {
  const refDivOne = R.useRef<HTMLDivElement>(null)
  const refDivTwo = R.useRef<HTMLDivElement>(null)

  R.useEffect(() => {
    const nodeOne = refDivOne.current
    const nodeTwo = refDivTwo.current
    if (nodeOne && nodeTwo) {
      const nodeStyleOne = nodeOne.style
      const nodeStyleTwo = nodeTwo.style

      // if (unit !== 'px' && unit !== '%') {
      //   throw `SplitGrid: 'unit' must be "px" | "%"`
      // }
      if (direction !== 'row' && direction !== 'col') {
        throw `SplitGrid: 'direction' must be "row" | "col"`
      }

      switch (item) {
        case 'one':
          nodeStyleTwo.flex = '1 1 auto'
          nodeStyleOne.flex = `0 0 ${size}px`
          break
        case 'two':
          nodeStyleOne.flex = '1 1 auto'
          nodeStyleTwo.flex = `0 0 ${size}px`
          break
        default:
          throw `SplitGrid: 'item' must be "one" | "two"`
      }
    }
  }, [direction, item, size])

  const refForDivListener = R.useRef<(e: MouseEvent | TouchEvent) => any>(null)
  let divListener = refForDivListener.current
  if (!divListener) {
    divListener = refForDivListener.current = function (
      this: HTMLDivElement,
      e: MouseEvent | TouchEvent
    ) {
      if (!globalNodeStyle && isValidTouch(e)) {
        const nodeOne = refDivOne.current
        const nodeTwo = refDivTwo.current
        if (nodeOne && nodeTwo) {
          const node = item === 'one' ? nodeOne : nodeTwo
          switch ((globalDirection = direction)) {
            case 'row':
              setCursorMoveRow()
              globalBasis = node.clientWidth
              globalStart = getClientXYFromEvent(e).x
              break
            case 'col':
              setCursorMoveCol()
              globalBasis = node.clientHeight
              globalStart = getClientXYFromEvent(e).y
              break
            default:
              return
          }
          globalItem = item
          globalNodeStyle = node.style
          addEventListener('touchmove', touchMove, true)
          addEventListener('mousemove', touchMove, true)
          addEventListener('touchend', touchUp, true)
          addEventListener('mouseup', touchUp, true)
        }
      }
    }
  }

  return (
    <section className={[style._split_grid, direction]}>
      <div ref={refDivOne} className='one'>
        {children[0]}
      </div>
      <div ref={refDivTwo} className='two'>
        {children[1]}
      </div>
      <div
        className='div'
        onContextmenu={preventDefault}
        onMousedownCapture={divListener}
        onTouchstartCapture={divListener}
      ></div>
    </section>
  )
}
