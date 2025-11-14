import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'

import type { RefObject } from '../types'

function useRef<T>(initialValue: T): RefObject<T>
function useRef<T>(initialValue: T | null): RefObject<T | null>
function useRef<T>(initialValue: T | undefined): RefObject<T | undefined>

function useRef<T>(initialValue: T): RefObject<T> {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let data = prevHook.nextHook
  if (data) {
    checkHook(data, useRef)
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useRef,
      vNode,
      value: { current: initialValue },
    }
  }
  vNode.prevHook = data

  return data.value
}
export { useRef }
