import { getVNodeForHook, HookData } from '../VNode'
import { checkHook } from '../utils'

import { useEffect } from './useEffect'
import { addVNodeInQueue } from '../scheduler'

interface HookDataForUseSyncExternalStore extends HookData {
  subscribe: (onStoreChange: () => void) => () => void
  getSnapshot: () => any
  check: () => void
  effect: () => void
}

function useSyncExternalStore<Snapshot>(
  subscribe: (onStoreChange: () => void) => () => void,
  getSnapshot: () => Snapshot,
  _getServerSnapshot?: () => Snapshot
): Snapshot {
  const vNode = getVNodeForHook()
  const hookIdx = vNode.hookIdx
  const hooks = vNode.hooks as HookDataForUseSyncExternalStore[]
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx,
      hookType: useSyncExternalStore,
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
  checkHook(data, useSyncExternalStore, hookIdx, vNode)

  data.subscribe = subscribe
  data.getSnapshot = getSnapshot
  useEffect(data.effect, [subscribe])
  useEffect(data.check)

  return data.value
}
export { useSyncExternalStore }
