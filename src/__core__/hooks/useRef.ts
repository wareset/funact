import { getCurrentVNode } from '../VNode_utils'
import { checkHook } from '../utils'

import type { IRefObject } from '../types'
function useRef<T>(initialValue: T): IRefObject<T>
function useRef<T>(initialValue: T | null): IRefObject<T | null>
function useRef<T>(initialValue: T | undefined): IRefObject<T | undefined>
function useRef<T>(initialValue: T): IRefObject<T> {
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks
  
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useRef,
      vNode,
      value: { current: initialValue },
    })
  checkHook(data, useRef, hookIdx)

  return data.value
}
export { useRef }
