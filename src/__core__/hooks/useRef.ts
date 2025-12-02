import { checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'

import { IHook } from '../types'
import { RefObject } from '../types'

function useRef<T>(initialValue: T): RefObject<T>
function useRef<T>(initialValue: T | null): RefObject<T | null>
function useRef<T>(initialValue: T | undefined): RefObject<T | undefined>

function useRef<T>(initialValue: T): RefObject<T> {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, useRef)
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useRef,
      vNode,
      value: { current: initialValue },
    } satisfies IHook
  }
  vNode.prevHook = hook

  return hook.value
}
export { useRef }
