import { getCurrentVNode } from '../VNode.utils'
import { IHook } from '../types'
import { checkHook } from '../utils'

import { useEffect } from './useEffect'
import { addVNodeInQueue } from '../scheduler'

interface IHookDataForUseSyncExternalStore extends IHook {
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
  const vNode = getCurrentVNode()
  const hookIdx = ++vNode.hookIdx
  const hooks = vNode.hooks as IHookDataForUseSyncExternalStore[] // борьба с ts
  
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
  checkHook(data, useSyncExternalStore, hookIdx)

  data.subscribe = subscribe
  data.getSnapshot = getSnapshot
  useEffect(data.effect, [subscribe])
  useEffect(data.check)

  return data.value
}
export { useSyncExternalStore }
