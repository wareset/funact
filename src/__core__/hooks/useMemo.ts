import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'

function useMemo<T>(factory: () => T, deps: readonly unknown[]): T {
  let needUpdate = false

  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    ((needUpdate = true),
    (hooks[idx] = { idx, hook: useMemo, value: null, deps: [] }))
  checkHook(data, useMemo, idx)

  for (let is = Object.is, dDeps = data.deps, i = deps.length; i-- > 0; ) {
    is(dDeps[i], deps[i]) || ((dDeps[i] = deps[i]), (needUpdate = true))
  }

  return needUpdate ? (data.value = factory()) : data.value
}
export { useMemo }
