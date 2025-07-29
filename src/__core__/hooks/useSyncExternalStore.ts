import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'

import { useEffect } from './useEffect'
import { addVNodeInQueue } from '../scheduler'

function useSyncExternalStore<Snapshot>(
  subscribe: (onStoreChange: () => void) => () => void,
  getSnapshot: () => Snapshot,
  _getServerSnapshot?: () => Snapshot
): Snapshot {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = {
      idx,
      hook: useSyncExternalStore,
      vNode,
      value: getSnapshot(),
      subscribe,
      getSnapshot,
      check() {
        if (!Object.is(data.value, (data.value = data.getSnapshot()))) {
          addVNodeInQueue(data.vNode)
        }
      },
      effect() {
        return data.subscribe(data.check)
      },
    })
  checkHook(data, useSyncExternalStore, idx)

  data.subscribe = subscribe
  data.getSnapshot = getSnapshot
  useEffect(data.effect, [subscribe])
  useEffect(data.check)

  return data.value
}
export { useSyncExternalStore }
