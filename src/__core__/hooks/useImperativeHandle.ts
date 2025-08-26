import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'

import type { RefObject } from '../types'

function useImperativeHandle<T, R extends T>(
  ref: RefObject<T | null> | null | undefined,
  init: () => R,
  deps?: readonly unknown[]
): void {
  let needUpdate = false

  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    ((needUpdate = true),
    (hooks[idx] = { idx, hook: useImperativeHandle, ref, deps: [] }))
  checkHook(data, useImperativeHandle, idx)

  if (deps)
    for (let is = Object.is, dDeps = data.deps, i = deps.length; i-- > 0; ) {
      is(dDeps[i], deps[i]) || ((dDeps[i] = deps[i]), (needUpdate = true))
    }

  if ((needUpdate || data.ref !== ref) && ref) (data.ref = ref).current = init()
}
export { useImperativeHandle }
