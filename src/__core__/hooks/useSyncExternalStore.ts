import { checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'

import { useEffect } from './useEffect'
import { addVNodeInQueue } from '../scheduler'

import { IHook } from '../types'

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

  let hook = prevHook.nextHook as IHookDataForUseSyncExternalStore
  if (hook) {
    checkHook(hook, useSyncExternalStore)
    hook.subscribe = subscribe
    hook.getSnapshot = getSnapshot
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useSyncExternalStore,
      vNode,
      value: getSnapshot(),

      subscribe: subscribe,
      getSnapshot: getSnapshot,
      check() {
        if (!Object.is(hook.value, (hook.value = hook.getSnapshot()))) {
          addVNodeInQueue(hook.vNode)
        }
      },
      effect() {
        return hook.subscribe(hook.check)
      },
    } satisfies IHookDataForUseSyncExternalStore
  }
  vNode.prevHook = hook

  useEffect(hook.effect, [subscribe])
  useEffect(hook.check)

  return hook.value
}
export { useSyncExternalStore }
