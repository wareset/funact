import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'

function useCallback<T extends Function>(cb: T, deps: readonly unknown[]): T {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] || (hooks[idx] = { idx, hook: useCallback, cb, deps: [] })
  checkHook(data, useCallback, idx)

  for (let is = Object.is, dDeps = data.deps, i = deps.length; i-- > 0; ) {
    is(dDeps[i], deps[i]) || ((dDeps[i] = deps[i]), (data.cb = cb))
  }

  return data.cb
}
export { useCallback }
