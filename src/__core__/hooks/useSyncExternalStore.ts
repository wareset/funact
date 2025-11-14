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
  const prevHook = vNode.prevHook

  let data = prevHook.nextHook as IHookDataForUseSyncExternalStore
  if (data) {
    checkHook(data, useSyncExternalStore)

    data.subscribe = subscribe
    data.getSnapshot = getSnapshot
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
      hookType: useSyncExternalStore,
      vNode,
      value: getSnapshot(),

      subscribe: subscribe,
      getSnapshot: getSnapshot,
      check() {
        if (!Object.is(data.value, (data.value = data.getSnapshot()))) {
          addVNodeInQueue(data.vNode)
        }
      },
      effect() {
        return data.subscribe(data.check)
      },
    } satisfies IHookDataForUseSyncExternalStore
  }
  vNode.prevHook = data

  useEffect(data.effect, [subscribe])
  useEffect(data.check)

  return data.value
}
export { useSyncExternalStore }
