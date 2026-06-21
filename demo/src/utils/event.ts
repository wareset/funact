export function getClientXYFromEvent(e: MouseEvent | TouchEvent) {
  let { clientX: x, clientY: y } =
    'touches' in e ? e.touches[0] || { clientX: 0, clientY: 0 } : e
  return { x, y }
}

export function isValidTouch(e: MouseEvent | TouchEvent) {
  return 'touches' in e ? e.touches.length === 1 : e.button === 0
}

export function preventDefault(e: Event) {
  e.defaultPrevented || e.preventDefault()
}

export function stopPropagation(e: Event) {
  e.stopPropagation()
}

export function preventDefaultAndStopPropagation(e: Event) {
  preventDefault(e), stopPropagation(e)
}
