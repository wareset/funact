import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'

import type { RefObject } from '../types'
function useRef<T>(initialValue: T): RefObject<T>
function useRef<T>(initialValue: T | null): RefObject<T | null>
function useRef<T>(initialValue: T | undefined): RefObject<T | undefined>
function useRef<T>(initialValue: T): RefObject<T> {
  const vNode = getVNodeForHook()
  const hookIdx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useRef,
      vNode,
      value: { current: initialValue },
    })
  checkHook(data, useRef, hookIdx, vNode)

  return data.value
}
export { useRef }
