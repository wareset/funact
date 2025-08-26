import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'
import { addEffectInQueue } from '../scheduler'

function useEffect(
  effect: (() => void) | (() => () => void),
  deps?: readonly unknown[]
): void {
  let needUpdate = false

  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    ((needUpdate = true),
    (hooks[idx] = {
      idx,
      hook: useEffect,
      vNode,
      effect: effect,
      deps: [],
      cleanup: null,
    }))
  checkHook(data, useEffect, idx)

  if (deps)
    for (let is = Object.is, dDeps = data.deps, i = deps.length; i-- > 0; ) {
      is(dDeps[i], deps[i]) || ((dDeps[i] = deps[i]), (needUpdate = true))
    }
  else needUpdate = true

  if (needUpdate) {
    data.effect = effect
    addEffectInQueue(data)
  }
}
export { useEffect }
