import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'

import type { RefObject } from '../types'
function useRef<T>(initialValue: T): RefObject<T>
function useRef<T>(initialValue: T | null): RefObject<T | null>
function useRef<T>(initialValue: T | undefined): RefObject<T | undefined>
function useRef<T>(initialValue: T): RefObject<T> {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = { idx, hook: useRef, value: { current: initialValue } })
  checkHook(data, useRef, idx)

  return data.value
}
export { useRef }
