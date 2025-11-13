import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'

import type { RefObject } from '../types'

function useRef<T>(initialValue: T): RefObject<T>
function useRef<T>(initialValue: T | null): RefObject<T | null>
function useRef<T>(initialValue: T | undefined): RefObject<T | undefined>

function useRef<T>(initialValue: T): RefObject<T> {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks

  let data = hooks[hookIdx]
  if (data) {
    checkHook(data, useRef, hookIdx)
  } else {
    data = hooks[hookIdx] = {
      hookIdx,
      hookType: useRef,
      vNode,
      value: { current: initialValue },
    }
  }

  return data.value
}
export { useRef }
